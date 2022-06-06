import { RedisClientType } from '@redis/client';
import { Request, Response } from 'express';
import Redis from "ioredis";

class MainController {
  private donations: number = 0;

  getTotalDonations(_req: Request, res: Response) {
    res.send({ totalDonations: this.donations });
  }

  async increaseDonationsValue(req: Request, res: Response, publisher: Redis) {
    const { amount } = req.body;

    if (!amount || isNaN(Number(amount))) {
      res
        .status(400)
        .send({ message: 'Wrong format for donation amount.' });
    }

    this.donations += Number(amount);

    await publisher.publish('donations_update', JSON.stringify(this.donations));

    res.sendStatus(200)
  }
}

export const MainControllerInstance = new MainController();