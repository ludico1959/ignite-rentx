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
      const readbleStream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      // converte um texto de arquivo CSV em um array ou objeto
      const parseFile = csvParse.parse({
        delimiter: ','
      });

      // o pipe transforma o readble stream em writeble stream
      // explicação na imagem pipe-explanation
      readbleStream.pipe(parseFile);

      parseFile
        .on('data', async (csvLine) => {
          // a função retorna uma linha nesse formato  ["SUV", "Utilitário Esportivo"]
          const [name, description] = csvLine;

          categories.push({
            name,
            description
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path); // remove o arquivo da pasta tmp

          resolve(categories); // aguarda a finalização da promise e coloca o array categories no resolve
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    // checagem se o nome da categoria já existe
    categories.map(async (category) => {
      const { name, description } = category;

      const categoryAlreadyExist = await this.categoriesRepository.findByName(name);

      if (categoryAlreadyExist) throw new Error('Category name already exists!');

      await this.categoriesRepository.create({
        name,
        description
      });
    });
  }
}

export { ImportCategoryService };
