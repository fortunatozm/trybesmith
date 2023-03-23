import { IProduct } from '../iterfaces/IProducts';
import GetProductModel from '../models/modelProducts';

export default class GetProductService {
  public product = new GetProductModel();

  public async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }

  public async insert(data: IProduct): Promise<IProduct> {
    const insertProduct = await this.product.insert(data);
    return insertProduct;
  }
}