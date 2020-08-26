const net = require('net');

const connect = function () {
  const connection = net.createConnection({
    host: '135.23.222.131',
    port: 50542,
  });
  connection.setEncoding('utf8');

  connection.on('data', (data) => {
    console.log('Server says: ', data);
  });

  connection.on('connect', () => {
    connection.write('Name: VKA');
  });

  return connection;
};

module.exports = { connect };
