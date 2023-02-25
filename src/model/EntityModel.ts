// EntityModel.ts

export interface Entity {
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
  
  export function getEntities(): Promise<Entity[]> {
    return fetch('entities.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        return [];
      });
  }
  