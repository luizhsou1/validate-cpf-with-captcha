import { InfoCpf } from 'src/dtos/info-cpf.dto';

export interface IInfoCPFRepository {
  /**
   * Salva um técnico
   */
  save(infoCpf: InfoCpf): Promise<InfoCpf>;

  /**
   * @throws NotFoundError
   * Cria um cliente
   */
  findByCpf(cpf: string): Promise<InfoCpf>;
}
