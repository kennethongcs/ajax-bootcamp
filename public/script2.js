const getDescription = async (id) => {
  const response = await axios.get(`/item/${id}`);
  document.querySelector('.demo').innerText = `${response.data.description}`;
};

const formatButton = (item) => {
  const button = document.createElement('button');
  button.setAttribute('class', 'items');
  button.innerHTML = item.name;
  button.value = item.id;

  button.addEventListener('click', () => {
    getDescription(item.id);
  });
  document.querySelector('.main').appendChild(button);
};

const setPara = (item) => {
  const para = document.createElement('p');
  para.innerText = item.name;
  document.querySelector('.main').appendChild(para);
};

const axiosFunction = async () => {
  const response = await axios.get('/items');

  const { items } = response.data;
  // for (let i = 0; i < response.data.items.length; i += 1) {
  //   document.querySelector('.demo').innerHTML += formatButton(items);

  items.forEach((item) => {
    setPara(item);
    formatButton(item);
  });

  /*
    `<p class=row-${i}> ${response.data.items[i].name}  </p> 
    <input type="button" class="button2" onclick="${response.data.items[i].id}" value="Description for: ${response.data.items[i].name}" /> <hr>`;*/
};

document.querySelector('.button1').addEventListener('click', () => {
  axiosFunction();
});
