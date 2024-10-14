"use client";
import Button from "./ui/button";
import ZodiacCard from "./ui/ZodiacCard";
import { useRouter } from "next/navigation";
export default function WeeklyHoroscope() {
  const router = useRouter();
  return (
    <div className="mt-20">
      <h1 className="font-custom1 text-6xl text-[#DBF77E] text-center mb-2 ">
        Weekly Hororscope
      </h1>
      <h1 className="font-custom1  text-2xl sm:text-3xl text-white text-center hover:text-[#DBF77E]">
        What the stars have in store for you with our <em>Weekly</em> Horoscope
      </h1>
      <div className="bg-[url('../images/Shape4.png')] sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-4 mt-8 px-8 sm:mx-4 flex flex-col space-y-2">
        <ZodiacCard zodiacSign="Aries"></ZodiacCard>
        <ZodiacCard zodiacSign="Taurus"></ZodiacCard>
        <ZodiacCard zodiacSign="Gemini"></ZodiacCard>
        <ZodiacCard zodiacSign="Cancer"></ZodiacCard>
        <ZodiacCard zodiacSign="Leo"></ZodiacCard>
        <ZodiacCard zodiacSign="Virgo"></ZodiacCard>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          onClick={() => {
            router.push("/weekly-horoscope");
          }}
          className="border rounded-md text-[#DBF77E] w-36 border-[#DBF77E] p-2 h-11"
        >
          More Horoscope
        </Button>
      </div>
    </div>
  );
}
