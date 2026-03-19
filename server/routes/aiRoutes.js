const express = require("express");
const {
  generateContent,
  getHistory,
  deleteHistory
} = require("../controllers/aiController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/generate", protect, generateContent);
router.get("/history", protect, getHistory);
router.delete("/history/:id", protect, deleteHistory);

module.exports = router;