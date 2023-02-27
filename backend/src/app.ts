import express from 'express';
import cors from 'cors';
import { createServer } from 'http'
import { Server } from "socket.io";
import dotenv from 'dotenv';

dotenv.config();


const app = express();

const httpServer = createServer(app);


const io = new Server(httpServer, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('Server running');
});


httpServer.listen(4000, () => {
  console.log('listening on *:4000');
});



export default app;