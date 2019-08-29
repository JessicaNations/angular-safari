export class InMemoryDataService {
  createDb() {
    const calendars = [
      { id: 11, name: 'Easter' },
      { id: 12, name: 'Mothers Day' },
      { id: 13, name: 'Meme Day' },
      { id: 14, name: 'Fathers Day' },
      { id: 15, name: 'Ind Day' },
      { id: 16, name: 'Labor Day' },
      { id: 17, name: 'Halloween' },
      { id: 18, name: 'Vets Day' },
      { id: 19, name: 'Thxgiving' },
      { id: 20, name: 'Christmas' }
    ];
    return { calendars };
  }
}
