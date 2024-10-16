"use client";
import Image from "next/image";
import Button from "./ui/button";
import logo from "../images/Logo-calestial.png";
import { useRouter } from "next/navigation";
export default function Appbar() {
  const router = useRouter();
  return (
    <div className=" w-screen flex justify-between sm:p-6 p-2 bg-black fixed top-0 z-30 cursor-pointer">
      <Image
        src={logo}
        alt="logo"
        className=""
        onClick={() => {
          router.push("/");
        }}
      ></Image>
      <Button
        className="border rounded-md bg-[#DBF77E]  w-32 "
        onClick={() => {
          router.push("#horoscope-form");
        }}
      >
        View Horoscope
      </Button>
    </div>
  );
}
