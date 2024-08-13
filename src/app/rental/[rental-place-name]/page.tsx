import NavigationBar from "@/components/navigations/NavigationBar";
import Footer from "@/components/navigations/Footer";
import RentalDetailHeroSection from "@/components/sections/RentalDetailHeroSection";

export default function RentalDetailPage({
  params,
}: {
  params: { "rental-place-name": "dk-living" | "griya-artha-prima" | "maliqa" };
}) {
  return (
    <>
      <>
        <NavigationBar />
        <RentalDetailHeroSection
          rentalPlaceName={params["rental-place-name"]}
        />
        <Footer />
      </>
    </>
  );
}
