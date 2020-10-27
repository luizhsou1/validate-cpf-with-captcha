export const nodeEnv = process.env.NODE_ENV || 'development';

export const port = process.env.APP_PORT || 3000;

export const dbHost = process.env.DB_HOST || 'localhost';
export const dbPort = Number(process.env.DB_PORT) || 5444;
export const dbName = process.env.DB_NAME || 'validate_cpf_with_captcha';
export const dbUser = process.env.DB_USER || 'validate_cpf_with_captcha';
export const dbPass = process.env.DB_PASS || '123';
