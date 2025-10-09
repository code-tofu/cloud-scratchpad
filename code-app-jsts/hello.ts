import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
    console.log(printSuccess("response"))
  })
  .catch(error => {
    console.error(error);
  });

type printSuccessType = (s: string) => number;

const printSuccess:printSuccessType = (s) => {
  console.log("success " + s);
  return 0;
}