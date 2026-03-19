const PromptHistory = require("../models/PromptHistory");

const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const fakeResponse = `AI generated content for: "${prompt}"`;

    const historyItem = await PromptHistory.create({
      userId: req.user._id,
      prompt,
      response: fakeResponse
    });

    res.status(201).json({
      response: fakeResponse,
      historyItem
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHistory = async (req, res) => {
  try {
    const history = await PromptHistory.find({ userId: req.user._id }).sort({
      createdAt: -1
    });

    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteHistory = async (req, res) => {
  try {
    const item = await PromptHistory.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "History item not found" });
    }

    if (item.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await item.deleteOne();
    res.json({ message: "History item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { generateContent, getHistory, deleteHistory };