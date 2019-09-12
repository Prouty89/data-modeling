
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 255)
            .notNullable()
            .unique();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 255)
            .notNullable()
            .unique();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.float('quantity')
            .notNullable()
            .unsigned();
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.integer('step_number')
            .notNullable()
            .unsigned()
        tbl.string('step_description', 500)
            .notNullable()

    })  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')  
};
