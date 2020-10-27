import { InfoCpf } from 'src/dtos/info-cpf.dto';
import { IInfoCPFRepository } from 'src/repositories/info-cpf.repository';
import { Service } from 'src/shared/service';

export class GetValidateCpf implements Service<string, InfoCpf> {
  constructor(
    private readonly infoCpfRepository: IInfoCPFRepository,
  ) { }

  async execute(cpf: string): Promise<UserInfo> {
    throw new Error('Method not implemented.');
  }
}
