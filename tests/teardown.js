import { connection } from 'mongoose';

export default async () => {
  await connection.close();
};
