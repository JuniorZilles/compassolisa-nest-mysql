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
  findOne: jest.fn((id) => ({
    ...GENERATED.find((car) => car.id === id)
  })),
  updateCar: jest.fn((id, dto) => {
    const index = GENERATED.findIndex((car) => car.id === id);
    GENERATED[index] = {
      ...GENERATED[index],
      ...dto,
      updated_at: new Date()
    };
    return GENERATED[index];
  })
};
