"use server";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { userTypes } from "@/types/userTypes";
export default async function getHoroscopeDetails({
  firstName,
  lastName,
  dateObj,
  placeOfBirth,
  timeOfBirth,
}: userTypes) {
  try {
    if (firstName && lastName && dateObj && placeOfBirth && timeOfBirth) {
      //   const jsonData = await generateText({
      //     model: openai("gpt-4o-mini"),
      //     prompt: `Generate a horoscope for a person named ${firstName} ${lastName}, born on ${dateObj} at ${timeOfBirth} in ${placeOfBirth}. Please provide the response as a JSON string in the following format:

      //       {
      //         "general": "One-line general horoscope",
      //         "health": "One-line health horoscope",
      //         "love": "One-line love horoscope",
      //         "career": "One-line career horoscope"
      //       }
      //       `,
      //   });
      // const text=jsonData.text;
      const resJson = {
        general:
          "Satyam, this period will bring new opportunities for growth and self-discovery.",
        health:
          "Focus on maintaining a balanced lifestyle to enhance your well-being.",
        love: "Expect meaningful connections to blossom, deepening your relationships.",
        career:
          "Your hard work will start to pay off, leading to recognition and new prospects.",
      };

      //    console.log();

      //   console.log("jsonData ", jsonData);
      //   const horoscopeData = await JSON.parse(jsonData.general);

      //   console.log("horoscopedata ", text);
      //   console.log(typeof text);
      //   const resJson = convertToJson(text);

      console.log(resJson.general);
      console.log(resJson.love);
      console.log(resJson.health);
      console.log(resJson.career);

      return {
        success: true,
        message: "horscope fetched successfull",
        resJson,
      };
    } else {
      console.log(firstName);
      console.log(lastName);
      console.log(dateObj);
      console.log(placeOfBirth);
      console.log(timeOfBirth);

      console.log("invalid user detail");

      return {
        success: false,
        message: "invalid user details try again",
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}
function convertToJson(str: string) {
  const res = str.slice(7, str.length - 3);
  console.log("resultant string ", res);
  const resJson = JSON.parse(res);

  return resJson;
}
