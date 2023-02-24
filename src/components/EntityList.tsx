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

  var characters = entities.filter((entity) => entity.isCharacter);
  const classes = entities.filter((entity) => !entity.isCharacter);

  const chapters = [...Array(26).keys()].map((i) => i + 1);
  const [selectedChapter, setSelectedChapter] = useState(""+1);

  const defaultCharacter : Entity = characters[0];
  const defaultClass : Entity = classes[0];

  const [selectedCharacter, setSelectedCharacter] = useState<Entity | undefined>(defaultCharacter);
  const [selectedClass, setSelectedClass] = useState<Entity | undefined>(defaultClass);

  
  const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChapter(e.target.value);
    characters = entities.filter((entity) => entity.isCharacter && entity.chapter <= parseInt(e.target.value));
  };

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
      <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="characters" style={{ marginRight: '0.3rem', marginBottom: '0.4rem', fontSize: "1.2rem"  }}>
            Hero
          </label>
          <select id="characters" onChange={handleSelectChange} style={{ marginBottom: "1rem" }}>
            {characters
              .filter((character) => character.chapter <= parseInt(selectedChapter))
              .map((character) => (
                <option key={character.name} value={character.name}>
                  {character.name}
                </option>
              ))}
          </select>
          <label htmlFor="classes" style={{ marginLeft: '1rem', marginRight: '0.3rem', marginBottom: '0.4rem', fontSize: "1.2rem"   }}>
            Class
          </label>
          <select id="classes" onChange={handleSelectChange} style={{ marginBottom: "1rem" }}>
            {classes.map((classe) => (
              <option key={classe.name} value={classe.name}>
                {classe.name}
              </option>
            ))}
          </select>
          <label htmlFor="chapter" style={{ marginLeft: '1rem', marginRight: '0.3rem', marginBottom: '0.4rem', fontSize: "1.2rem"   }}>
            Chapter
          </label>
          <select id="chapter" value={selectedChapter} onChange={handleChapterChange} style={{ marginBottom: "1rem" }}>
            <option value=""></option>
            {chapters.map((chapter) => (
              <option key={chapter} value={chapter}>
                {chapter}
              </option>
            ))}
          </select>
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
