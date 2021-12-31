import { v4 } from 'uuid';

export default {
  insertCar: jest.fn((dto) => ({
    id: v4(),
    ...dto,
    created_at: new Date(),
    updated_at: new Date()
  }))
};
