import db from './models/index.mjs';
import initItemsController from './controllers/items.mjs';

export default function bindRoutes(app) {
  const itemsController = initItemsController(db);
  app.get('/items', itemsController.index);
  app.get('/item/:id', itemsController.findItem);
  app.get('/', (req, res) => {
    res.render('index');
  });
}
