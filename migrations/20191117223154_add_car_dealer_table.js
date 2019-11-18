//the changes to make
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(table) {
        //adds the prirmary key called "id" and auto increment integer, and not null and unique
        table.increments();
        //specs for table values
        table.string('make', 128).notNullable();
        table.string('model', 128).notNullable();
        table.string('vin', 255);
        table.integer('year').notNullable();
        table.integer('mileage').notNullable();
        table.string('transmission_type', 255);
        table.string('title_status', 128);
        //timestamp ( created and changed timestamps)
        table.timestamps();
    } )
  
};

//how to undo the changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
