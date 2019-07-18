exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipeDetails")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipeDetails").insert([
        {
          recipe_id: 1,
          ingredient_id: 2,
          ingredientAmount: 5,
          measurement: "unit(s)"
        },
        {
          recipe_id: 1,
          ingredient_id: 1,
          ingredientAmount: 0.5,
          measurement: "unit(s)"
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          ingredientAmount: 0.5,
          measurement: "unit(s)"
        },
        {
          recipe_id: 1,
          ingredient_id: 4,
          ingredientAmount: 0.25,
          measurement: "cup(s)"
        },
        {
          recipe_id: 1,
          ingredient_id: 6,
          ingredientAmount: 0.5,
          measurement: "unit(s)"
        },
        {
          recipe_id: 1,
          ingredient_id: 9,
          ingredientAmount: 3,
          measurement: "tsp"
        },
        {
          recipe_id: 2,
          ingredient_id: 7,
          ingredientAmount: 1,
          measurement: "unit(s)"
        },
        {
          recipe_id: 2,
          ingredient_id: 1,
          ingredientAmount: 0.5,
          measurement: "unit(s)"
        },
        {
          recipe_id: 2,
          ingredient_id: 8,
          ingredientAmount: 1,
          measurement: "unit(s)"
        },
        {
          recipe_id: 2,
          ingredient_id: 9,
          ingredientAmount: 2,
          measurement: "tsp"
        },
        {
          recipe_id: 2,
          ingredient_id: 2,
          ingredientAmount: 4,
          measurement: "unit(s)"
        },
        {
          recipe_id: 3,
          ingredient_id: 1,
          ingredientAmount: 5,
          measurement: "unit(s)"
        },
        {
          recipe_id: 3,
          ingredient_id: 4,
          ingredientAmount: 1,
          measurement: "cup(s)"
        },
        {
          recipe_id: 3,
          ingredient_id: 6,
          ingredientAmount: 5,
          measurement: "unit(s)"
        },
        {
          recipe_id: 3,
          ingredient_id: 8,
          ingredientAmount: 1,
          measurement: "unit(s)"
        }
      ]);
    });
};
