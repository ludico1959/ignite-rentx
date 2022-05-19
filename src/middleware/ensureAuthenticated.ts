import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // informações que veem pelo header
  const authHeader = request.headers.authorization;

  if (authHeader === 'Bearer') {
    throw new AppError('Token missing', 401);
  }

  // desestruturar token
  // format do authHeader: Bearer $2b$08$lNwzKG2PyFHeQa.v2i0eDuCJbxigQNXZwL9GBPwLWyTb1AfLIkSNS
  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'eeec5f486a46e1aa2e33142d5122724d') as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists', 401);
    }

    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}

/* formato de retorno da função verify:
{
  iat: 1652880672,
  exp: 1652967072,
  sub: '247238d2-050e-4519-a671-ef0bbe28ef28' 
} 

a string sub referencia o id do usuário! 
*/
