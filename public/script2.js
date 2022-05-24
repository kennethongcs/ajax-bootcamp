// add an event listener to the button
document.querySelector('.button1').addEventListener('click', async () => {
  // function to run on click of button1
  const allItems = await axios.get('/items');
  // add queried items to <body>
  const data = allItems.data.items;
  for (let i = 0; i < data.length; i += 1) {
    document.querySelector('body').innerHTML += `<p> ${data[i].name} </p>`;
  }
});
