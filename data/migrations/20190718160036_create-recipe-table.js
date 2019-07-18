exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
      table
        .text("name")
        .unique()
        .notNullable();
    })
    .createTable("ingredients", table => {
      table.increments();
      table
        .text("name", 128)
        .unqiue()
        .notNullable();
      table.float("amount", 2, 2);
    })
    .createTable("recipeDetails", table => {
      table.increments();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      table.float("ingredientAmount").notNullable();
      table.text("measurement").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipeDetails")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
