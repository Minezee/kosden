import NavigationBar from "@/components/navigations/NavigationBar";
import AboutSection from "@/components/sections/AboutSection";
import MainSection from "@/components/sections/MainSection";
import RentalPlaceSection from "@/components/sections/RentalPlaceSection";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <MainSection />
      <AboutSection />
      <RentalPlaceSection />
    </>
  );
}
