import { Entity } from '../model/EntityModel';
import React from 'react';

interface CharacterSelectProps {
    characters: Entity[];
    onSelect: (character: Entity | undefined) => void;
}

function CharacterSelect(props: CharacterSelectProps) {
    const { characters, onSelect } = props;

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedEntityName = event.target.value;
        const foundEntity = characters.find((entity) => entity.name === selectedEntityName);
        onSelect(foundEntity);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="characters" style={{ marginRight: '0.3rem', marginBottom: '0.4rem', fontSize: "1.2rem" }}>
                Hero
            </label>
            <select id="characters" onChange={handleSelectChange} style={{ marginBottom: "1rem" }}>
                {characters.map((character) => (
                    <option key={character.name} value={character.name}>
                        {character.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CharacterSelect;
