const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const dotenv = require("dotenv").config();
const counties = require("./routes/counties");
const countries = require("./routes/countries");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Countries and Counties",
      version: "1.0.0",
      description: "A sample API for getting all countries and counties",
    },
    servers: [
      {
        url: process.env.URL,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/countries", countries);
app.use("/counties", counties);

app.get("/", (req, res) => {
  res.send("Welcome to the globe and Kenya😄 ");
});
app.listen(4000, (req, res) => {
  console.log("Connected to port 4000");
});
