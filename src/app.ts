import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req: Request, res: Response) => {
  res.send('OpenAI API Features');
});

export default app;
