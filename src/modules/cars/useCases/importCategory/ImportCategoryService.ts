import fs from 'fs';
import csvParse from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryService {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csvParse.parse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          // ["name", "description"]
          const [name, description] = line;

          categories.push({
            name,
            description
          });
        })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const categoryAlreadyExist = this.categoriesRepository.findByName(name);

      if (!categoryAlreadyExist) {
        this.categoriesRepository.create({
          name,
          description
        });
      }
    });
  }
}

export { ImportCategoryService };
