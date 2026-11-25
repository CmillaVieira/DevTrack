
const http = require("http");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }

  if (req.url === "/api/tasks") {
    const tasks = [
      { id: 1, title: "Estudar JavaScript", category: "JavaScript", done: true },
      { id: 2, title: "Aprender Docker", category: "DevOps", done: false },
      { id: 3, title: "Praticar Git e GitHub", category: "Versionamento", done: false },
      { id: 4, title: "Criar um projeto pessoal", category: "Projetos", done: true }
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(tasks));
  }

  const filePath = path.join(
    publicDir,
    req.url === "/" ? "index.html" : req.url
  );

  const ext = path.extname(filePath);

  const contentTypes = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8"
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Arquivo não encontrado");
    }

    res.writeHead(200, {
      "Content-Type": contentTypes[ext] || "text/plain"
    });
    res.end(data);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`DevTrack rodando na porta ${PORT}`);
});

module.exports = server;
