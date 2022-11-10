import { Request, Response } from 'express';
import InsertProductService from '../services/serviceProducts';

export default class ControlProduct {
  public insertProductService = new InsertProductService();

  async getAll(_req: Request, res: Response) {
    const products = await this.insertProductService.getAll();
    return res.status(200).json(products);
  }
}