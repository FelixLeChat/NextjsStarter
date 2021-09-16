import express from "express";
import next from "next";
import * as dotenv from "dotenv";
import helmet from "helmet";
import defaultLanguageMiddleware from "./middleware/defaultLanguageMiddleware";

// env config
const dev = process.env.NODE_ENV !== "production";
if (dev) {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
}

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(helmet());

  // Cache public img and font folders (1 year)
  if (!dev) {
    server.get(/\/(img|font)\//, (_, res, nextHandler) => {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      nextHandler();
    });
  }

  // Default language Middleware
  server.use("*", defaultLanguageMiddleware);

  // Add catch-all GET and POST for non-custom routes
  server.get("*", (req, res) => handle(req, res));
  server.post("*", (req, res) => handle(req, res));

  await server.listen(port);

  // eslint-disable-next-line no-console
  console.log(`> Ready on http://localhost:${port}`);
})();
