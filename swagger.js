//swagger.js

const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "User Api",
    description: "User Api",
  },
  host: "https://cse-341-project1-u71s.onrender.com/",
  schemes: ["http", "https"],
};
const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
