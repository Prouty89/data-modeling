const express = require('express');

const Recipes = require('./recipe-model.js')

const router = express.Router();

router.get('/', (req, res) => {
 Recipes
 .getRecipes()
 .then(recipes => {
     res.json(recipes);
 })
 .catch(err => {
     res.status(500).json({ message: 'Failed to load recipes' });
 });
})

router.get('/:id/ingredients', (req, res) => {
    const { id } =req.params;
    Recipes
    .getShoppingList(id)
    .then(ingredients => {
        if (ingredients.length) {
            res.json(ingredients);
        } else {
            res.status(404).json({ message: 'Could not find ingredients for this recipe'});
        }
    })
})

router.get('/:id/instructions', (req, res) => {
    const { id } =req.params;
    Recipes
    .getInstructions(id)
    .then(instructions => {
        if (instructions.length) {
            res.json(instructions);
        } else {
            res.status(404).json({ message: 'Could not find instructions for this recipe'});
        }
    })
})

module.exports = router;