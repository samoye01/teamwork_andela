/* eslint-disable linebreak-style */
/* eslint-disable no-console */

const http = 'http';
const dotenv = 'dotenv';
const { Pool } = 'pg';
const app = './app';
const keys = './api/utilities/configUtilities';

dotenv.config({ path: './config.env' });

const { port, psqlUrl, psqlTest } = keys;

const pool = new Pool({
  connectionString: process.env.NODE_ENV === 'test' ? psqlTest : psqlUrl,
  //   ssl: true
});

pool
  .connect()
  .then(() => console.log('Database is connected'))
  .catch((err) => console.log(`Something went wrong! ${err}`));

const server = http.createServer(app);

server.listen(port, () => console.log(`Application running on port ${port}`));
