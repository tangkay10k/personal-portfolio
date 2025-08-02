import axios from "axios";

export const sendMessage = async (payload) => {
  const res = await axios.post("/api/contact", payload);
  return res.data;
};
