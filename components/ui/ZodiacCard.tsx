import Image from "next/image";
import { zodiacIcons } from "@/utils/zodiacIcons";
import { ZodiacText } from "@/utils/ZodiacText";

export default function ZodiacCard({ zodiacSign }: { zodiacSign: string }) {
  const { currMonth, currYear, prevMonth, nextYear } = getTimePeriod();
  return (
    <div className="border rounded-lg flex flex-col items-center text-center p-4  text-white hover:text-[#DBF77E] hover:border-[#DBF77E] sm:my-0 my-2  ">
      <Image src={zodiacIcons[zodiacSign]} alt="aries"></Image>
      <h1 className=" font-custom1 text-2xl">
        {zodiacSign}({currMonth} {currYear} - {prevMonth} {nextYear} )
      </h1>
      <p className="">{ZodiacText[zodiacSign]}</p>
      <div></div>
    </div>
  );
}
function getTimePeriod() {
  const currDate = new Date();
  const currYear = currDate.getFullYear().toString().slice(-2);
  const currMonth = currDate.toLocaleString("default", { month: "short" });
  const prevDate = new Date(currDate);
  prevDate.setMonth(currDate.getMonth() - 1);
  const prevMonth = prevDate.toLocaleString("default", { month: "short" });
  const nextYear = (currDate.getFullYear() + 1).toString().slice(-2);
  // console.log(currMonth, currYear, prevMonth, nextYear);
  return { currMonth, currYear, prevMonth, nextYear };
}
