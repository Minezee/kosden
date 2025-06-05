"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { rentalPlaceDetails } from "@/utils/data/rentalPlaceDetails";

const rentalPlaces = Object.entries(rentalPlaceDetails).map(([slug, data]) => ({
  slug,
  ...data
}));

export default function RentalPlaceSection() {
  const router = useRouter();

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
          <div className="w-full">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              navigation={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2.5,
                },
                768: {
                  slidesPerView: 2.5,
                },
                1024: {
                  slidesPerView: 3.5,
                },
              }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {rentalPlaces?.map((info, index) => (
                <SwiperSlide key={info?.name + index}>
                  <Link
                    href={`/rental/${info?.slug}`}
                    className="group relative col-span-1 flex h-[320px] w-full cursor-pointer flex-col gap-y-4 overflow-hidden rounded-xl bg-[#ffeeca] p-7 sm:h-[460px]"
                  >
                    <Image
                      src={info?.roomVariant?.basic?.heroImage}
                      alt="Logo"
                      fill
                      quality={80}
                      className="object-cover saturate-150 duration-500 ease-in-out group-hover:rotate-2 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 h-auto w-full translate-y-[100%] bg-gradient-to-t from-[#ffeeca] to-black/0 p-1 lg:p-3 duration-500 ease-in-out group-hover:translate-y-[0%]">
                      <div className="flex h-full w-full flex-col justify-end gap-y-5 rounded-lg bg-[#241503] p-3 pb-6 lg:p-4 backdrop-blur-md">
                        <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-0 w-full items-end lg:items-center justify-between">
                          <div className="flex items-start flex-1 w-full">
                            <span className="text-xs lg:text-sm text-[#d4cab4] underline decoration-[#d4cab4]/80 underline-offset-2">
                              Click to see more details
                            </span>
                          </div>
                          <div
                            className="flex h-8 lg:h-12 w-8 lg:w-12 items-center justify-center rounded-full bg-[#ffeeca]"
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
                          </div>
                        </div>
                        <div className="">
                          <h3 className="mt-auto text-sm lg:text-xl font-semibold text-[#ffeeca]">
                            {info?.name}
                          </h3>
                          <span className="text-xs lg:text-sm text-[#d4cab4] line-clamp-1">
                            {info?.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
