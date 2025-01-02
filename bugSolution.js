const http = require('http');

const server = http.createServer(async (req, res) => {
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

  try {
    const result = await asyncOperation();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result);
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});