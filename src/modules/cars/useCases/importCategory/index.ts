import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryService } from './ImportCategoryService';

// const categoryRepository = new ImportCategoryController();
const importCategoryService = new ImportCategoryService();
const importCategoryController = new ImportCategoryController(importCategoryService);

export { importCategoryController };
