export class InMemoryDataService {
  createDb() {
    const calendars = [
      { id: 11, name: 'Day' },
      { id: 12, name: 'Day' },
      { id: 13, name: 'Day' },
      { id: 14, name: 'Day' },
      { id: 15, name: 'Day' },
      { id: 16, name: 'Day' },
      { id: 17, name: 'Day' },
      { id: 18, name: 'Day' },
      { id: 19, name: 'Day' },
      { id: 20, name: 'Day' }
    ];
    return { calendars };
  }
}
