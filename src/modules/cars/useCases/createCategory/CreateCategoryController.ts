import { Response, Request } from 'express';
import { CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController {
  private createCategoryService: CreateCategoryService;

  constructor(createCategoryService: CreateCategoryService) {
    this.createCategoryService = createCategoryService;
  }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoryService.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
