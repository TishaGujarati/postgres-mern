require('dotenv').config();

export const CONFIG = {
  PORT: process.env.PORT,
  PGDATABASE: process.env.PGDATABASE,
  PGUSER: process.env.PGUSER,
  PGPASSWORD: process.env.PGPASSWORD,
  PGPORT: Number(process.env.PGPORT),
};
