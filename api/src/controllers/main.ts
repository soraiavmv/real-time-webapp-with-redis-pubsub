import { RedisClientType } from '@redis/client';
import { Request, Response } from 'express';
import * as redis from 'redis';
class MainController {
  private donations: number = 0;
  private publisher: RedisClientType = redis.createClient();

  getTotalDonations(_req: Request, res: Response) {
    res.status(200).send(this.donations);
  }

  async increaseDonationsValue(req: Request, res: Response) {
    const { amount } = req.params

    if (!amount || isNaN(Number(amount))) {
      res
        .status(400)
        .send({ message: 'Wrong format for donation amount.' });
    }

    this.donations += Number(amount);

    await this.publisher.connect();
    await this.publisher.publish('donations_update', JSON.stringify(this.donations));

    res
      .status(200)
      .send({ message: 'Donation approved.' })
  }
}

export const MainControllerInstance = new MainController();