import { zodiacImages } from "@/utils/zodiacImages";
import Image from "next/image";
import { ZodiacText } from "@/utils/ZodiacText";
export default function ZodiacSignDetail() {
  const currDate = new Date();
  const currYear = currDate.getFullYear().toString().slice(-2);
  const currMonth = currDate.toLocaleString("default", { month: "short" });
  const prevDate = new Date(currDate);
  prevDate.setMonth(currDate.getMonth() - 1);
  const prevMonth = prevDate.toLocaleString("default", { month: "short" });
  const nextYear = (currDate.getFullYear() + 1).toString().slice(-2);

  console.log("Current Year: ", currYear);
  console.log("Current Month: ", currMonth);
  console.log("Previous Month: ", prevMonth);
  console.log("Next Year: ", nextYear);

  return (
    <div className="flex justify-center gap-24">
      <Image
        src={zodiacImages["ARIES"]}
        alt="sign"
        className="h-48 w-40"
      ></Image>
      <div className="mt-8 hover:text-[#DBF77E] ">
        <h1 className="text-2xl font-custom1">
          ARIES ({currMonth} {currYear} - {prevMonth} {nextYear})
        </h1>
        <p className="w-96">{ZodiacText["ARIES"]}</p>
      </div>
    </div>
  );
}
