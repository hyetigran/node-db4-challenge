exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Lettuce" },
        { name: "Tomato" },
        { name: "Cucumber" },
        { name: "Cheese" },
        { name: "Olive" },
        { name: "Onion" },
        { name: "Avocado" },
        { name: "Chicken Breast" },
        { name: "Olive Oil" }
      ]);
    });
};
