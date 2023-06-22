/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("favourite_dogs", function (table) {
    table.increments("id");
    table.string("dog_name").notNullable;
    table.integer("good_with_kids").notNullable;
    table.integer("good_with_other_dogs").notNullable;
    table.integer("playfulness").notNullable;
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
