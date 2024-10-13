import Button from "./ui/button";
export default function Hero() {
  return (
    <div className="bg-[url('../images/Background.png')] h-screen  relative w-full">
      <div className="absolute   w-full top-44">
        <h1 className=" text-white text-center text-4xl sm:text-8xl  z-10 mb-6 font-custom1 ">
          Unveiling the <span className="font-custom2">Universe </span>
        </h1>
        <h1 className=" text-white text-4xl sm:text-8xl font-custom1 z-10 text-center ">
          {" "}
          <span className="font-custom2">Within </span>You
        </h1>
        <h1 className="text-white mt-4 text-center">
          Celestial helps you explore your cosmic path
        </h1>
        <div className="flex gap-4 mt-4 justify-center">
          <Button className="border rounded-md bg-[#DBF77E] w-36 h-10 ">
            Book a Session
          </Button>
          <Button className="border rounded-md text-[#DBF77E] w-36 border-[#DBF77E]">
            Weekly horoscope
          </Button>
        </div>
      </div>

      <div className="h-95v mt-8 bg-[url('../images/HeroBackground.png')] ">
        <div className="bg-[url('../images/Ornament.png')] h-full mt-8"></div>
      </div>
    </div>
  );
}
