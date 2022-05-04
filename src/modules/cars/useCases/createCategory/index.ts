import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryService } from './CreateCategoryService';

/* Diferente do código comentado abaixo, o export default () a seguir só irá instanciar os
 * os objetos categoriesRepository, createCategoryService e createCategoryController
 * quando a função createCategoryController for chamada na rota de categorias.
 * Assim, não há perigo de os objetos serem instaciados antes de haver uma conexão com o banco de dados.
 */
export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  const createCategoryController = new CreateCategoryController(createCategoryService);

  return createCategoryController;
};

// o código abaixo instancia os objetos quando a aplicação inicia:
// const categoriesRepository = new CategoriesRepository();
// const createCategoryService = new CreateCategoryService(categoriesRepository);
// const createCategoryController = new CreateCategoryController(createCategoryService);

// export { createCategoryController };
