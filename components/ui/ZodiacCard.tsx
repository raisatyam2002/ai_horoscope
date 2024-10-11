import Image from "next/image";
import { zodiacImages } from "@/utils/zodiacImage";
export default function ZodiacCard({ zodiacSign }: { zodiacSign: string }) {
  return (
    <div className="border rounded-lg flex flex-col items-center text-center p-4  text-white hover:text-[#DBF77E] hover:border-[#DBF77E]">
      <Image src={zodiacImages[zodiacSign]} alt="aries"></Image>
      <h1 className=" font-custom1 text-2xl">
        {zodiacSign}(October 04 - Novemver 04 )
      </h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla cum
        cupiditate neque aperiam ab doloremque libero voluptatem? Ad modi harum
        hic est laudantium placeat consequuntur distinctio, asperiores, numquam
        dignissimos itaque?
      </p>
      <div></div>
    </div>
  );
}
