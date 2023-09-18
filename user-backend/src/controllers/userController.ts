import { Request, Response } from 'express';
import {
   login,
   register,
   getUserProfile,
   getUserList,
 } from '../services/userServices';

 export const registerController = async (req: Request, res: Response) => {
  const { id, firstname, lastname, email, password } = req.body;
  try {
    const newUser = await register(id, firstname, lastname, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const user = await login(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

export const getUserProfileController = async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    const userProfile = await getUserProfile(email);
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
};

export const getUserListController = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    const userList = await getUserList(page, pageSize);
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user list' });
  }
};

