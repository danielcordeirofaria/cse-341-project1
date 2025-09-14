//swagger.js

const swaggerAutogen = require("swagger-autogen")();

//const doc = {
//  info: {
//    title: "User Api",
//   description: "User Api",
// },
//  host: "localhost:3000",
//  schemes: ["http", "https"],
//};

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts API'
  },
  host: 'cse-341-project1.onrender.com',
  schemes: ['https']
};


const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
