// import  {apiKey}  from "./util.js";
// console.log(apiKey);

// Importing the default.Assign any name as no name is defined
// import anyName from "./util.js";
// console.log(anyName);


/* Export value for multiple things from same file*/
/* The `*` groups them as javascript objects*/
import * as utils from "./util.js";
console.log(utils.default);
console.log(utils.apiKey);
console.log(utils.abc);