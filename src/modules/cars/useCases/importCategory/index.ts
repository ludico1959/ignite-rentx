// import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryService } from './ImportCategoryService';

const categoryRepository = null;
const importCategoryService = new ImportCategoryService(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryService);

export { importCategoryController };
