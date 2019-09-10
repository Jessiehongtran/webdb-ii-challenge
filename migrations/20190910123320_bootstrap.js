
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    // The critical information for each car is the VIN, make, model, and mileage.
    // They also track transmission type and status of the title (clean, salvage, etc.), 
    // but this information is not always immediately known.
    tbl.increments();
    tbl.string('VIN', 'make', 'model', 'mileage').notNullable();
    tbl.string('transmission type')
    tbl.boolean('clean', 'salvage')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
