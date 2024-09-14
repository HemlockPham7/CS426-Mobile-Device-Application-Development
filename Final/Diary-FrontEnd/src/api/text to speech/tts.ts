import axios from "axios";
import * as FileSystem from "expo-file-system";
import { APIKEY_GOOGLE } from "@env";

const base64ToAudio = async (base64Audio) => {
  const fileUri = `${FileSystem.cacheDirectory}audio.mp3`;
  await FileSystem.writeAsStringAsync(fileUri, base64Audio, {
    encoding: FileSystem.EncodingType.Base64,
  });

  console.log("File URI:", fileUri);
  return fileUri;
};

export const getAudioFromCloud = async (
  _languageCode: string,
  voiceName: string,
  input: string
) => {
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${APIKEY_GOOGLE}`;

  try {
    const response = await axios.post(
      url,
      {
        input: {
          text: input,
        },
        voice: {
          languageCode: _languageCode,
          name: voiceName,
        },
        audioConfig: {
          audioEncoding: "MP3",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const audioContent = response.data.audioContent;

    return await base64ToAudio(audioContent);
  } catch (error) {
    console.error("Error:", error);
  }
};
