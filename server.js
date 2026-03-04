const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/chat", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.cohere.ai/v1/chat",
      {
        message: req.body.message,
        model: "command-r"
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ reply: response.data.text });

  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Error calling Cohere"
    });
  }
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

