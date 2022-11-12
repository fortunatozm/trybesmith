import { Router } from 'express';
import ControlProduct from '../controllers/controllerProduct';
import ControlOrders from '../controllers/controllerOrders';
import ControlUsers from '../controllers/controlUsers';

const route = Router();
const controlProduct = new ControlProduct();
const controlOrders = new ControlOrders();
const controlUsers = new ControlUsers();
route.get('/products', controlProduct.getAll.bind(controlProduct));
route.post('/products', controlProduct.insert.bind(controlProduct));
route.get('/orders', controlOrders.getAll.bind(controlOrders));
route.post('/users', controlUsers.insert.bind(controlUsers));

export default route;