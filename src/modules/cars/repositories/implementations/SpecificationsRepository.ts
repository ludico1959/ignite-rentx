import { Repository } from 'typeorm';

import AppDataSource from '../../../../database';
import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }
  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();

    return specifications;
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({
      where: {
        name: name
      }
    });

    return specification;
  }
}

export { SpecificationsRepository };
