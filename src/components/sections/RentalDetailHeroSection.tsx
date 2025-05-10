"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaCircleDot } from "react-icons/fa6";
import { MdDiamond } from "react-icons/md";
import { rentalPlaceDetails } from "@/utils/data/rentalPlaceDetails";

export default function RentalDetailHeroSection({
  rentalPlaceName,
}: {
  rentalPlaceName: "dk-living" | "griya-artha-prima" | "maliqa";
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [roomVariant, setRoomVariant] = useState<"basic" | "premium">("basic");

  const [width, setWidth] = useState<undefined | number>(undefined);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-4 lg:py-16">
      <div className="custom__container">
        <div className="relative grid h-auto w-full grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5">
          {/* Main Content */}
          <div className="order-2 col-span-1 flex w-full flex-col items-start text-start lg:order-1 lg:col-span-3">
            <div className="text-start">
              <h2 className="text-4xl font-bold text-[#584015] lg:text-5xl">
                Rental Place -{" "}
                <span className="bg-gradient-to-r from-[#754a00] to-[#db8a00] bg-clip-text text-transparent">
                  {rentalPlaceDetails[rentalPlaceName]["name"]}
                </span>
              </h2>
              <span className="mt-2 block h-2 w-24 bg-gradient-to-r from-[#754a00] to-[#db8a00]"></span>
            </div>

            <div className="mt-8 flex w-full flex-col gap-y-3">
              <div className="relative w-full">
                <Swiper
                  style={{
                    // @ts-ignore
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="!h-[375px] md:!h-[450px]"
                >
                  <SwiperSlide>
                    <div className="relative aspect-auto h-full w-full overflow-hidden rounded-lg">
                      <Image
                        src={rentalPlaceDetails[rentalPlaceName]["heroImage"]}
                        alt="Hero Image"
                        fill
                        className="object-cover object-center saturate-200"
                        quality={100}
                      />
                    </div>
                  </SwiperSlide>
                  {rentalPlaceDetails[rentalPlaceName]?.roomVariant?.basic?.images.map(
                    (image) => (
                      <SwiperSlide>
                        <div className="relative aspect-auto h-full w-full overflow-hidden rounded-lg">
                          <Image
                            src={image}
                            alt="Hero Image"
                            fill
                            className="object-cover object-center saturate-200"
                            quality={100}
                          />
                        </div>
                      </SwiperSlide>
                    ),
                  )}
                </Swiper>
              </div>

              <Swiper
                // @ts-ignore
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={width! > 768 ? 4.2 : width! > 480 ? 3.2 : 2.2}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="childSwiper !h-[150px]"
              >
                <SwiperSlide>
                  <div className="relative aspect-auto h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={rentalPlaceDetails[rentalPlaceName]["heroImage"]}
                      alt="Hero Image"
                      fill
                      className="object-cover saturate-200"
                      quality={100}
                    />
                  </div>
                </SwiperSlide>
                {rentalPlaceDetails[rentalPlaceName]?.roomVariant?.basic?.images.map((image) => (
                  <SwiperSlide>
                    <div className="relative aspect-auto h-full w-full overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt="Hero Image"
                        fill
                        className="object-cover object-center saturate-200"
                        quality={100}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* <div className="relative mt-8 aspect-square h-[450px] w-full overflow-hidden rounded-xl">
              <Image
                src={rentalPlaceDetails[rentalPlaceName]["heroImage"]}
                alt={rentalPlaceDetails[rentalPlaceName]["name"]}
                fill
                className="object-cover saturate-200"
                quality={100}
              />
            </div>

            <div className="mt-4 flex h-[160px] w-full">
              <Swiper
                spaceBetween={20}
                slidesPerView={2.5}
                onSlideChange={() => console.log("")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="relative aspect-auto h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={rentalPlaceDetails[rentalPlaceName]["heroImage"]}
                      alt={rentalPlaceDetails[rentalPlaceName]["name"]}
                      fill
                      className="object-cover saturate-200"
                      quality={100}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative aspect-auto h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={rentalPlaceDetails[rentalPlaceName]["heroImage"]}
                      alt={rentalPlaceDetails[rentalPlaceName]["name"]}
                      fill
                      className="object-cover saturate-200"
                      quality={100}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative aspect-auto h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={rentalPlaceDetails[rentalPlaceName]["heroImage"]}
                      alt={rentalPlaceDetails[rentalPlaceName]["name"]}
                      fill
                      className="object-cover saturate-200"
                      quality={100}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative aspect-auto h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={rentalPlaceDetails[rentalPlaceName]["heroImage"]}
                      alt={rentalPlaceDetails[rentalPlaceName]["name"]}
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div> */}

            <div className="mt-8 flex w-full flex-col gap-y-12">
              {/* Overview */}
              <div className="text-start">
                <h3 className="text-3xl font-semibold text-[#584015]">
                  Overview
                </h3>
                <p className="mt-2 w-full text-[#584015]/80 lg:text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore laboriosam quo voluptate, illum quis officiis ipsa
                  ducimus quae eaque error eius corporis perferendis.
                  Consequuntur sequi voluptate, quod aperiam quasi, earum neque
                  velit doloribus eligendi inventore mollitia omnis quae eos
                  possimus illo sed hic nostrum! Animi atque accusantium
                  praesentium quos excepturi?
                </p>
              </div>

              {/* Facility */}
              <div className="text-start">
                <h3 className="text-3xl font-semibold text-[#584015]">
                  Facility
                </h3>
                <p className="mt-2 w-full text-[#584015]/80 lg:text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore laboriosam quo voluptate, illum quis officiis ipsa
                  ducimus quae eaque error eius corporis perferendis.
                  Consequuntur sequi voluptate, quod aperiam quasi, earum neque
                  velit doloribus eligendi inventore mollitia omnis quae eos
                  possimus illo sed hic nostrum! Animi atque accusantium
                  praesentium quos excepturi?
                </p>
              </div>

              {/* Location */}
              <div className="text-start">
                <h3 className="text-3xl font-semibold text-[#584015]">
                  Location
                </h3>
                <iframe
                  src={rentalPlaceDetails[rentalPlaceName]["iframeSrc"]}
                  width="100%"
                  height="450"
                  style={{
                    marginTop: "20px",
                    border: "1px solid rgba(117, 74, 0, 0.2)",
                    borderRadius: "16px",
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="order-1 col-span-1 flex h-fit w-full flex-col gap-y-4 rounded-xl border border-[#754a00]/20 bg-[#ffeeca] p-6 lg:order-2 lg:col-span-2">
            <div className="-mt-1">
              <h3 className="text-2xl font-semibold text-[#584015]">Choices</h3>

              <div className="relative mt-2 flex w-full items-center gap-x-3 rounded-lg border-2 border-[#754a00]/20 bg-[#ffeeca] p-1">
                <button
                  type="button"
                  onClick={() => setRoomVariant("basic")}
                  className={`flex w-full items-center justify-center gap-x-2 rounded-md py-2 text-lg font-semibold duration-500 ease-out ${roomVariant === "basic" ? "bg-[#7c5424] text-[#ffeeca]" : "bg-transparent text-[#7c5424]"}`}
                >
                  Basic
                  <FaCircleDot className="text-base" />
                </button>
                {/* Separator */}
                <div className="absolute left-1/2 top-1/2 h-[80%] w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-[#754a00]/20"></div>
                <button
                  type="button"
                  onClick={() => setRoomVariant("premium")}
                  className={`flex w-full items-center justify-center gap-x-2 rounded-md py-2 text-lg font-semibold duration-500 ease-out ${roomVariant === "premium" ? "bg-[#7c5424] text-[#ffeeca]" : "bg-transparent text-[#7c5424]"}`}
                >
                  Premium
                  <MdDiamond className="text-lg" />
                </button>
              </div>
            </div>

            <div className="h-[1px] w-full bg-[#754a00]/20"></div>

            <div>
              <h3 className="text-xl font-semibold text-[#584015]">Price</h3>

              <span className="text-2xl font-semibold text-[#ad6e00]">
                Rp{" "}
                {rentalPlaceDetails[rentalPlaceName]["roomVariant"][
                  roomVariant
                ]["price"].toLocaleString('id-ID')}
              </span>
            </div>
            <Link
              href={`https://wa.me/6287786012862?text=Apakah%20kamar%20${rentalPlaceDetails[rentalPlaceName]}%20${roomVariant}%20masih%20tersedia%3F`}
              target="_blank"
              className="mt-2 w-full rounded-md bg-[#7c5424] px-8 py-2.5 text-center font-medium text-white transition-all duration-300 hover:bg-[#63431d] lg:text-lg"
            >
              Book Room Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
