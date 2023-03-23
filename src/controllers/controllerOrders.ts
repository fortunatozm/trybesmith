import { Request, Response } from 'express';
import GetOrdersService from '../services/serviceOrders';

export default class ControlOrders {
  public getOrdersService = new GetOrdersService();

  async getAll(_req: Request, res: Response) {
    const orders = await this.getOrdersService.getAll();
    return res.status(200).json(orders);
  }
}