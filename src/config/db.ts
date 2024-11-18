import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '1e1Km9i3N957fQ',
  database: 'database_adhub',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.query('select * from user', (err: any, rows: any) => {
  if (err) throw err;
  console.log(rows)
})

export default pool;
