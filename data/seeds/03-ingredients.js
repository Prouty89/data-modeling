exports.seed = function(knex, Promise) {
    
    return knex('ingredients').insert([
      { ingredient_name: 'Paprika' },
      { ingredient_name: 'Beef' },
      { ingredient_name: 'Corn Tortilla' },
      { ingredient_name: 'Tomato' },
      { ingredient_name: 'Salt' },
      { ingredient_name: 'Onion' },
      { ingredient_name: 'Whole Cloves' },
      { ingredient_name: 'Steamed White Rice' },
      { ingredient_name: 'Crab' },
      { ingredient_name: 'Avacado' },
      { ingredient_name: 'Cucumber' },
      { ingredient_name: 'Seaweed' }
    ]);
};