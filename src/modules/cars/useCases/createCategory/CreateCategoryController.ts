import { Response, Request } from 'express';
import { CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController {
  private createCategoryService: CreateCategoryService;

  constructor(createCategoryService: CreateCategoryService) {
    this.createCategoryService = createCategoryService;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    await this.createCategoryService.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
