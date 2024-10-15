"use server";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { userTypes } from "@/types/userTypes";
export default async function checkAi({
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

      //     {
      //       "general": "One-line general horoscope",
      //       "health": "One-line health horoscope",
      //       "love": "One-line love horoscope",
      //       "career": "One-line career horoscope"
      //     }
      //     `,
      //   });
      const jsonData = `{
        "general": "Satyam, this week brings new opportunities for growth and self-discovery.",
        "health": "Focus on maintaining a balanced diet to boost your energy levels.",
        "love": "Open communication will strengthen your relationships and deepen connections.",
        "career": "A collaborative project may lead to unexpected success and recognition."
      }`;
      console.log("jsonData ", jsonData);
      const horoscopeData = await JSON.parse(jsonData);
      console.log("horoscopedata ", horoscopeData);

      return {
        success: true,
        message: "horscope fetched successfull",
        horoscopeData,
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
