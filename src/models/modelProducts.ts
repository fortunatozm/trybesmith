import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../iterfaces/IProducts';

export default class InsertProductModel {
  private connection = mysql;

  async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(`
      SELECT * FROM Trybesmith.Products
    `);
    return rows;
  }
}