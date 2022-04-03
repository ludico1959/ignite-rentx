import { Request, Response } from 'express';
import { ListCategoriesService } from './ListCategoriesService';

class ListCategoriesController {
  private listCategoriesService: ListCategoriesService;

  constructor(listCategoriesService: ListCategoriesService) {
    this.listCategoriesService = listCategoriesService;
  }

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesService.execute();

    return response.status(200).json(all);
  }
}

export { ListCategoriesController };
