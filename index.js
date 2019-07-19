const express = require("express");

const recipeRouter = require("./recipes/recipe-router");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipeRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}....`);
});
