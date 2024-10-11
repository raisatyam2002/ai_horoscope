import Image from "next/image";
import placeHolder from "../../images/Placeholder2.png";
import ZodiacCard from "@/components/ui/ZodiacCard";
import Footer from "@/components/Footer";
export default function () {
  return (
    <div className="text-white relative">
      <h1 className="font-custom1 text-7xl mt-24 text-center">
        Weekly Horoscope
      </h1>
      <Image
        src={placeHolder}
        alt="placeholder"
        className="mt-12 w-[1300px] mx-auto"
      ></Image>
      <h1 className="text-center font-custom1 text-4xl mt-8">
        What the stars have in store for you with our <em>Weekly Horoscope</em>
      </h1>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4 mt-8 px-8 mx-4 ">
        <ZodiacCard zodiacSign="Aries"></ZodiacCard>
        <ZodiacCard zodiacSign="Taurus"></ZodiacCard>
        <ZodiacCard zodiacSign="Gemini"></ZodiacCard>
        <ZodiacCard zodiacSign="Cancer"></ZodiacCard>
        <ZodiacCard zodiacSign="Leo"></ZodiacCard>
        <ZodiacCard zodiacSign="Virgo"></ZodiacCard>
        <ZodiacCard zodiacSign="Libra"></ZodiacCard>
        <ZodiacCard zodiacSign="Scorpio"></ZodiacCard>
        <ZodiacCard zodiacSign="Sagittarius"></ZodiacCard>
        <ZodiacCard zodiacSign="Capricorn"></ZodiacCard>
        <ZodiacCard zodiacSign="Aquarius"></ZodiacCard>
        <ZodiacCard zodiacSign="Pisces"></ZodiacCard>
      </div>
      <div className="absolute text-white h-full"> </div>
      <Footer></Footer>
    </div>
  );
}
