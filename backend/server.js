const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const connection = require("./config/dbconfig");
const setupRoutes = require("./routes/apiRoutes");

app.use(cors());

// Serve static files from the frontend's dist directory
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use(express.json());
// Proxy requests to the FastAPI application
app.use(
  "/detect",
  createProxyMiddleware({
    target: "http://3.104.105.167:3002",
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      console.log("Request made to FastAPI:", req.method, req.url);
    },
    onProxyRes: (proxyRes, req, res) => {
      console.log("Response received from FastAPI:", proxyRes.statusCode);
    },
    onError: (err, req, res) => {
      console.error("Error in proxy:", err);
      res.status(500).send("Proxy error");
    },
  })
);

app.get("/", (req, res) => {
  res.send("This is backend");
});

setupRoutes(app, connection);
// Add this to handle any other GET request not handled above and serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
});

module.exports = app;
