const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('ingredients as i')
        .innerJoin(
                'recipe_ingredients as ri',
                'ri.recipe_id', '=',
                'i.id'
                )
        .select(
                'i.ingredient_name',
                'ri.quantity'
                )
        .where(
                'ri.ingredient_id', '=',
                id
                )
}

function getInstructions(id) {
    return db('instructions as i')
        .innerJoin('recipes as r', 'r.id', '=', 'r.id')
        .select('i.step_number', 'i.step_description')
        .where('i.recipe_id', '=', id)
        .orderBy('i.step_number')
    }