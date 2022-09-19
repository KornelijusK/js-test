// 1.1. 

cars.filter((car) => {
  return car.Miles_per_Gallon !== null;});

// 1.2.

cars.filter((car) => {
  return car.Miles_per_Gallon === null;});

// 1.3. 

cars.filter((car) => {
  return car.Cylinders === 8 && car.Miles_per_Gallon >= 15;});

