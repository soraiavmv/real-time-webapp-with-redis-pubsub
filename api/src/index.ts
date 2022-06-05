import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from './config';
import { MainControllerInstance } from './controllers';

const PORT = config.server.port;

const startServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  // routes
  app.get('/donations', (req: Request, res: Response) =>
    MainControllerInstance.getTotalDonations(req, res));

  app.post('/donations', (req: Request, res: Response) =>
    MainControllerInstance.increaseDonationsValue(req, res));
  app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
}

startServer().catch(console.error);