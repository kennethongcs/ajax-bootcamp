export default function initItemsController(db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll();
      response.send({ items });
    } catch (error) {
      console.log(error);
    }
  };

  const add = async (req, res) => {
    try {
      const input = req.body;
      const add = await db.Item.create(input);
      console.log('item created');
    } catch (err) {
      console.log(err);
    }
  };

  return {
    index,
    add,
  };
}
