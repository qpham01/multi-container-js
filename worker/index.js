const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const subscriber = redisClient.duplicate();

// Respond to message (integer fibonacci  input) by calculating fibonacci value
subscriber.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});

// Subscribe to insert event
subscriber.subscribe('insert');

// Slow recursive fibonacci calculator
function fib(index) {
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}