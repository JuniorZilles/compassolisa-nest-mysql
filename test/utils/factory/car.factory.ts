import * as faker from 'faker';
import { v4 } from 'uuid';

export const oneCar = () => ({
  modelo: faker.vehicle.model(),
  cor: faker.vehicle.color(),
  ano: faker.date.past().getFullYear(),
  acessorios: [{ descricao: faker.vehicle.fuel() }, { descricao: faker.vehicle.fuel() }],
  quantidadePassageiros: faker.datatype.number(5)
});

export const manyCars = (quantity = 10) => {
  const cars = [];
  for (let i = 0; i < quantity; i++) {
    cars.push({ ...oneCar(), id: v4(), created_at: new Date(), updated_at: new Date() });
  }
  return cars;
};
