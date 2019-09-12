exports.seed = function(knex) {

    return knex('instructions').insert([
      { recipe_id: '1', step_number: '1', step_description: 'Make Seasoning' },
      { recipe_id: '1', step_number: '2', step_description: 'Cook Beef, adding Seasoning' },
      { recipe_id: '1', step_number: '3', step_description: 'Add your choice of condiments, cooked taco meat, into a corn torilla' },
      { recipe_id: '2', step_number: '1', step_description: 'Mix Salt, cloves, onion, water to make brine' },
      { recipe_id: '2', step_number: '2', step_description: 'Let sit for 10 days' },
      { recipe_id: '2', step_number: '3', step_description: 'Bring to a boil, then cook on low for 2-3 hours' },
      { recipe_id: '3', step_number: '1', step_description: 'Steam white rice' },
      { recipe_id: '3', step_number: '2', step_description: 'Cut crab, cucumber, avacado so it can be placed into a roll' },
      { recipe_id: '3', step_number: '3', step_description: 'Lay Seaweed flat onto wood cutting board' },
      { recipe_id: '3', step_number: '4', step_description: 'Coat fingers in sugar water to prevent them from sticking to Seaweed' },
      { recipe_id: '3', step_number: '5', step_description: 'Evenly coat steamed rice over Seaweed' },
      { recipe_id: '3', step_number: '6', step_description: 'Place ingredients length-wise, evenly on one end of your roll' },
      { recipe_id: '3', step_number: '7', step_description: 'Coat fingers once more in sugar water' },
      { recipe_id: '3', step_number: '8', step_description: 'Roll Seaweed and ingredients until the other end is met' },
      { recipe_id: '3', step_number: '9', step_description: 'Cut 1 inch rolls' },
      { recipe_id: '3', step_number: '10', step_description: 'Enjoy with soy-sauce, wasabi' }
    ])
};