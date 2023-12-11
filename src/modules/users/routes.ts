

import express, { Request, Response } from 'express';
import { UserController } from './controller';

const router = express.Router();
const userController = new UserController();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await userController.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:userId', async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const user = await userController.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  const userData = req.body;

  try {
    const newUser = await userController.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router;
