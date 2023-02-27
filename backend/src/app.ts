import express from 'express';
import { createServer } from 'http'
import { Server } from "socket.io";
import socket from './socket';
import dotenv from 'dotenv';

dotenv.config();


const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  //set cookie
  cookie: true,
  cors: {
    origin: '*',
    credentials: true,
  },
});

app.get('/', (req, res) => {
  res.send('Server running');
});


httpServer.listen(1337, () => {
  console.log('listening on *:1337');
  socket(io);
});



export default app;