import { ICategoriesRepository, ICreateCategoryDTO } from '../../repositories/ICategoriesRepository';

class CreateCategoryService {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error('Category already exists!');

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
