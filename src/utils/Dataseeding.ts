export class DataSeeder {
  private foodData: string[] = ['Paneer', 'Chola', 'Chicken'];
  seedData(): string[] {
    console.log('Data seeding started');
    console.log('Data seeding in progress');
    return this.foodData;
  }
}