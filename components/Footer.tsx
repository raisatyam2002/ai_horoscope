import Image from "next/image";
import logo from "../images/Logo-calestial.png";
import fbIcon from "../Icon/Facebook.png";
import instaIcon from "../Icon/Instagram.png";
import xIcon from "../Icon/Twitter X.png";
import TextInput from "./ui/TextInput";
import Button from "./ui/button";
export default function Footer() {
  return (
    <div className="mt-20">
      <hr className="border-t-2 border-white w-5/6 mx-auto h-8" />
      <div className="h-64  relative mt-8 z-10">
        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-6  sm:justify-between text-white z-10 mt-2 px-16">
          <div className="">
            <Image src={logo} alt="logo" className="h-10 mb-4"></Image>
            <h1 className="hidden sm:visible ">We help you exploring your </h1>
            <h1 className="hidden sm:visible ">cosmic path</h1>
            <h1 className="sm:hidden visible">
              {" "}
              We help you exploring your cosmic pat
            </h1>
            <div className="flex gap-x-4 mt-2  ">
              <Image src={fbIcon} alt="" className="h-6"></Image>
              <Image src={instaIcon} alt="" className="h-6 mt-1"></Image>
              <Image src={xIcon} alt="" className="h-6"></Image>
            </div>
          </div>
          <div className="flex  justify-between space-x-10">
            <div>
              <h1 className="font-custom1 text-[#DBF77E] text-2xl mb-5">
                Company
              </h1>
              <h1 className="mb-1">About Us</h1>
              <h1 className="mb-1">Horoscope</h1>
              <h1 className="mb-1">Services</h1>
            </div>
            <div>
              <div>
                <h1 className="font-custom1 text-[#DBF77E] text-2xl mb-5">
                  Contact Us
                </h1>
                <h1 className="mb-1">celestialAi@gmail.com</h1>
                <h1 className="mb-1">+91 9926321435</h1>
              </div>
            </div>
          </div>
          <div className="sm:pb-0 pb-6">
            <h1 className="font-custom1 text-[#DBF77E] text-2xl mb-5 ">
              Subscribe for any updates
            </h1>
            <input
              className="border rounded-md h-8 p-2 bg-transparent text-white mr-2"
              type="text"
              placeholder="Your Email"
            ></input>
            <Button className="border rounded-md bg-[#DBF77E] w-24 h-8 text-black sm:mt-0 mt-2">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="bg-[url('../images/HeroBackground.png')] h-full inset-0 -top-6 -left-44 absolute -z-10 opacity-20"></div>
      </div>
    </div>
  );
}
