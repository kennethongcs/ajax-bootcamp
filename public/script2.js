const getDescription = async () => {
  const response = await axios.get('/items');
  const data = response.data.items;

  for (let i = 0; i < data.length; i += 1) {
    document.querySelector('.demo').innerHTML += `${data[i].description}`;
  }
};

const axiosFunction = async () => {
  const response = await axios.get('/items');

  for (let i = 0; i < response.data.items.length; i += 1) {
    document.querySelector(
      '.demo'
    ).innerHTML += `<p> ${response.data.items[i].name} </p> 
    <input type="button" class="button" onclick="${response.data.items[i].id}" value="Description for: ${response.data.items[i].name}" /> <hr>`;
  }

  document.querySelector('.button2').addEventListener('click', () => {
    getDescription();
  });
};

document.querySelector('.button1').addEventListener('click', () => {
  axiosFunction();
});
