"use client";
import { useParams } from "next/navigation";
export default function UserHoroscope() {
  const params = useParams();
  const { firstName } = params;
  const name = Array.isArray(firstName) ? firstName[0] : firstName;

  return (
    <div className="text-white mt-36 ">
      <h1 className="text-center font-custom1 text-3xl">
        The stars have aligned to welcome you, {name?.toUpperCase()}!
      </h1>
      <h1 className="text-center font-custom1 text-4xl mt-2">
        Get ready to uncover the cosmic secrets that await you today
      </h1>
    </div>
  );
}
