import Image from "next/image";
import Link from "next/link";

const rentalPlaces = [
  {
    name: "DK Living",
    imageURL: "/images/rental/1. Kos DK Living.jpg",
    location: "Jalan Soekarno Hatta Indah V no.7B",
  },
  {
    name: "Griya Artha Prima",
    imageURL: "/images/rental/2. Kos Griya Artha Prima.jpg",
    location: "Jalan Candi Mendut Barat Blok C no.16",
  },
  {
    name: "Maliqa",
    imageURL: "/images/rental/3. Kos Maliqa.jpg",
    location: "Jalan Candi Mendut Selatan III no.18",
  },
];

export default function RentalPlaceSection() {
  return (
    <section id="location" className="w-full py-16 lg:py-20">
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
              untuk anda
            </p>
          </div>

          {/* Content */}
          <div className="grid w-full grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3">
            {rentalPlaces?.map((info, index) => (
              <div
                className="group relative col-span-1 flex h-[320px] w-full cursor-pointer flex-col gap-y-4 overflow-hidden rounded-xl bg-[#ffeeca] p-7 sm:h-[460px]"
                key={info?.name + index}
              >
                <Image
                  src={info?.imageURL}
                  alt="Logo"
                  fill
                  className="object-cover saturate-150 duration-500 ease-in-out group-hover:rotate-2 group-hover:scale-110"
                />
                {/*  */}
                <div className="absolute bottom-0 left-0 h-auto w-full translate-y-[100%] bg-gradient-to-t from-[#ffeeca] to-black/0 p-3 duration-500 ease-in-out group-hover:translate-y-[0%]">
                  <div className="flex h-full w-full flex-col justify-end gap-y-5 rounded-lg bg-[#241503] p-4 backdrop-blur-md">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-sm text-[#d4cab4] underline decoration-[#d4cab4]/80 underline-offset-2">
                        Click to see more details
                      </span>
                      <Link
                        href={"/kost/"}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffeeca]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right aspect-square h-[26px] w-[26px] rotate-[-45deg] text-[#241503]"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    <div className="">
                      <h3 className="mt-auto text-xl font-semibold text-[#ffeeca]">
                        {info?.name}
                      </h3>
                      <span className="text-sm text-[#d4cab4]">
                        {info?.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
