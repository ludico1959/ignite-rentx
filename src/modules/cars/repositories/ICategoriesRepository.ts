import { Category } from '../model/Category';

// DTO - Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// é como se fosse um contrato que cria subtipos
interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
