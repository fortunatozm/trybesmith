import { IProduct } from '../iterfaces/IProducts';
import GetProductModel from '../models/modelProducts';

export default class GetProductService {
  public product = new GetProductModel();

  public async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }
}