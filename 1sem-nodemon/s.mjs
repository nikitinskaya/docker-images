import http from 'http';
http.createServer(
  (req, res) => res.end(`Hello, ${Math.random()}`)
).listen(3333);
