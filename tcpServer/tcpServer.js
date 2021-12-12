const net = require('net');
const server = net.createServer((c) => {
  // 'connection' listener.
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.on('data', (data)=> {
    console.log(data.toString());
    c.write('OK\r\n');
    c.write('XYZ\r\n');
  })
  c.pipe(c);
});
server.on('error', (e) => {
  throw e;
});
server.listen(8124, () => {
  console.log('server bound on port 8124');
});