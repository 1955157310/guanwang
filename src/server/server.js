const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));
const weather = mongoose.model('weather', {
  city: String,
  rain: String,
  wind: String,
  temperature: Array,
});
app.use(bodyParser.json());
app.use(cors());
app.get('/weather', async (req, res) => {
  const weathers = await weather.find().exec();
  res.json(weathers);
});
let data = [
  {
    name: '南阳',
    value: 167
  },
  {
    name: '周口',
    value: 67
  },
  {
    name: '漯河',
    value: 123
  },
  {
    name: '郑州',
    value: 55
  },
  {
    name: '西峡',
    value: 98
  }
];
setInterval(() => {
  data = data.map(item => {
    item.value = Math.floor(Math.random() * 181) + 20;
    return item;
  });

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}, 2000);
wss.on('connection', ws => {
  ws.send(JSON.stringify(data));
});
const port = 3000;
server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});
