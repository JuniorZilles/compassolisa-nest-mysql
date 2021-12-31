import { v4 } from 'uuid';
import { manyCars } from '../factory/car.factory';

export const UUID = v4();
export const GENERATED = manyCars();
export const MOCKCARREPOSITORY = {
  insertCar: jest.fn((dto) => ({
    id: v4(),
    ...dto,
    created_at: new Date(),
    updated_at: new Date()
  })),
  findById: jest.fn((id) => ({
    ...GENERATED.find((car) => car.id === id)
  })),
  update: jest.fn((id, dto) => {
    const index = GENERATED.findIndex((car) => car.id === id);
    GENERATED[index] = {
      ...GENERATED[index],
      ...dto,
      updated_at: new Date()
    };
    return {
      affected: index === -1 ? 0 : 1,
      raw: GENERATED[index]
    };
  }),
  delete: jest.fn((id) => {
    const index = GENERATED.findIndex((car) => car.id === id);
    if (index === -1) {
      return {
        affected: 0
      };
    }
    const deleted = GENERATED.splice(index, 1);
    return {
      affected: deleted.length,
      raw: deleted.pop()
    };
  })
};
