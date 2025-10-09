//tsc hello.ts
import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
    console.log(response.data);
    console.log(printSuccess("response"));
})
    .catch(error => {
    console.error(error);
});
const printSuccess = (s) => {
    console.log("success " + s);
    return 0;
};
