// Global Constants
global.ROOTPATH = __dirname;

// Dependency setup
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const cors = require('cors');

// Express setup
app.use(express.static(path.join(global.ROOTPATH, 'public')));

// App Setup
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

// Configure Routes
app.use('/api', routes);

// Server setup
const port = process.env.PORT || 8081;
const server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  console.log('Express listening on ' + bind);
});

module.exports = app;
