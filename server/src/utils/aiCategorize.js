import axios from "axios";

const aiCategorize = async (text) => {

  try {

    const response = await axios.post(

      "https://router.huggingface.co/hf-inference/models/facebook/bart-large-mnli",

      {
        inputs: text,

        parameters: {
          candidate_labels: [
            "Road Damage",
            "Garbage",
            "Water Leakage",
            "Streetlight",
          ],
        },
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
        },
      }
    );

    console.log("AI RESPONSE:");

    console.log(response.data);

    return response.data[0].label;

  } catch (error) {

    console.log("AI ERROR:");

    console.log(
      error.response?.data ||
      error.message
    );

    return "General";
  }
};

export default aiCategorize;