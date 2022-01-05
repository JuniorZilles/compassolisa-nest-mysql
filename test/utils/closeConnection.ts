import { getConnection } from 'typeorm';

export default async (): Promise<void> => {
  await getConnection().close();
};
