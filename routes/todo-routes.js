const express = require("expresss");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get Posts" });
});

router.post("/", (req, res) => {
  res.json({ message: "Post Posts" });
});

router.put("/", (req, res) => {
  res.json({ message: "Put Posts" });
});

module.exports = router;
