/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.raw('CREATE TABLE healthsupplements (' +
    'id int unsigned NOT NULL AUTO_INCREMENT,' +
    'item_name varchar(255) NOT NULL,' +
    'img varchar(255) NOT NULL,' +
    'function_description TEXT NOT NULL,' +
    'daily_usage varchar(255) NOT NULL,' +
    'function_in_Chinese TEXT NOT NULL,' +
    'usage_in_Chinese varchar(255) NOT NULL,' +
    'category JSON,' +
    'target_audience JSON,' +
    'PRIMARY KEY (id)' +
    ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('healthsupplements');
};
