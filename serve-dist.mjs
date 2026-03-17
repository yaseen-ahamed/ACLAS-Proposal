import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 8082);
const root = join(process.cwd(), "dist");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

if (!existsSync(root)) {
  console.error("dist folder not found. Run `npm run build` first.");
  process.exit(1);
}

const safePath = (pathname) => {
  const trimmed = pathname.split("?")[0].split("#")[0];
  const normalized = normalize(trimmed).replace(/^(\.\.(\/|\\|$))+/, "");
  return normalized === "/" ? "/index.html" : normalized;
};

const server = createServer((req, res) => {
  const requestPath = safePath(req.url || "/");
  let filePath = join(root, requestPath);

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(root, "index.html");
  }

  const ext = extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  res.setHeader("Content-Type", contentType);
  createReadStream(filePath)
    .on("error", () => {
      res.statusCode = 500;
      res.end("Internal Server Error");
    })
    .pipe(res);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Static server running at http://localhost:${port}`);
});
