import { Entity } from 'model/EntityModel';
import React, { useCallback, useMemo, useState } from 'react';
import EntityList from './EntityList';

// Define the component
function UnitComparator() {

    const [entityTop, setEntityTop] = useState<Entity>();
    const [entityBottom, setEntityBottom] = useState<Entity>();

    const handleEntityListChange = useCallback(
        (entity: Entity, isTop: boolean) => {
            isTop ? setEntityTop(entity) : setEntityBottom(entity);
        },
        []
    );

    const diffEntity: Entity = useMemo(() => {
        return {
            name: "DIFF",
            isCharacter: true,
            chapter: 1,
            hp: (entityTop?.hp || 0) - (entityBottom?.hp || 0),
            str: (entityTop?.str || 0) - (entityBottom?.str || 0),
            mag: (entityTop?.mag || 0) - (entityBottom?.mag || 0),
            dex: (entityTop?.dex || 0) - (entityBottom?.dex || 0),
            spd: (entityTop?.spd || 0) - (entityBottom?.spd || 0),
            def: (entityTop?.def || 0) - (entityBottom?.def || 0),
            res: (entityTop?.res || 0) - (entityBottom?.res || 0),
            lck: (entityTop?.lck || 0) - (entityBottom?.lck || 0),
            bld: (entityTop?.bld || 0) - (entityBottom?.bld || 0),
        };
    }, [entityTop, entityBottom]);




    return (
        <div style={{ alignItems: 'center' }}>
            <EntityList onChange={(entity) => handleEntityListChange(entity, true)} />
            <table className={"comparatorTable"}>
                <tbody>
                    <tr>
                        <td>{"Diff"}</td>
                        <td className={diffEntity?.hp > 0 ? "positive" : "negative"}>{diffEntity?.hp}</td>
                        <td className={diffEntity?.str > 0 ? "positive" : "negative"}>{diffEntity?.str}</td>
                        <td className={diffEntity?.mag > 0 ? "positive" : "negative"}>{diffEntity?.mag}</td>
                        <td className={diffEntity?.dex > 0 ? "positive" : "negative"}>{diffEntity?.dex}</td>
                        <td className={diffEntity?.spd > 0 ? "positive" : "negative"}>{diffEntity?.spd}</td>
                        <td className={diffEntity?.def > 0 ? "positive" : "negative"}>{diffEntity?.def}</td>
                        <td className={diffEntity?.res > 0 ? "positive" : "negative"}>{diffEntity?.res}</td>
                        <td className={diffEntity?.lck > 0 ? "positive" : "negative"}>{diffEntity?.lck}</td>
                        <td className={diffEntity?.bld > 0 ? "positive" : "negative"}>{diffEntity?.bld}</td>
                    </tr>
                </tbody>
            </table>
            <EntityList onChange={(entity) => handleEntityListChange(entity, false)} />
        </div>
    );
}

export default UnitComparator;