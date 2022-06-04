import { Request, Response } from 'express';
import path from 'path';

class MainController {
  showFrontPage(_req: Request, res: Response) {
  }
}

export const MainControllerInstance = new MainController();