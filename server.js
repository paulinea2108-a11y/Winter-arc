// Petit serveur local pour le Winter Arc de Pauline : http://localhost (port 5180 par défaut)
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5180;
const FILE = path.join(__dirname, 'index.html');

http.createServer((req, res) => {
  if (req.url !== '/' && req.url !== '/index.html') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Page introuvable');
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(fs.readFileSync(FILE, 'utf8'));
}).listen(PORT, () => console.log(`Winter Arc sur http://localhost:${PORT}`));
