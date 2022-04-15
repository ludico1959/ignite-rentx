import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryService } from './CreateCategoryService';

// export default (): CreateCategoryController => {
//   const categoriesRepository = new CategoriesRepository();
//   const createCategoryService = new CreateCategoryService(categoriesRepository);
//   const createCategoryController = new CreateCategoryController(createCategoryService);

//   return createCategoryController;
// };

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);

export { createCategoryController };
