# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an unhandled promise rejection occurs within an HTTP server.  The asynchronous operation inside the server's request handler doesn't properly handle rejection, leading to a crash or unexpected behavior.

## Bug

The `bug.js` file contains the problematic code.  An asynchronous operation is simulated using `Promise`.  If the operation fails, the error is logged to the console, but the HTTP response is not managed properly, resulting in an unhandled rejection. 

## Solution

The `bugSolution.js` file provides a corrected version. It uses a `try...catch` block within the `asyncOperation`'s `then` to properly handle potential errors and send an appropriate error response to the client.