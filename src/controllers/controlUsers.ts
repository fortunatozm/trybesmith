import { Request, Response } from 'express';
import InsertUserService from '../services/serviceUsers';

export default class ControlUsers {
  public insertUsersService = new InsertUserService();

  async insert(req: Request, res: Response) {
    const { body } = req;
    console.log(body);
    console.log(this.insertUsersService);
    const insertedUsers = await this.insertUsersService.insert(body);
    return res.status(201).json({ token: insertedUsers });
  }
}