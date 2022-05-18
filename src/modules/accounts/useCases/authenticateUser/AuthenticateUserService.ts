import { inject, injectable } from 'tsyringe';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // checar se o usuário existe
    const user = await this.usersRepository.findByEmail(email);

    // checar se a senha está correta
    if (!user) throw new Error('Email or password incorrect');

    // checar se a senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error('Email or password incorrect');

    // se a senha estiver correta, gerar o JWT
    const token = sign({}, 'eeec5f486a46e1aa2e33142d5122724d', {
      subject: user.id,
      expiresIn: '1d'
    });

    // retornar o token gerado
    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    };
    return tokenReturn;
  }
}

export { AuthenticateUserService };
