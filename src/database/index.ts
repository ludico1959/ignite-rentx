import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/Category';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  synchronize: false,
  logging: false,
  entities: [Category],
  migrations: ['src/database/migrations/*.ts']
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in, your application bootstrap
AppDataSource.initialize()
  .then(() => {
    console.log('🟢 Database connected...');
  })
  .catch((error) => console.log(error));

export default AppDataSource;
