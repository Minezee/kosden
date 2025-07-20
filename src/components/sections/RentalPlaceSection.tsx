import HomeSwiper from '../ui/HomeSwiper';

const getData = async () => {
  const rentalData = await
    fetch('https://kosden-cms.up.railway.app/api/rental-places?populate[generalImages]=true&populate[roomVariant][populate][heroImage]=true&populate[roomVariant][populate][images]=true&sort=name:ASC', {
      next: {
        revalidate: 60,
      }
    })

  const rentalDatas = await rentalData.json();

  return { rentalDatas };
};

export default async function RentalPlaceSection() {
  const { rentalDatas } = await getData();

  return (
    <section id="location" className="w-full scroll-mt-16 py-16 lg:py-20">
      <div className="custom__container">
        <div className="relative flex h-auto w-full flex-col items-center justify-between gap-y-10 lg:gap-y-14">
          {/* Headers */}
          <div className="flex w-full flex-col items-start justify-between gap-y-6 lg:flex-row lg:items-center">
            <div className="order-1 w-full max-w-[450px] lg:order-2">
              <h2 className="text-4xl font-bold text-black/80 lg:text-end lg:text-5xl lg:leading-[52px]">
                Our Rental Room Places & Location
              </h2>
              <span className="mt-2 block h-2 w-24 bg-gradient-to-l from-[#754a00] to-[#db8a00] lg:ml-auto"></span>
            </div>
            <p className="order-2 w-full max-w-[400px] text-black/70 lg:order-1 lg:text-[17px]">
              Jelajahi lebih lanjut mengenai tempat hunain kos yang kami miliki
              untuk andas
            </p>
          </div>
          <HomeSwiper rentalDatas={rentalDatas?.data} />
        </div>
      </div>
    </section>
  );
}

