import { RandomTypes } from '../types/RandomTypes';

export interface IRandomProvider {
  randomFunction(): Promise<RandomTypes>;
}
