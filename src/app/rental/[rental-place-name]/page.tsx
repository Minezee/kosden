import NavigationBar from "@/components/navigations/NavigationBar";
import Footer from "@/components/navigations/Footer";
import RentalDetailHeroSection from "@/components/sections/RentalDetailHeroSection";

// Set revalidate (ISR) untuk halaman ini
export const revalidate = 60;

const getData = async (slug: string) => {
  const res = await fetch(
    `https://kosden-cms.up.railway.app/api/rental-places?filters[slug][$eq]=${slug}&populate[generalImages]=true&populate[roomVariant][populate][heroImage]=true&populate[roomVariant][populate][images]=true`,
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const json = await res.json();
  return json.data?.[0];
};

export default async function RentalDetailPage({
  params,
}: {
  params: { "rental-place-name": string };
}) {
  const slug = params["rental-place-name"];
  const rentalData = await getData(slug);

  if (!rentalData) {
    return <div>Data tidak ditemukan</div>; // fallback jika slug tidak ada
  }

  return (
    <>
      <NavigationBar />
      <RentalDetailHeroSection data={rentalData} />
      <Footer />
    </>
  );
}
