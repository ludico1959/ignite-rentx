import { inject, injectable } from 'tsyringe';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../../../errors/AppError';

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

    if (!user) throw new AppError('Email or password incorrect');

    // checar se a senha está correta
    const passwordMatch = await compare(password, user.password); // compara a password com a passwordHash

    if (!passwordMatch) throw new AppError('Email or password incorrect');

    // se a senha estiver correta, gerar o JSON Web Token (JWT)
    // o secretOrPrivateKey é um md5 gerado aqui: https://www.md5hashgenerator.com/
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
