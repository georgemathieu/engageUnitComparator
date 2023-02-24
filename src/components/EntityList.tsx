import React from 'react'
import { useState, useEffect } from 'react';

// Define the Entity type
interface Entity {
  name: string;
  isCharacter: boolean;
  chapter: number;
  hp: number;
  str: number;
  mag: number;
  dex: number;
  spd: number;
  def: number;
  res: number;
  lck: number;
  bld: number;
}


// Define the component
function EntityList() {
  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    fetch('entities.json'
    , {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(response => response.json())
      .then(data => setEntities(data))
      .catch(error => console.log(error));
  }, []);

  const characters = entities.filter((entity) => entity.isCharacter);
  const classes = entities.filter((entity) => !entity.isCharacter);

  const defaultCharacter : Entity = characters[0];
  const defaultClass : Entity = classes[0];

  const [selectedCharacter, setSelectedCharacter] = useState<Entity | undefined>(defaultCharacter);
  const [selectedClass, setSelectedClass] = useState<Entity | undefined>(defaultClass);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEntityName = event.target.value;
    const foundEntity = entities.find((entity) => entity.name === selectedEntityName);
    if (foundEntity?.isCharacter) {
      setSelectedCharacter(foundEntity);
    } else {
      setSelectedClass(foundEntity);
    }
  };


  return (
    <div style={{ textAlign: "center" }}>
      <h1>Stats comparator</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select id="characters" onChange={handleSelectChange} style={{ marginRight: "1rem" }}>
          {characters.map((character) => (
            <option key={character.name} value={character.name}>
              {character.name}
            </option>
          ))}
        </select>
        <select id="classes" onChange={handleSelectChange}>
          {classes.map((classe) => (
            <option key={classe.name} value={classe.name}>
              {classe.name}
            </option>
          ))}
        </select>
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
