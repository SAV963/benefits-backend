require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const path = require("path");

const bluebuttonRoutes = require("./routes/bluebutton");
const priorAuthRoutes = require("./routes/priorauth");
const estimatorRoutes = require("./routes/estimator");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || "dev-only-secret-change-this",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: "lax",
    secure: false // set true when using HTTPS in production
  }
}));

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    message: "Benefits App Level 2/3 backend is running"
  });
});

app.use("/api/bluebutton", bluebuttonRoutes);
app.use("/api/priorauth", priorAuthRoutes);
app.use("/api/estimator", estimatorRoutes);

app.listen(PORT, () => {
  console.log(`Benefits App backend running at http://localhost:${PORT}`);
});
