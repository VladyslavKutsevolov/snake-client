let connection;
const { MOVE } = require('./constants');

const handleIput = (key) => {
  console.log();
  if (key === '\u0003') {
    process.exit();
  }
  if (MOVE[key]) {
    connection.write(MOVE[key]);
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleIput);
  return stdin;
};

module.exports = { setupInput };
