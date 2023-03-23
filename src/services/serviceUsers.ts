import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../iterfaces/IUser';
import InsertUsersModel from '../models/modelUsers';

export default class InsertUserService {
  public user = new InsertUsersModel();

  public jwt = jsonwebtoken;

  public async insert(user: IUser): Promise<string> {
    await this.user.insert(user);
    const token = this.jwt.sign(user, process.env.JWT_SECRET as string, { 
      algorithm: 'HS256', expiresIn: '1d' });
    return token;
  }
}