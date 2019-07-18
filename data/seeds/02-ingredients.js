exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { name: "Lettuce" },
        { name: "Tomato" },
        { name: "Cucumber" },
        { name: "Cheese" },
        { name: "Olive" },
        { name: "Onion" },
        { name: "Avocado" },
        { name: "Olive Oil" }        { name: "Chicken Breast" },

      ]);
    });
};
