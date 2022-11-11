import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IOrders } from '../iterfaces/IOrders';

export default class GetOrdersModel {
  private connection = mysql;

  async getAll(): Promise<IOrders[]> {
    const [rows] = await this.connection.execute<IOrders[] & RowDataPacket[]>(`
      SELECT Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) as productsIds
      FROM Trybesmith.Orders
      INNER JOIN Trybesmith.Products ON Products.orderID = Orders.id
      GROUP BY Orders.id
    `);
    return rows;
  }
}
