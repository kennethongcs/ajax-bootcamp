const data = {
  name: 'orange',
  description: 'zesty',
};

// Make a request to create an item
axios
  .post('/items', data)
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
