
exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        { recipe_name: 'Tacos' },
        { recipe_name: 'Corned Beef' },
        { recipe_name: 'California Roll' }
    ])
};