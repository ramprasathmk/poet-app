import dotenv from 'dotenv';

dotenv.configDotenv();

// export default {
//     AppPort : process.env.PORT,
//     MONGODB_URI : process.env.MONGODB_URI,
// };

export const AppPort = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;
