import NavigationBar from "@/components/navigations/NavigationBar";
import MainSection from "@/components/sections/MainSection";
import AboutSection from "@/components/sections/AboutSection";
import RentalPlaceSection from "@/components/sections/RentalPlaceSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import Footer from "@/components/navigations/Footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <MainSection />
      <AboutSection />
      <RentalPlaceSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
