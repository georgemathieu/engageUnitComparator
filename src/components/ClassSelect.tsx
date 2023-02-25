import { Entity } from "../model/EntityModel";
import React from 'react';


interface ClassSelectProps {
    classes: Entity[];
    onSelect: (classe: Entity | undefined) => void;
}

export function ClassSelect(props: ClassSelectProps) {
    const { classes, onSelect } = props;

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedEntityName = event.target.value;
        const foundEntity = classes.find((entity) => entity.name === selectedEntityName);
        onSelect(foundEntity);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="classes" style={{ marginLeft: '1rem', marginRight: '0.3rem', marginBottom: '0.4rem', fontSize: "1.2rem" }}>
                Class
            </label>
            <select id="classes" onChange={handleSelectChange} style={{ marginBottom: "1rem" }}>
                {classes.map((classe) => (
                    <option key={classe.name} value={classe.name}>
                        {classe.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
