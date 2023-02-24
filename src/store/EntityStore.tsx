// Read the JSON data from a file
function buildEntities() {
    const fs = require('fs');
    const entitiesJson = fs.readFileSync('entities.json');
    const entitiesData = JSON.parse(entitiesJson);
    
    const entities: Entity[] = entitiesData.map((entityData: any) => {
        const entity: Entity = {
          name: entityData.name,
          isCharacter: entityData.isCharacter,
          chapter: entityData.chapter,
          hp: entityData.hp,
          str: entityData.str,
          mag: entityData.mag,
          dex: entityData.dex,
          spd: entityData.spd,
          def: entityData.def,
          res: entityData.res,
          luck: entityData.luck,
          bld: entityData.bld
        };
        return entity;
      });
      
      // Use the entities array
      entities.forEach((entity: Entity) => {
        console.log(entity.name);
        console.log(entity.hp);
      });
}

  
  
  
  
  