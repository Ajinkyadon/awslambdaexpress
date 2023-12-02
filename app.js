const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express on AWS Lambda!');
});

// For handling API Gateway proxy requests
const awsServerlessExpress = require('aws-serverless-express');
const server = awsServerlessExpress.createServer(app);

// Export the handler function for AWS Lambda
exports.handler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context);
};
