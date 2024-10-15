"use client";
import HororscopeForm from "./HoroscopeForm";
import Button from "./ui/button";
import { useRouter } from "next/navigation";
export default function Hero() {
  const router = useRouter();
  return (
    <div className="bg-[url('../images/Background.png')] h-screen  relative w-full">
      <div className="absolute   w-full top-44">
        <div className="text-white hover:text-[#DBF77E]">
          <h1 className="  text-center text-4xl sm:text-6xl  z-10 mb-6 font-custom1  ">
            AI-Driven Astrology: Unlock the Secrets of the{" "}
          </h1>
          <h1 className=" text-4xl sm:text-6xl font-custom1 z-10 text-center ">
            {" "}
            <span className="font-custom2">Universe </span> Within You
          </h1>
        </div>

        <h1 className="text-white mt-4 text-xl text-center">
          Celestial helps you explore your cosmic path
        </h1>
        <div className="flex gap-4 mt-4 justify-center">
          <Button
            className="border rounded-md bg-[#DBF77E] w-32 h-10 "
            onClick={() => {
              router.push("#horoscope-form");
            }}
          >
            View Horoscope
          </Button>
          <Button
            className="border rounded-md text-[#DBF77E] w-36 border-[#DBF77E] "
            onClick={() => {
              router.push("/weekly-horoscope");
            }}
          >
            Weekly horoscope
          </Button>
        </div>
      </div>

      <div className="h-95v mt-8 bg-[url('../images/HeroBackground.png')] ">
        <div className="bg-[url('../images/Ornament.png')] h-full mt-8"></div>
      </div>
    </div>
  );
}
