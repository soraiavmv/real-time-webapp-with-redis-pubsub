import 'dotenv/config';

export const config = {
  server: {
    port: Number(process.env.PORT) || 8000,
    host: String(process.env.HOST) || 'localhost'
  }
}