import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Ironman', health: 100, powerLevel: this.genRand()},
      {id: 12, name: 'Captain America', health: 100, powerLevel: this.genRand()},
      {id: 13, name: 'The Hulk', health: 100, powerLevel: this.genRand()},
      {id: 14, name: 'Spiderman', health: 100, powerLevel: this.genRand()},
      {id: 15, name: 'Black Panther', health: 100, powerLevel: this.genRand()},
      {id: 16, name: 'Thor', health: 100, powerLevel: this.genRand()},
      {id: 17, name: 'Black Widow', health: 100, powerLevel: this.genRand()},
      {id: 18, name: 'Dr. Strange', health: 100, powerLevel: this.genRand()},
      {id: 19, name: 'Hawkeye', health: 100, powerLevel: this.genRand()},
      {id: 20, name: 'Quicksilver', health: 100, powerLevel: this.genRand()},
      {id: 21, name: 'ScarletWitch', health: 100, powerLevel: this.genRand()},
      {id: 22, name: 'Vision', health: 100, powerLevel: this.genRand()}
    ];
    
    return {heroes};
  }
  
  genRand(): number{
      return Math.floor(Math.random()  * 100 + 50);
  }
}