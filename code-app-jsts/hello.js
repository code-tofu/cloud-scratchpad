"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
    console.log(response.data);
    console.log(printSuccess("response"));
})
    .catch(function (error) {
    console.error(error);
});
var printSuccess = function (s) {
    console.log("success " + s);
    return 0;
};
