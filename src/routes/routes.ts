import { Router } from 'express';
import ControlProduct from '../controllers/controllerProduct';
import ControlOrders from '../controllers/controllerOrders';

const route = Router();
const controlProduct = new ControlProduct();
const controlOrders = new ControlOrders();
route.get('/products', controlProduct.getAll.bind(controlProduct));
route.get('/orders', controlOrders.getAll.bind(controlOrders));

export default route;