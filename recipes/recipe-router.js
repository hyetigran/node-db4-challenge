const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to get recipes" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Failed to get recipe" });
  }
});

router.post("/", async (req, res) => {
  const newRecipe = req.body;
  try {
    const recipe = await Recipes.add(newRecipe);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Failed to add recipe" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Recipes.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: "Could not find recipe with given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete recipe" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const recipe = await Recipes.findById(id);

    if (recipe) {
      const updatedRecipe = await Recipes.update(changes, id);
      res.json(updatedRecipe);
    } else {
      res.status(404).json({ message: "Could not find recipe with given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update recipe" });
  }
});

module.exports = router;
