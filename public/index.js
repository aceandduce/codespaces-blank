const socket = io();

socket.on('update', (data) => {
  document.getElementById('button1').innerText = `Button 1 (${data.button1Total})`;
  document.getElementById('button2').innerText = `Button 2 (${data.button2Total})`;
});

document.getElementById('button1').addEventListener('click', () => {
  socket.emit('clickButton1');
  document.getElementById('button1').style.backgroundColor = '#eee';
  document.getElementById('button2').style.backgroundColor = '#ddd';
});

document.getElementById('button2').addEventListener('click', () => {
  socket.emit('clickButton2');
  document.getElementById('button2').style.backgroundColor = '#eee';
  document.getElementById('button1').style.backgroundColor = '#fff';
});
