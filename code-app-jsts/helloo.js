// vanilla js
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
    console.log("success");
  })
  .catch(error => {
    console.error(error);
  });