import { APIKEY_GOOGLE } from "@env";
import axios from "axios";

export async function detectTextFromImage(base64Image: string[]) {
  let paragraphs: string[] = [];

  for (let i = 0; i < base64Image.length; i++) {
    const requestBody = {
      requests: [
        {
          image: {
            content: base64Image[i],
          },
          features: [
            {
              type: "DOCUMENT_TEXT_DETECTION",
            },
          ],
        },
      ],
    };

    const response = await axios.post(
      "https://vision.googleapis.com/v1/images:annotate?key=" + APIKEY_GOOGLE,
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const textAnnotations = response.data.responses[0].textAnnotations;
    if (textAnnotations && textAnnotations.length > 0) {
      paragraphs.push(textAnnotations[0].description.replace(/\r?\n|\r/g, " "))
    }
  }

  return paragraphs;
}
