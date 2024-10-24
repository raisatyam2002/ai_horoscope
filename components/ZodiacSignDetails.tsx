import { zodiacImages } from "@/utils/zodiacImages";
import Image from "next/image";

export default function ZodiacSignDetail({
  fieldState,
}: {
  fieldState: string | undefined;
}) {
  const currDate = new Date();
  const currYear = currDate.getFullYear().toString().slice(-2);
  const currMonth = currDate.toLocaleString("default", { month: "short" });
  const prevDate = new Date(currDate);
  prevDate.setMonth(currDate.getMonth() - 1);
  const prevMonth = prevDate.toLocaleString("default", { month: "short" });
  const nextYear = (currDate.getFullYear() + 1).toString().slice(-2);
  //   console.log("fieldState ", fieldState);

  console.log("Current Year: ", currYear);
  console.log("Current Month: ", currMonth);
  console.log("Previous Month: ", prevMonth);
  console.log("Next Year: ", nextYear);

  return (
    <div className="flex  flex-col items-center md:flex-row md:justify-center md:gap-24">
      <Image
        src={zodiacImages["ARIES"]}
        alt="sign"
        className="h-48 w-40"
      ></Image>
      <div className="mt-8 hover:text-[#DBF77E] ">
        <h1 className="text-2xl font-custom1">
          ARIES ({currMonth} {currYear} - {prevMonth} {nextYear})
        </h1>
        <p className="w-96">{fieldState}</p>
      </div>
    </div>
  );
}
