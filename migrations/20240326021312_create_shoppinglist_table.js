/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('shoppinglist', (table) => {
        table.increments('id').primary();
        table
          .integer('user_id')
          .unsigned()
          .references('users.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table
          .integer('item_id')
          .unsigned()
          .references('healthsupplements.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table
          .integer('relationship_id')
          .unsigned()
          .references('relationship.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table.integer('quantity').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('shoppinglist');
};
