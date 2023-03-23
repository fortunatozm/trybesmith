// GetOrdersModel

import { IOrders } from '../iterfaces/IOrders';
import GetOrdersModel from '../models/modelOrders';

export default class GetOrdersService {
  public order = new GetOrdersModel();

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.order.getAll();
    return orders;
  }
}