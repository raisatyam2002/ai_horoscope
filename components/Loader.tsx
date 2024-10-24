"use client";
import { useEffect, useState } from "react";
import { loadingTextArray } from "../utils/loaderStrings";
export default function Loader() {
  const [loadingText, setLoadingText] = useState(
    "Consulting the stars... magic is in progress."
  );
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setLoadingText(loadingTextArray[index]);
      index = (index + 1) % loadingTextArray.length;
    }, 2000);
    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(intervalId);
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="text-white mt-96 text-center font-custom1 text-6xl h-full overflow-y-hidden ">
      {loadingText}
    </div>
  );
}
