import { Entity } from '../model/EntityModel';
import React from 'react';

interface CharacterSelectProps {
    chapters: number[];
    characters: Entity[];
    onSelect: (chapter: string | undefined) => void;
    updateCharacters: (chapter: Entity[] | undefined) => void;
}

function ChapterSelect(props: CharacterSelectProps) {
    const { chapters, characters, onSelect, updateCharacters } = props;

    const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(e.target.value);
        updateCharacters(characters.filter((character) => character.isCharacter && character.chapter <= parseInt(e.target.value)));
      };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="chapter" style={{ marginLeft: '1rem', marginRight: '0.3rem', marginBottom: '0.4rem', fontSize: "1.2rem"   }}>
            Chapter
          </label>
          <select id="chapter" onChange={handleChapterChange} style={{ marginBottom: "1rem" }}>
            {chapters.map((chapter) => (
              <option key={chapter} value={chapter}>
                {chapter}
              </option>
            ))}
          </select>
        </div>
    );
}

export default ChapterSelect;
