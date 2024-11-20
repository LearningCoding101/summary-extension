export async function fetchDataForText(selectedText) {
  // Mock data simulating the API response
  const mockResponse = {
    createdAt: "2023-10-01T00:00:00Z",
    mainIdea:
      "🤗 Transformers offers a comprehensive library for utilizing state-of-the-art pretrained models across various domains, facilitating easier and more efficient machine learning workflows.",
    sections: [
      {
        title: "Introduction to 🤗 Transformers",
        content:
          "🤗 Transformers provides APIs and tools to easily download and train state-of-the-art pretrained models, which can save time, reduce costs, and lower carbon footprints.",
      },
      {
        title: "Supported Tasks",
        content:
          "The library supports various tasks in multiple modalities, including Natural Language Processing (text classification, summarization, etc.), Computer Vision (image classification, object detection), Audio (speech recognition), and Multimodal tasks (table question answering, video classification).",
      },
      {
        title: "Framework Interoperability",
        content:
          "🤗 Transformers allows interoperability between PyTorch, TensorFlow, and JAX, enabling users to train models in one framework and use them in another, as well as export models for deployment.",
      },
      {
        title: "Community Engagement",
        content:
          "Users are encouraged to join the growing community on the Hub, forum, or Discord to connect and collaborate.",
      },
    ],
  };

  return mockResponse;
}
