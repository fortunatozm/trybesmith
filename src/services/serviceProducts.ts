import { IProduct } from '../iterfaces/IProducts';
import InsertProductModel from '../models/modelProducts';

export default class InsertProductService {
  public product = new InsertProductModel();

  public async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }
}