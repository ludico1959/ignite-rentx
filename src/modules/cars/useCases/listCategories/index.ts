import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesService } from './ListCategoriesService';

const listCategoriesRepository = null;
const listCategoriesService = new ListCategoriesService(listCategoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesService);

export { listCategoriesController };
