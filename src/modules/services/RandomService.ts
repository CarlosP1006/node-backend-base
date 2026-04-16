import { IRandomProvider } from '../providers/models/IRandomProvider';

export class RandomService {
  constructor(private randomProvider: IRandomProvider) {}

  public async execute(): Promise<string> {
    const result = await this.randomProvider.randomFunction();
    return result.randomType;
  }
}
