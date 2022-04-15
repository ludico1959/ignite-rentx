import { Category } from '../entities/Category';

// DTO - Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// é como se fosse um contrato que cria subtipos
interface ICategoriesRepository {
  findByName(name: string): Promise<Category | null>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
