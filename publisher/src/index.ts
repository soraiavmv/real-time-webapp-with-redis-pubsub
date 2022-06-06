import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from './config';
import { MainControllerInstance } from './controllers';
import Redis from 'ioredis';

const PORT = config.server.port;

const startServer = async () => {
  const app = express();
  const redis = new Redis({ host: 'redis' });

  app.use(express.json());
  app.use(cors());

  // routes
  app.get('/donations', (req: Request, res: Response) =>
    MainControllerInstance.getTotalDonations(req, res));

  app.post('/donations', (req: Request, res: Response) =>
    MainControllerInstance.increaseDonationsValue(req, res, redis));
    
  app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
}

startServer().catch(console.error);