const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 8080
const ROOT = __dirname

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.json': 'application/json',
}

function serve(filePath, res) {
  const ext = path.extname(filePath)
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
  fs.createReadStream(filePath).pipe(res)
}

const server = http.createServer((req, res) => {
  let url = req.url.split('?')[0].split('#')[0]
  if (url !== '/' && url.endsWith('/')) url = url.slice(0, -1)

  let filePath = path.join(ROOT, url === '/' ? 'index.html' : url)
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) return serve(filePath, res)

  let dirIndex = path.join(filePath, 'index.html')
  if (fs.existsSync(dirIndex)) return serve(dirIndex, res)

  // SPA fallback: find index.html in parent directories
  let parts = url.split('/').filter(Boolean)
  while (parts.length > 0) {
    let spaPath = path.join(ROOT, ...parts, 'index.html')
    if (fs.existsSync(spaPath)) return serve(spaPath, res)
    parts.pop()
  }

  // Ultimate fallback: root index.html
  let rootIndex = path.join(ROOT, 'index.html')
  if (fs.existsSync(rootIndex)) return serve(rootIndex, res)

  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('404 Not Found')
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
