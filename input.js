let connection;

const handleIput = (data) => {
  if (data === '\u0003') {
    process.exit();
  } else if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 'd') {
    connection.write('Move: right');
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
