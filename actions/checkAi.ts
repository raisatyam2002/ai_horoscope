"use server";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
export default async function checkAi({
  firstName,
  lastName,
  dateOfBirth,
  placeOfBirth,
  timeOfBirth,
}: any) {
  console.log("api key ", process.env.OPENAI_API_KEY);
  console.log("debug ");
  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt: `generate a horoscope of a person having name ${firstName} ${lastName} born on ${dateOfBirth} on time ${timeOfBirth} at place of birth ${placeOfBirth} on json in four fields general health love carrer each filed should have one line`,
  });
  console.log("text ", text);
  return text;
}
