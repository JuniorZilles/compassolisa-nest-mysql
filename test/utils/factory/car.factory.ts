import * as faker from 'faker';

export default {
  modelo: faker.vehicle.model(),
  cor: faker.vehicle.color(),
  ano: faker.date.past().getFullYear(),
  acessorios: [{ descricao: faker.vehicle.fuel() }, { descricao: faker.vehicle.fuel() }],
  quantidadePassageiros: faker.datatype.number(5)
};
