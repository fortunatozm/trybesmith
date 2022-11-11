import { Request, Response } from 'express';
import GetProductService from '../services/serviceProducts';

export default class ControlProduct {
  public getProductService = new GetProductService();

  async getAll(_req: Request, res: Response) {
    const products = await this.getProductService.getAll();
    return res.status(200).json(products);
  }
}