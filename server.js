const WebSocket = require('ws');

// Buat server WebSocket di port 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server berjalan di ws://localhost:8080');

// Saat ada client yang konek
wss.on('connection', function connection(ws) {
  console.log('Client terkoneksi');

  // Kirim notifikasi ke client setelah 3 detik
  setTimeout(() => {
    ws.send('🔔 Notifikasi: Ada update baru!');
  }, 3000);

  // Kalau client kirim sesuatu (optional, bisa diabaikan di notifikasi)
  ws.on('message', function incoming(message) {
    console.log('Pesan dari client:', message.toString());
  });
});
