import { randomUUID } from 'crypto';
import { Router } from 'express';
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  categoriesRepository.create(request.body);

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const result = categoriesRepository.list();

  return response.status(200).json({
    result
  });
});

export { categoriesRoutes };
