import Redis from 'ioredis';
import WebSocket from 'ws';
import { uuid } from 'uuidv4';

const redis = new Redis({ host: 'redis' });
const clients = new Map<string, WebSocket>();

const start = async () => {

  await redis.subscribe('donations_update', (err: Error | null | undefined) => {
    if (err) return console.log('Error subscribing to channel:', err.message);
    console.log('Subscribed.');
  });

  const wsServer = new WebSocket.Server({
    port: 9000
  });

  wsServer.on('connection', (ws) => {
    console.log('New client connection');
    const userID = uuid();
    clients.set(userID, ws);
    ws.on('close', () => {
      for (let [key, value] of clients.entries()) {
        if (value === ws) return clients.delete(key);
      }
    });
  });

  redis.on('message', (channel, message) => {
    console.log(`Received message from ${channel} channel.`);
    console.log(JSON.parse(message));

    clients.forEach((ws) => {
      ws.send(JSON.stringify(message));
    });
  });
};

start();