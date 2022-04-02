import { randomUUID } from 'crypto';
import { Router } from 'express';
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists)
    return response.status(400).json({
      error: 'Category already exists'
    });

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
