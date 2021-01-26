import Server from './views/Server';

const server = (new Server()).createAndGetServer();

server.listen(3000, () => console.log('Listening to port 3000'));
