import { Request, Response } from 'express';
import { ImportCategoryService } from './ImportCategoryService';

class ImportCategoryController {
  private importCategoryService: ImportCategoryService;

  constructor(importCategoryService: ImportCategoryService) {
    this.importCategoryService = importCategoryService;
  }

  handle(request: Request, response: Response) {
    const { file } = request;

    this.importCategoryService.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
