const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');

app.use(express.static('public'));

let button1Total = 0;
let button2Total = 0;

app.get('/', (req, res) => {
  res.render('index', {
    button1Total: button1Total,
    button2Total: button2Total
  });
});

io.on('connection', (socket) => {
  socket.emit('update', {
    button1Total: button1Total,
    button2Total: button2Total
  });

  socket.on('clickButton1', () => {
    button1Total++;
    io.emit('update', {
      button1Total: button1Total,
      button2Total: button2Total
    });
  });

  socket.on('clickButton2', () => {
    button2Total++;
    io.emit('update', {
      button1Total: button1Total,
      button2Total: button2Total
    });
  });
});

http.listen(3000, () => {
  console.log('Server listening on port 3000');
});
