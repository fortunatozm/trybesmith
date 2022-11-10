import { Router } from 'express';
import ControlProduct from '../controllers/controllerProduct';

const route = Router();
const controlProduct = new ControlProduct();
route.get('/', controlProduct.getAll.bind(controlProduct));

export default route;