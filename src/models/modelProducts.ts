import { RowDataPacket, ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../iterfaces/IProducts';

export default class GetProductModel {
  private connection = mysql;

  async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(`
      SELECT * FROM Trybesmith.Products
    `);
    return rows;
  }

  async insert(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    console.log('model recebeu', product);
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Products (name, amount)
      VALUES(?, ?)
    `, [name, amount]);
    console.log(dataInserted);
    return { id: dataInserted.insertId, ...product };
  }
}