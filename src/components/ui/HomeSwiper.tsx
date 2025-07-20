"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { rentalPlaceDetails } from '@/utils/data/rentalPlaceDetails';
import { RentalDataType } from '@/utils/type/rentalDataType';

const rentalPlaces = Object.entries(rentalPlaceDetails).map(([slug, data]) => ({
    slug,
    ...data
}));

const HomeSwiper = ({ rentalDatas }: { rentalDatas: RentalDataType[] }) => {
    return (
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
                {rentalDatas?.map((info, index) => (
                    <SwiperSlide key={info?.name + index}>
                        <Link
                            href={`/rental/${info?.slug}`}
                            className="group relative col-span-1 flex h-[320px] w-full cursor-pointer flex-col gap-y-4 overflow-hidden rounded-xl bg-[#ffeeca] p-7 sm:h-[460px]"
                        >
                            <Image
                                src={info.generalImages ? info?.generalImages[0].formats?.medium?.url : info?.roomVariant[0].heroImage?.formats?.medium?.url}
                                alt="Logo"
                                fill
                                quality={80}
                                className="object-cover saturate-150 duration-500 ease-in-out group-hover:rotate-2 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 h-auto w-full p-1 lg:p-3 duration-500 ease-in-out">
                                <div className="flex h-full w-full flex-col justify-end gap-y-5 rounded-lg bg-[#241503]/80 p-3 pb-6 lg:p-4">
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
    )
}

export default HomeSwiper