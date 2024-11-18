import { Request, Response } from 'express';
import { getUserByLogin, createUser } from '../models/userModel';

const login = async (req: Request, res: Response) => {
  const { login, password } = req.body;
  try {
    const user = await getUserByLogin(login);
    if (user && user.Password === password) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Invalid login or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const register = async (req: Request, res: Response) => {
  const { UserID, FullName, Rating, PhoneNumber, Email, Login, Password } = req.body;
  try {
    const existingUser = await getUserByLogin(Login);
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
    } else {
      await createUser({ UserID, FullName, Rating, PhoneNumber, Email, Login, Password });
      res.status(201).json({ message: 'User created successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { login, register };
