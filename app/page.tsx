import Hero from "../components/HeroSection";
import About from "../components/About";
import WeeklyHoroscope from "@/components/WeeklyHororscope";
import HororscopeForm from "@/components/HoroscopeForm";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <WeeklyHoroscope></WeeklyHoroscope>
      <HororscopeForm></HororscopeForm>
      <Footer></Footer>
    </div>
  );
}
