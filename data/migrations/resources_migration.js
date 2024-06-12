exports.up = function(knex) {
    return knex.schema.createTable("resources", function(table) {
      table.increments("resource_id").primary();
      table.string("resource_name").notNullable().unique();
      table.text("resource_description").nullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("resources");
  };
  