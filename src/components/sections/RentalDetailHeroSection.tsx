"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaCircleDot } from "react-icons/fa6";
import { MdDiamond } from "react-icons/md";
import { RentalDataType, RoomVariant } from '@/utils/type/rentalDataType';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function RentalDetailHeroSection({
  data,
}: {
  data: RentalDataType;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [roomVariant, setRoomVariant] = useState<"general" | "basic" | "medium" | "vip">(
    data?.generalImages && data.generalImages.length > 0 ? "general" : "basic"
  );
  const [width, setWidth] = useState<number | undefined>(undefined);

  const isGeneral = roomVariant === "general";

  // Find the selected room variant data
  const variantData = !isGeneral
    ? data.roomVariant.find((variant) => variant.type === roomVariant)
    : undefined;

  const hasMedium = data.roomVariant.some(variant => variant.type === "medium");
  const hasVIP = data.roomVariant.some(variant => variant.type === "vip") && data.havevip;

  // Helper function to get appropriate image URL
  const getImageUrl = (image: any) => {
    if (image.formats?.large) return image.formats.large.url;
    if (image.formats?.medium) return image.formats.medium.url;
    if (image.formats?.small) return image.formats.small.url;
    return image.url;
  };

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
          <div className="order-2 col-span-1 flex w-full flex-col items-start text-start lg:order-1 lg:col-span-3">
            <div className="text-start">
              <h2 className="text-4xl font-bold text-[#584015] lg:text-5xl">
                Rental Place - <span className="bg-gradient-to-r from-[#754a00] to-[#db8a00] bg-clip-text text-transparent">
                  {data.name}
                </span>
              </h2>
              <span className="mt-2 block h-2 w-24 bg-gradient-to-r from-[#754a00] to-[#db8a00]"></span>
            </div>

            <div className="mt-8 flex w-full flex-col gap-y-3">
              {isGeneral ? (
                data?.generalImages && data.generalImages.length > 0 ? (
                  <>
                    {/* GENERAL IMAGES SWIPER */}
                    <Swiper
                      style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" } as React.CSSProperties}
                      loop
                      spaceBetween={10}
                      navigation
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="!h-[375px] md:!h-[450px]"
                    >
                      {data.generalImages.map((img) => (
                        <SwiperSlide key={img.id}>
                          <div className="relative h-full w-full overflow-hidden rounded-lg">
                            <Image
                              src={getImageUrl(img)}
                              alt={img.alternativeText || "General Image"}
                              fill
                              className="object-cover saturate-200"
                              quality={100}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* THUMBNAIL SWIPER */}
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={width! > 768 ? 4.2 : width! > 480 ? 3.2 : 2.2}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="childSwiper !h-[150px]"
                    >
                      {data.generalImages.map((img) => (
                        <SwiperSlide key={img.id}>
                          <div className="relative h-full w-full overflow-hidden rounded-lg">
                            <Image
                              src={getImageUrl(img)}
                              alt={img.alternativeText || "General Image"}
                              fill
                              className="object-cover saturate-200"
                              quality={100}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                ) : (
                  <p className="mt-4 text-[#584015]">No general images available.</p>
                )
              ) : variantData ? (
                <>
                  {/* ROOM VARIANT SWIPER */}
                  <Swiper
                    style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" } as React.CSSProperties}
                    loop
                    spaceBetween={10}
                    navigation
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="!h-[375px] md:!h-[450px]"
                  >
                    {/* Hero Image */}
                    <SwiperSlide>
                      <div className="relative h-full w-full overflow-hidden rounded-lg">
                        <Image
                          src={getImageUrl(variantData.heroImage)}
                          alt={variantData.heroImage.alternativeText || "Hero Image"}
                          fill
                          className="object-cover saturate-200"
                          quality={100}
                        />
                      </div>
                    </SwiperSlide>

                    {/* Additional Images */}
                    {variantData.images?.map((img) => (
                      <SwiperSlide key={img.id}>
                        <div className="relative h-full w-full overflow-hidden rounded-lg">
                          <Image
                            src={getImageUrl(img)}
                            alt={img.alternativeText || "Room Image"}
                            fill
                            className="object-cover saturate-200"
                            quality={100}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* THUMBNAIL SWIPER */}
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={width! > 768 ? 4.2 : width! > 480 ? 3.2 : 2.2}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="childSwiper !h-[150px]"
                  >
                    {/* Hero Image Thumbnail */}
                    <SwiperSlide>
                      <div className="relative h-full w-full overflow-hidden rounded-lg">
                        <Image
                          src={getImageUrl(variantData.heroImage)}
                          alt={variantData.heroImage.alternativeText || "Hero Image"}
                          fill
                          className="object-cover saturate-200"
                          quality={100}
                        />
                      </div>
                    </SwiperSlide>

                    {/* Additional Images Thumbnails */}
                    {variantData.images?.map((img) => (
                      <SwiperSlide key={img.id}>
                        <div className="relative h-full w-full overflow-hidden rounded-lg">
                          <Image
                            src={getImageUrl(img)}
                            alt={img.alternativeText || "Room Image"}
                            fill
                            className="object-cover saturate-200"
                            quality={100}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              ) : (
                <p className="mt-4 text-[#584015]">Room Variant Not Available</p>
              )}
            </div>

            {/* OVERVIEW, FACILITY, LOCATION */}
            <div className="mt-8 flex w-full flex-col gap-y-12">
              <div className="text-start">
                <h3 className="text-3xl font-semibold text-[#584015]">Overview</h3>
                <div className="mt-2 w-full text-[#584015]/80 lg:text-lg markdown-content">
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {data.overview || "No overview provided."}
                  </Markdown>
                </div>
              </div>

              <div className="text-start">
                <h3 className="text-3xl font-semibold text-[#584015]">Facility</h3>
                <div className="mt-2 w-full text-[#584015]/80 lg:text-lg markdown-content">
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {data.facility || "No overview provided."}
                  </Markdown>
                </div>
              </div>

              <div className="text-start">
                <h3 className="text-3xl font-semibold text-[#584015]">Location</h3>
                <p className="mt-2 w-full text-[#584015]/80 lg:text-lg">{data.location}</p>
                {data.iframeSrc && (
                  <iframe
                    src={data.iframeSrc}
                    width="100%"
                    height="450"
                    style={{ marginTop: "20px", border: "1px solid rgba(117, 74, 0, 0.2)", borderRadius: "16px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 col-span-1 flex h-fit w-full flex-col gap-y-4 rounded-xl border border-[#754a00]/20 bg-[#ffeeca] p-6 lg:order-2 lg:col-span-2">
            <div className="-mt-1">
              <h3 className="text-2xl font-semibold text-[#584015]">Choices</h3>

              {/* General Button (only if generalImages exist) */}
              {data?.generalImages && data.generalImages.length > 0 && (
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => setRoomVariant("general")}
                    className={`flex w-full items-center justify-center gap-x-2 py-2 text-lg font-semibold duration-500 ease-out rounded-lg border-2 border-[#754a00]/20 ${roomVariant === "general" ? "bg-[#7c5424] text-[#ffeeca]" : "bg-transparent text-[#7c5424]"}`}
                  >
                    General
                  </button>
                </div>
              )}

              {/* Room Variant Buttons */}
              <div className="relative mt-2 flex w-full items-center justify-center gap-x-3 rounded-lg border-2 border-[#754a00]/20 bg-[#ffeeca] p-1">
                {/* Basic */}
                {data.roomVariant.some(variant => variant.type === "basic") && (
                  <button
                    type="button"
                    onClick={() => setRoomVariant("basic")}
                    className={`flex w-full items-center justify-center gap-x-2 rounded-md py-2 text-lg font-semibold duration-500 ease-out ${roomVariant === "basic" ? "bg-[#7c5424] text-[#ffeeca]" : "bg-transparent text-[#7c5424]"}`}
                  >
                    Basic <FaCircleDot className="text-base" />
                  </button>
                )}

                {/* Medium */}
                {hasMedium && (
                  <button
                    type="button"
                    onClick={() => setRoomVariant("medium")}
                    className={`flex w-full items-center justify-center gap-x-2 rounded-md py-2 text-lg font-semibold duration-500 ease-out ${roomVariant === "medium" ? "bg-[#7c5424] text-[#ffeeca]" : "bg-transparent text-[#7c5424]"}`}
                  >
                    Medium <FaCircleDot className="text-base" />
                  </button>
                )}

                {/* VIP */}
                {hasVIP && (
                  <button
                    type="button"
                    onClick={() => setRoomVariant("vip")}
                    className={`flex w-full items-center justify-center gap-x-2 rounded-md py-2 text-lg font-semibold duration-500 ease-out ${roomVariant === "vip" ? "bg-[#7c5424] text-[#ffeeca]" : "bg-transparent text-[#7c5424]"}`}
                  >
                    VIP <MdDiamond className="text-lg" />
                  </button>
                )}
              </div>
            </div>

            {/* PRICE */}
            {isGeneral ? null : (
              <>
                <div className="h-[1px] w-full bg-[#754a00]/20"></div>
                <div>
                  <h3 className="text-xl font-semibold text-[#584015]">Price</h3>
                  <span className="text-2xl font-semibold text-[#ad6e00]">
                    {variantData ? `Rp ${variantData.price.toLocaleString("id-ID")}` : "Not Available"}
                  </span>
                </div>

                <Link
                  href={`https://wa.me/6287786012862?text=Apakah%20kamar%20${data.name}%20${roomVariant}%20masih%20tersedia%3F`}
                  target="_blank"
                  className="mt-2 w-full rounded-md bg-[#7c5424] px-8 py-2.5 text-center font-medium text-white transition-all duration-300 hover:bg-[#63431d] lg:text-lg"
                >
                  Book Room Now
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}