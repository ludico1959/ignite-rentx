import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesController } from './listCategoriesController';
import { ListCategoriesService } from './ListCategoriesService';

const listCategoriesRepository = CategoriesRepository.getInstance();
const listCategoriesService = new ListCategoriesService(listCategoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesService);

export { listCategoriesController };
