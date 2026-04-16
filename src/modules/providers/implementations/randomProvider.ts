import { RandomTypes } from '../types/RandomTypes';

export class RandomProvider {
  constructor() {}

  public async randomFunction(): Promise<RandomTypes> {
    const random: RandomTypes = {
      randomType: 'teste-get-random',
    };

    return random;
  }
}
