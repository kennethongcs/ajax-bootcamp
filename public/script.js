// Make a request for all the items
// axios sends a normal GET request to express in ./routes.mjs
axios
  .get('/items')
  .then((response) => {
    // handle success
    console.log(response.data.items[0]);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
