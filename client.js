const net = require('net');
const { IP, PORT, NAME } = require('./constants');

const connect = function () {
  const connection = net.createConnection({
    host: IP,
    port: PORT,
  });
  connection.setEncoding('utf8');

  connection.on('data', (data) => {
    console.log('Server says: ', data);
  });

  connection.on('connect', () => {
    connection.write(NAME);
  });

  return connection;
};

module.exports = { connect };
