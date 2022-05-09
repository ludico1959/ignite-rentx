import 'reflect-metadata'; // permite usar alguns decorators no typescript
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

// inicia a conexão com o banco de dados
AppDataSource.initialize()
  .then(() => {
    console.log('🟢 Database connected...');
  })
  .catch((error) => console.log(error));

export default AppDataSource;
