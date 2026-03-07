import dotenv from 'dotenv';

// Load .env.test if NODE_ENV is test, otherwise .env
const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
dotenv.config({ path: envFile });

process.env.NODE_ENV = 'test';
