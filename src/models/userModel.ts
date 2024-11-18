import { RowDataPacket } from 'mysql2';
import pool from '../config/db';

import { User } from '../modules/types'

const getUserByLogin = async (login: string): Promise<User | null> => {
    const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM User WHERE Login = ?', [login]);

    if (rows.length === 0) {
      return null;
    }

    const row = rows[0];

    const user: User = {
        UserID: row.UserID,
        Login: row.Login,
        FullName: row.FullName,
        Rating: row.Rating,
        PhoneNumber: row.PhoneNumber,
        Password: row.Password,
        Email: row.Email
    };

    return user;
};
  
const createUser = async (user: User): Promise<void> => {
  const { UserID, FullName, Rating, PhoneNumber, Email, Login, Password } = user;
  await pool.execute(
    'INSERT INTO User (UserID, FullName, Rating, PhoneNumber, Email, Login, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [UserID, FullName, Rating, PhoneNumber, Email, Login, Password]
  );
};

export { getUserByLogin, createUser };
