import Appbar from "../components/Appbar";
import Hero from "../components/HeroSection";
import About from "../components/About";
import WeeklyHoroscope from "@/components/WeeklyHororscope";
import HororscopeForm from "@/components/HoroscopeForm";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Appbar></Appbar>
      <Hero></Hero>
      <About></About>
      <WeeklyHoroscope></WeeklyHoroscope>
      <HororscopeForm></HororscopeForm>
      <Footer></Footer>
    </div>
  );
}
