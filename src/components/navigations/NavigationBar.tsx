"use client";

// Hooks & Libraries
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// Components
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Location",
    href: "/#location",
  },
  {
    label: "Contact Us",
    href: "/#contactUs",
  },
];

export default function NavigationBar() {
  // Mobile Configuration 📱
  const [showMobileNavigation, setShowMobileNavigation] =
    useState<boolean>(true);
  const openMobileNavigation = () => {
    setShowMobileNavigation((prev) => !prev);
    document.documentElement.style.overflowY = "hidden";
  };
  const closeMobileNavigation = () => {
    setShowMobileNavigation((prev) => !prev);
    document.documentElement.style.overflowY = "auto";
  };

  return (
    <>
      <header
        className={`sticky left-0 top-0 z-[300] w-full bg-[#fff4dd]/80 py-4 backdrop-blur-md`}
      >
        <nav className="custom__container mx-auto flex items-center justify-between gap-x-8 py-2">
          <div className="flex w-fit items-center gap-x-10">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex w-fit items-center gap-x-2">
                <div className="relative aspect-square w-[30px] lg:w-[42px]">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="saturate-200"
                  />
                </div>
                <div className="text-nowrap text-2xl font-bold lg:text-[28px]">
                  <span className="text-black/80">KOS</span>
                  <span className="bg-gradient-to-r from-[#9F6446] to-[#dd8458] bg-clip-text text-transparent">
                    DEN
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <nav>
            <ul className="hidden items-center gap-x-10 lg:flex">
              {navLinks.map((link, index) => (
                <li key={index} className="group">
                  <a
                    href={link?.href}
                    className="text-lg underline decoration-[#ffab16]/0 decoration-2 underline-offset-4 duration-300 group-hover:decoration-[#ffab16]"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Button */}
          <button onClick={openMobileNavigation} className="block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bar-chart h-[24px] w-[24px] rotate-90 scale-y-[-1] text-[#8c6001]"
            >
              <line x1="12" x2="12" y1="20" y2="10" />
              <line x1="18" x2="18" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile */}
      <AnimatePresence>
        {showMobileNavigation && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed right-0 top-0 z-[300] block h-full w-full bg-[#0d0e18]/70 lg:hidden"
            ></motion.div>
            <motion.div
              className="fixed right-0 top-0 z-[300] flex h-full w-[80%] flex-col items-start justify-start bg-[#fff4dd] px-4 py-4 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0, x: "100%" }}
              animate={{
                opacity: 1,
                x: "0%",
                transition: {
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  mass: 0.8,
                },
              }}
              exit={{
                opacity: 0,
                x: "100%",
                transition: {
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  mass: 0.8,
                },
              }}
              transition={{ delay: 500 }}
            >
              <div className="mb-5 flex w-full items-center justify-between border-b border-[#8c6001]/80 pb-[18px] pt-2">
                <button onClick={closeMobileNavigation} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x text-[#8c6001]"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>

                <div className="relative aspect-square w-8">
                  <Image src="/logo.png" alt="Logo" fill />
                </div>
              </div>

              <nav className="w-full">
                <ul className="flex flex-col gap-y-1">
                  {navLinks.map((link, index) => (
                    <li key={index} className="group">
                      <a
                        href={link?.href}
                        onClick={closeMobileNavigation}
                        className="flex w-full items-center justify-center py-4 text-lg underline decoration-[#ffab16]/0 decoration-2 underline-offset-4 duration-300 group-hover:decoration-[#ffab16]"
                      >
                        {link?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
