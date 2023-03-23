import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IUser } from '../iterfaces/IUser';

export default class InsertUsersModel {
  private connection = mysql;

  async insert(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES(?, ?, ?, ?)
    `, [username, classe, level, password]);
    return { id: dataInserted.insertId, ...user };
  }
}
