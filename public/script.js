// Make a request for all the items
// QUESTION: how does axios know to call the items.mjs controller?
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
