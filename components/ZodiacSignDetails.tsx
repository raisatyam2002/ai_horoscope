import { zodiacImages } from "@/utils/zodiacImages";
import Image from "next/image";
export default function ZodiacSignDetail() {
  return (
    <div className="flex justify-center gap-20">
      <Image
        src={zodiacImages["ARIES"]}
        alt="sign"
        className="h-48 w-40"
      ></Image>
      <div className="mt-8 hover:text-[#DBF77E] ">
        <h1 className="text-2xl font-custom1">ARIES (MARCH 21 -APRIL 19)</h1>
        <p className="w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          eligendi accusantium eos officia, numquam maxime soluta aut ex quis
          voluptas laudantium tenetur exercitationem recusandae, saepe, vel
          quaerat quibusdam quos! Distinctio.
        </p>
      </div>
    </div>
  );
}
