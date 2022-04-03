import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationService } from './CreateSpecificationService';

const specificationsRepository = new SpecificationsRepository();
const createSpecificationsService = new CreateSpecificationService(specificationsRepository);
const createSpecificationsController = new CreateSpecificationController(createSpecificationsService);

export { createSpecificationsController };
