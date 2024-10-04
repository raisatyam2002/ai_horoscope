import Image from "next/image";
import Button from "./ui/button";
import logo from "../images/Logo-calestial.png";
export default function Appbar() {
  return (
    <div className=" w-screen flex justify-between p-6 bg-black fixed top-0 z-50">
      <Image src={logo} alt="logo"></Image>
      <Button className="border rounded-md bg-[#DBF77E] w-24">
        Reservation
      </Button>
    </div>
  );
}
