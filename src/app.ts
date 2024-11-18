import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import http from 'http'

const app = express();

const PORT = process.env.PORT || 5000;
app.set('port', PORT)

const server = http.createServer(app) 

server.listen(PORT)
// server.on('error', onError)
// server.on('listening', onListening)

app.use(cors());
app.use(bodyParser.json());

app.use('/api', require('./routes'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
