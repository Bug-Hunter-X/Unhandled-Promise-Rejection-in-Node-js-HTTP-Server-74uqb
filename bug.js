const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const asyncOperation = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('Success!');
        } else {
          reject(new Error('Something went wrong!'));
        }
      }, 1000);
    });
  };

  asyncOperation()
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch((error) => {
      // Here's where the error handling is incomplete.  It doesn't handle the unhandled rejection properly.
      console.error('Error:', error); // Logs the error, but the response isn't handled.
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});