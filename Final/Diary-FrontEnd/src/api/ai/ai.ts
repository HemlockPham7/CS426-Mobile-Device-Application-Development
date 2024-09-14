import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyA8OhLCFWRkifY6DpKjgFh90gs-yoWY8rI");
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

// const generationConfig = {
//   stopSequences: ["red"],
//   maxOutputTokens: 200,
//   temperature: 0.9,
// };

//only 1 text input
export async function textInputGenerate(prompt: string) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    safetySettings,
    // generationConfig,
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}

export function createPromptTitleDiary(language: string, diary: string) {
  let prompt = "";
  if (language == "Vietnamese") {
    prompt += `Hãy cung cấp 1 câu tiêu đề cho nội dung có độ dài chính xác từ 12 đến 20 từ 
         và đưa tôi chỉ duy nhất 1 tiêu đề đó ở Tiếng Việt dựa vào nội dụng này : ${diary}`;
  } else {
    prompt = `Provide the title of the content with an exact length between 12 and 20 words
           and give me only this title in English depending on this content :"${diary}`;
  }

  return prompt;
}

export function createPromptSummaryDiary(
  language: string,
  length: number,
  diary: string
) {
  let lengthDiary = "";
  if (language == "Vietnamese") {
    if (length == 0) {
      lengthDiary = "3 câu";
    } else if (length == 1) {
      lengthDiary = "5 câu";
    } else if (length == 2) {
      lengthDiary = "8 câu";
    }
  } else {
    if (length == 0) {
      lengthDiary = "three sentences";
    } else if (length == 1) {
      lengthDiary = "five sentences";
    } else if (length == 2) {
      lengthDiary = "eight sentences";
    }
  }

  let prompt = "";
  if (language == "Vietnamese") {
    prompt += `Hãy tóm tắt nội dung tôi đưa và đoạn văn đó có số câu chính xác là ${lengthDiary} 
        và đưa tôi chỉ duy nhất đoạn văn đó ở Tiếng Việt : ${diary}`;
  } else {
    prompt = `Please summarize the content I give you in exact ${lengthDiary} and this summarize
        is a paragraph with ,then give me only this summarize paragraph in English : ${diary}`;
  }

  return prompt;
}

export function createPromptSuggestEmoji(diary: string, title: string) {
  return `Đề xuất cho tôi một biểu tượng cảm xúc từ 1 đến 6 (1 là tức giận, 2 là bật khóc, 3 là buồn, 4 là bình thường, 5 là vui, 6 là hứng khởi) phù hợp với tâm trạng dựa vào tiêu đề: "${title}" và nội dung: "${diary}" và đưa tôi output duy nhất con số từ 1 đến 6`;
}

export function createPromptScanDiary(diary: string) {
  return `
  Given a diary text extracted from an old paper diary, please extract the diary content from this text.

  Diary content ensuring the language matches the text (either Vietnamese or English)

  Answer your findings into a string.
  I do not need any instructions, please answer a string only.
  Be confident if there are nothing in your answer, it can also be a case.

  Text diary: ${diary}`;
}

export function createPromptGetDateFromScanImage(diary: string) {
  return `
  Given a diary text extracted from an old paper diary, please extract the date from this text.
  If the diary text does not have date, the time of diary will be the current date.

  Your extraction should follow this format: "yyyy-mm-dd"

  Answer your findings into a string.
  I do not need any instructions, please answer this string only.
  Be confident if there are nothing in your answer, it can also be a case.

  Text diary: ${diary}`;
}

export function createPromptTitleDiary2(language: string, diary: string) {
  let prompt = `
  Given a diary entry written by a user, please suggest a title for this diary.

  The title should be between 12 to 20 words in length.
  Ensure the language of the title corresponds to the language of the diary entry content: either Vietnamese or English.
  
  Answer your findings into a JSON format with keys: 'title' as a string.
  I do not need any instructions, please answer this JSON object only.
  Be confident if there are nothing in your answer, it can also be a case.
  
  Diary content: ${diary} `;

  return prompt;
}

export function createPromptSummaryDiary2(
  language: string,
  length: number,
  diary: string
) {
  let prompt = `
  Given a diary entry written by a user, please provide a summary for this diary.

  Based on the length requirement: 
  for a short summary, provide 3 sentences.
  for a medium summary, provide 5 sentences.
  for a long summary, provide 8 sentences.

  Ensure the language of the diary corresponds to the language of the diary entry content: either Vietnamese or English.

  Answer your findings into a JSON format with keys: 'summarization' as a string.
  I do not need any instructions, please answer this JSON object only.
  Be confident if there are nothing in your answer, it can also be a case.

  Length requirement: "${length} 
  Diary content: ${diary} `;

  return prompt;
}

export function createPromptSuggestEmoji2(diary: string, title: string) {
  return `
  Given a diary entry and title, Please provide an emotion rating from 1 to 6 based on the mood conveyed by the title and diary content.

  The emotion rating scale is as follows:
  1: Angry
  2: Crying
  3: Sad
  4: Neutral
  5: Happy
  6: Excited

  Your response should be a single number from 1 to 6 that best reflects the emotional tone of the diary entry.
  I do not need any instructions, please answer the number only.
  Be confident if there are nothing in your answer, it can also be a case.

  Title: ${title}
  Diary content: ${diary}`;
}

export function createPromptScanDiary2(diary: string) {
  return `
  Given a diary text extracted from an old paper diary, please extract the date and diary content from this text.
  If the diary text does not have date, the time of diary will be the current date.

  Your extraction should follow this format:
  {
      "date": "yyyy-mm-dd",
      "diary": "Diary content ensuring the language matches the text (either Vietnamese or English)"
  }

  Answer your findings into a JSON format with keys: 'date' and "diary".
  I do not need any instructions, please answer this JSON object only.
  Be confident if there are nothing in your answer, it can also be a case.

  Text diary: ${diary}`;
}
