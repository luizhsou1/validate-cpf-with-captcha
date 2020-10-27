import { Service } from 'src/shared/service';

export class ValidateCpf implements Service<string, void> {
  // TODO Esse chamará o serviço de scraping, pode receber a instância do puppetter
  execute(cpf: string): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
}
