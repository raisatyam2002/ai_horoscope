import Image from "next/image";
import Aries from "../../images/aries.png";
export default function ZodiacCard() {
  return (
    <div className="border rounded-lg flex flex-col items-center text-center p-4">
      <Image src={Aries} alt="aries"></Image>
      <h1 className="text-white font-custom1 text-2xl ">
        Aries(October 04 - Novemver 04 )
      </h1>
      <p className="text-white ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla cum
        cupiditate neque aperiam ab doloremque libero voluptatem? Ad modi harum
        hic est laudantium placeat consequuntur distinctio, asperiores, numquam
        dignissimos itaque?
      </p>
    </div>
  );
}
