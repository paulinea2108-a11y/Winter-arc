// Petit serveur local pour le Winter Arc de Pauline : http://localhost (port 5180 par défaut)
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5180;
const FILE = path.join(__dirname, 'winter-arc-pauline.html');

http.createServer((req, res) => {
  if (req.url !== '/' && req.url !== '/index.html') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Page introuvable');
  }
  const body = fs.readFileSync(FILE, 'utf8');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<!doctype html><html lang="fr"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' +
    '<style>body{margin:0}[hidden]{display:none!important}img{max-width:100%}</style></head><body>' +
    body + '</body></html>');
}).listen(PORT, () => console.log(`Winter Arc sur http://localhost:${PORT}`));
