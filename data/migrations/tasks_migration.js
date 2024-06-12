exports.up = function(knex) {
    return knex.schema.createTable("tasks", function(table) {
      table.increments("task_id").primary();
      table.text("task_description").notNullable();
      table.text("task_notes").nullable();
      table.boolean("task_completed").defaultTo(false);
      table.integer("project_id").unsigned().notNullable().references("project_id").inTable("projects");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks");
  };
  