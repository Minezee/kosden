"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCircleDot } from "react-icons/fa6";
import { MdDiamond } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const rentalPlaceDetails = {
  "dk-living": {
    name: "DK Living",
    address: "Jalan Soekarno Hatta Indah V no.7B",
    heroImage: "/images/rental/1. Kos DK Living.jpg",
    googleMapURL:
      "https://maps.app.goo.gl/vwMV9xhtP3ACKiN56?g_st=com.google.maps.preview.copy",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.567996940178!2d112.62905200000002!3d-7.940104199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629004b1682c3%3A0xd3da99b14fbc5da0!2sKos%20DK%20Living!5e0!3m2!1sid!2sid!4v1723539731492!5m2!1sid!2sid",
    roomVariant: {
      basic: {
        price: 1750000,
        images: [],
      },
      premium: {
        price: 1900000,
        images: [],
      },
    },
  },
  "griya-artha-prima": {
    name: "Griya Artha Prima",
    address: "Jalan Candi Mendut Barat Blok C no.16",
    heroImage: "/images/rental/2. Kos Griya Artha Prima.jpg",
    googleMapURL:
      "https://maps.app.goo.gl/EVcUeFF5xRxJV96Z6?g_st=com.google.maps.preview.copy",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.57589782013!2d112.62708239999999!3d-7.939282800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629004d8bf979%3A0x37866423df988c0c!2sKos%20Griya%20Artha%20Prima%20Malang!5e0!3m2!1sid!2sid!4v1723540243392!5m2!1sid!2sid",
    roomVariant: {
      basic: {
        price: 1800000,
        images: [],
      },
      premium: {
        price: 2200000,
        images: [],
      },
    },
  },
  maliqa: {
    name: "Maliqa",
    address: "Jalan Candi Mendut Selatan III no.18",
    heroImage: "/images/rental/3. Kos Maliqa.jpg",
    googleMapURL:
      "https://maps.app.goo.gl/CYrfp3RTRZ3RJGA19?g_st=com.google.maps.preview.copy",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.522584325976!2d112.6344144!3d-7.944823800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6290070dc6c6f%3A0xdd1944dfc2772cd5!2sKos%20Maliqa%20Malang!5e0!3m2!1sid!2sid!4v1723540300394!5m2!1sid!2sid",
    roomVariant: {
      basic: {
        price: 1500000,
        images: [],
      },
      premium: {
        price: 1650000,
        images: [],
      },
    },
  },
};

export default function RentalDetailHeroSection({
  rentalPlaceName,
}: {
  rentalPlaceName: "dk-living" | "griya-artha-prima" | "maliqa";
}) {
  const [roomVariant, setRoomVariant] = useState<"basic" | "premium">("basic");

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
            <div className="relative mt-8 aspect-square h-[450px] w-full overflow-hidden rounded-xl">
              <Image
                src={rentalPlaceDetails[rentalPlaceName]["heroImage"]}
                alt={rentalPlaceDetails[rentalPlaceName]["name"]}
                fill
                className="object-cover saturate-200"
                quality={100}
              />
            </div>

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
                ]["price"].toLocaleString()}
              </span>
            </div>
            <Link
              href={"#"}
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
