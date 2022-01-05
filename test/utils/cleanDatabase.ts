import { getConnection } from 'typeorm';

export default async (): Promise<void> => {
  const entities = ['Reserve', 'Person', 'Fleet', 'Car', 'Rental', 'Accessory', 'Endereco'];

  const itens = entities.map((entity) => {
    const repository = getConnection().getRepository(entity);
    return repository.clear();
  });
  await Promise.all(itens);
};
