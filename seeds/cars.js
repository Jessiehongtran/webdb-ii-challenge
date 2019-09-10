
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'Tesla', make: 'in USA', model: 'S', mileage: '12000', transmission_type: 'ABC', clean: true, salvage: false},
        {VIN: 'Ford', make: 'in USA', model: '4', mileage: '34000', transmission_type: 'ABC', clean: true, salvage: false},
        {VIN: 'BMW', make: 'in Germany', model: 'X', mileage: '56000', transmission_type: 'ABC', clean: true, salvage: false},
        {VIN: 'Toyota', make: 'in Japan', model: 'F2', mileage: '39000', transmission_type: 'ABC', clean: true, salvage: false},
      ]);
    });
};
