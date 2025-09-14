//swagger.js

const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "User Api",
    description: "User Api",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local Development Server",
    },
    {
      url: "https://cse-341-project1.onrender.com",
      description: "Production Server on Render",
    },
  ],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
