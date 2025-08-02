const { sendMessage } = require("../services/emailService");

exports.createMessage = async (req, res) => {
  try {
    const result = await sendMessage(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
