import Redis from 'ioredis';

const redis = new Redis({ host: 'redis' });

const start = async () => {
  await redis.subscribe('donations_update', (err: Error | null | undefined) => {
    if (err) return console.log('Error subscribing to channel:', err.message);
    console.log('Subscribed.');
  });

  redis.on('message', (channel, message) => {
    console.log(`Received message from ${channel} channel.`);
    console.log(JSON.parse(message));
    // TODO: figure out what to do here
  });
};

start();