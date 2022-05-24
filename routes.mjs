import db from './models/index.mjs';
import initItemsController from './controllers/items.mjs';
import { response } from 'express';

export default function bindRoutes(app) {
  const ItemsController = initItemsController(db);
  app.get('/items', ItemsController.index);
  app.post('/items', ItemsController.add);

  app.get('/newroute', (req, res) => {
    res.render('home');
  });

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/add', (req, res) => {
    res.render('add');
  });
}
