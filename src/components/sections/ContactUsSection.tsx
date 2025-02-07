"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiTiktokLogo } from "react-icons/pi";

const socialMediaLinks = [
  {
    icon: <FaInstagram size={40} color={"#754a00"} />,
    link: "https://www.instagram.com/kostden/",
  },
  {
    icon: <FaWhatsapp size={40} color={"#754a00"} />,
    link: "https://www.instagram.com/kostden/",
  },
  {
    icon: <MdOutlineMailOutline size={40} color={"#754a00"} />,
    link: "https://www.instagram.com/kostden/",
  },
  {
    icon: <PiTiktokLogo size={40} color={"#754a00"} strokeWidth={1.5} />,
    link: "https://www.instagram.com/kostden/",
  },
];

const rentalPlaceLocations = [
  {
    name: "DK Living",
    googleMapURL:
      "https://maps.app.goo.gl/vwMV9xhtP3ACKiN56?g_st=com.google.maps.preview.copy",
  },
  {
    name: "Griya Artha Prima",
    googleMapURL:
      "https://maps.app.goo.gl/EVcUeFF5xRxJV96Z6?g_st=com.google.maps.preview.copy",
  },
  {
    name: "Maliqa",
    googleMapURL:
      "https://maps.app.goo.gl/CYrfp3RTRZ3RJGA19?g_st=com.google.maps.preview.copy",
  },
];

export default function ContactUsSection() {
  return (
    <section id="contactUs" className="w-full scroll-mt-16 py-16 lg:py-20">
      <div className="custom__container">
        <div className="relative flex h-auto w-full flex-col items-center justify-between gap-y-10 lg:gap-y-14">
          {/* Headers */}
          <div className="flex w-full flex-col items-center justify-center gap-y-6">
            <div className="w-full">
              <h2 className="text-center text-4xl font-bold text-black/80 lg:text-5xl lg:leading-[52px]">
                Our Contact Information
              </h2>
              <span className="mx-auto mt-2 block h-2 w-32 bg-gradient-to-r from-[#754a00] to-[#db8a00]"></span>
            </div>
            <p className="w-full max-w-[500px] text-center text-black/70 lg:text-[17px]">
              Kosden Siap Membantu Anda Menemukan Hunian yang Sesuai dengan
              Kebutuhan dan Kenyamanan Anda.
            </p>
          </div>

          {/* Content */}
          <div className="mx-auto flex h-auto w-full max-w-[850px] flex-col gap-y-4">
            <div className="grid h-auto w-full grid-cols-2 gap-4 md:h-[300px] md:grid-cols-4 md:grid-rows-2">
              <div className="col-span-2 flex h-full w-full flex-col gap-y-4 rounded-xl border border-[#754a00]/20 bg-[#ffeeca] p-7 shadow-none transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0px_#8c6001] md:row-span-2">
                <div className="relative aspect-square w-[36px] lg:w-[42px]">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="animate__swing saturate-200"
                  />
                </div>
                <h2 className="text-3xl font-semibold text-black/80">
                  Hi, Kami adalah Kosden. Penyedia Kos - kosan di Kota Malang.
                </h2>
                <div className="mt-auto flex w-fit cursor-pointer items-center gap-x-1 border-b border-transparent duration-300 hover:border-[#754a00]">
                  <Link href={"https://wa.me"} className="text-[#754a00]">
                    Hubungi Kami
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right aspect-square h-[18px] w-[18px] text-[#754a00]"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
              {socialMediaLinks.map((item, index) => (
                <div
                  key={index}
                  onClick={() => window.open(item?.link, "_blank")}
                  className="col-span-1 row-span-1 flex h-full w-full cursor-pointer items-center justify-center rounded-xl border border-[#754a00]/20 bg-[#ffeeca] p-7 shadow-none transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0px_#8c6001]"
                >
                  {item.icon}
                </div>
              ))}
            </div>
            <div className="grid w-full grid-cols-1 grid-rows-1">
              <div className="col-span-1 row-span-1 flex h-full w-full items-center justify-center rounded-xl border border-[#754a00]/20 bg-[#ffeeca] p-7 shadow-none transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0px_#8c6001]">
                <p className="text-lg sm:text-xl">
                  Selamat datang di KOSDEN, hunian nyaman dan aman di kota
                  Malang! Terletak strategis dekat berbagai Universitas ternama
                  seperti{" "}
                  <span className="font-medium text-[#ad6e00]">
                    Universitas Brawijaya
                  </span>
                  ,{" "}
                  <span className="font-medium text-[#ad6e00]">
                    Universitas Negeri Malang
                  </span>
                  , dan{" "}
                  <span className="font-medium text-[#ad6e00]">
                    Politeknik Negeri Malang
                  </span>
                  , KOSDEN adalah pilihan tepat untuk Anda yang menginginkan
                  lingkungan belajar yang mendukung dengan fasilitas lengkap.
                  Mari bergabung dan nikmati kemudahan hidup di KOSDEN!
                </p>
                {/* <span className="text-[#754a00]"></span> */}
              </div>
            </div>
            <div className="grid w-full grid-rows-1 gap-4 md:grid-cols-3">
              {rentalPlaceLocations.map((place, index) => (
                <div
                  key={index}
                  onClick={() => window.open(place?.googleMapURL, "_blank")}
                  className="col-span-1 row-span-1 flex h-full w-full cursor-pointer flex-col items-center justify-center gap-y-1 rounded-xl border border-[#754a00]/20 bg-[#ffeeca] p-7 shadow-none transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0px_#8c6001]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin h-[38px] w-[38px] text-[#754a00]"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-[#754a00]">{place?.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
