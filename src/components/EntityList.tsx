import React from 'react'
import { useState, useEffect } from 'react';
import { getEntities, Entity } from '../model/EntityModel';
import { ChapterSelect } from './ChapterSelect';
import { CharacterSelect } from './CharacterSelect';
import { ClassSelect } from './ClassSelect';


// Define the component
function EntityList() {
  const [entities, setEntities] = useState<Entity[]>([]);

  getEntities().then(data => setEntities(data));

  const characters = entities.filter((entity) => entity.isCharacter);
  const classes = entities.filter((entity) => !entity.isCharacter);

  const chapters = [...Array(26).keys()].map((i) => i + 1);
  const [selectedChapter, setSelectedChapter] = useState<string | undefined>("");

  const defaultCharacter : Entity = characters[0];
  const defaultClass : Entity = classes[0];

  const [selectedCharacter, setSelectedCharacter] = useState<Entity | undefined>(defaultCharacter);
  const [shownCharacters, setShownCharacters] = useState<Entity[]>(characters);
  const [selectedClass, setSelectedClass] = useState<Entity | undefined>(defaultClass);

  return (
    <div style={{ textAlign: "center" }}>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CharacterSelect onSelect={setSelectedCharacter} characters={shownCharacters} />
          <ClassSelect onSelect={setSelectedClass} classes={classes} />
          <ChapterSelect onSelect={setSelectedChapter} updateCharacters={setShownCharacters} chapters={chapters} characters={characters} />
        </div>

      </div>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Character</th>
            <th>HP</th>
            <th>STR</th>
            <th>MAG</th>
            <th>DEX</th>
            <th>SPD</th>
            <th>DEF</th>
            <th>RES</th>
            <th>LUCK</th>
            <th>BLD</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>{selectedCharacter?.name}</td>
            <td>{selectedCharacter?.hp}</td>
            <td>{selectedCharacter?.str}</td>
            <td>{selectedCharacter?.mag}</td>
            <td>{selectedCharacter?.dex}</td>
            <td>{selectedCharacter?.spd}</td>
            <td>{selectedCharacter?.def}</td>
            <td>{selectedCharacter?.res}</td>
            <td>{selectedCharacter?.lck}</td>
            <td>{selectedCharacter?.bld}</td>
          </tr>

          <tr>
            <td>{selectedClass?.name}</td>
            <td>{selectedClass?.hp}</td>
            <td>{selectedClass?.str}</td>
            <td>{selectedClass?.mag}</td>
            <td>{selectedClass?.dex}</td>
            <td>{selectedClass?.spd}</td>
            <td>{selectedClass?.def}</td>
            <td>{selectedClass?.res}</td>
            <td>{selectedClass?.lck}</td>
            <td>{selectedClass?.bld}</td>
          </tr>

          <tr>
            <td>{"TOTAL"}</td>
            <td>{(selectedClass?.hp || 0) + (selectedCharacter?.hp || 0)}</td>
            <td>{(selectedClass?.str || 0) + (selectedCharacter?.str || 0)}</td>
            <td>{(selectedClass?.mag || 0) + (selectedCharacter?.mag || 0)}</td>
            <td>{(selectedClass?.dex || 0) + (selectedCharacter?.dex || 0)}</td>
            <td>{(selectedClass?.spd || 0) + (selectedCharacter?.spd || 0)}</td>
            <td>{(selectedClass?.def || 0) + (selectedCharacter?.def || 0)}</td>
            <td>{(selectedClass?.res || 0) + (selectedCharacter?.res || 0)}</td>
            <td>{(selectedClass?.lck || 0) + (selectedCharacter?.lck || 0)}</td>
            <td>{(selectedClass?.bld || 0) + (selectedCharacter?.bld || 0)}</td>
          </tr>
        </tbody>
      </table>


    </div>
  );
}

export default EntityList;
