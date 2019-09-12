exports.seed = function(knex, Promise) {
    
    return knex('ingredients').insert([
      { ingredient_name: 'Teaspoon Paprika' },
      { ingredient_name: '1 LB. Lean Beef' },
      { ingredient_name: 'Corn Tortilla' },
      { ingredient_name: 'Tomato' },
      { ingredient_name: 'Teaspoon Salt' },
      { ingredient_name: 'Onion' },
      { ingredient_name: 'Whole Cloves' },
      { ingredient_name: 'Cup Steamed White Rice' },
      { ingredient_name: 'Imitation Crab' },
      { ingredient_name: 'Avacado' },
      { ingredient_name: 'Cucumber' },
      { ingredient_name: 'Seaweed Wrap' }
    ]);
};