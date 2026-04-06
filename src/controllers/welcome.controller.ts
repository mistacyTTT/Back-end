import { Request, Response } from "express";
import { HelloResponseResponse } from "../interfaces/welcome.interface";

export const getWelcome = (req: Request, res: Response): void => {
  const response: HelloResponseResponse = { message: "Hello World."};
  res.json(response);
};
