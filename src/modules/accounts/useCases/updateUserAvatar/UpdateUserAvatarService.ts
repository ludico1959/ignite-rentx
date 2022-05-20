import { inject, injectable } from 'tsyringe';

import { deleteFile } from '../../../../utils/file';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  avatarFile: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    // checa se já há algum arquivo e o remove
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarService };

/* PASSO A PASSO PARA ADICIONAR A FEAT 'UPDATE AVATAR':
 * [x] refatorar entidade usuário (USER) com a coluna avatar
 * [x] criar uma migration que adicione a nova coluna avatar
 * [ ] configuração de upload de arquivo no multer
 * [ ] crirar a regra de negócio do upload
 * [ ] crirar o controller
 */
