export interface Service<Input, Output> {
  /**
   * @throws Error
   */
  execute(data?: Input): Promise<Output> | Output;
}
