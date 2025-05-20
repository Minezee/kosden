import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  navigation: [
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
  ],
  rentalPlace: [
    {
      label: "DK Living",
      href: "/dk-living",
    },
    {
      label: "Griya Artha Prima",
      href: "/griya-artha-prima",
    },
    {
      label: "Maliqa",
      href: "/maliqa",
    },
  ],
  socialMedia: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/kosden_management/?hl=id",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/6287786012862",
    },
    {
      label: "Gmail",
      href: "mailto:kosdenmanagement@gmail.com",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@kosdenmanagement",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="h-full w-full pb-4 pt-20 lg:pb-10 lg:pt-32">
      <div className="custom__container">
        <div className="flex h-auto w-full flex-col gap-y-8 rounded-2xl bg-[#241503] px-8 py-10 lg:gap-y-10 lg:px-16 lg:py-20">
          <div className="flex w-full flex-col justify-between gap-y-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#ffeeca] lg:text-5xl">
                Ready to Stay with Us?
              </h2>
              <p className="mt-2 max-w-[700px] text-base text-[#d4cab4] lg:text-lg">
                Thank you for choosing KOSDEN - Your home away from home!
              </p>
            </div>
            <Link
              href={"/kost/"}
              className="group flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#ffeeca] duration-500 ease-in-out hover:scale-105 lg:h-36 lg:w-36"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right aspect-square h-8 w-8 rotate-[-45deg] text-[#241503] duration-300 ease-in-out group-hover:rotate-0 lg:h-[60px] lg:w-[60px]"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="h-[1.5px] w-full bg-[#ffeeca]/40"></div>
          <div className="flex w-full flex-col justify-between gap-y-6 lg:flex-row">
            <div>
              <Link href="https://wa.me" className="flex-shrink-0">
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
                    <span className="text-[#ffeeca]">KOS</span>
                    <span className="bg-gradient-to-r from-[#9F6446] to-[#dd8458] bg-clip-text text-transparent">
                      DEN
                    </span>
                  </div>
                </div>
              </Link>
              <p className="mt-2 max-w-[350px] text-[15px] text-[#d4cab4]">
                Kosden, penyedia kos - kosan di kota Malang yang nyaman
                dan terjangkau.
              </p>

              <span className="mt-3 inline-block text-sm text-[#9c9687]">
                © 2024 Kosden
              </span>
            </div>

            <nav className="grid grid-cols-2 gap-y-4 lg:flex lg:justify-end lg:gap-x-16 xl:gap-x-20">
              <div>
                <h4 className="font-medium text-[#ffeeca]">Quick Link</h4>
                <ul>
                  {footerLinks.navigation.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link?.href}
                        className="my-1 block text-[15px] text-[#d4cab4]"
                      >
                        {link?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#ffeeca]">Rental Place</h4>
                <ul>
                  {footerLinks.rentalPlace.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link?.href}
                        className="my-1 block text-[15px] text-[#d4cab4]"
                      >
                        {link?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#ffeeca]">Social Media</h4>
                <ul>
                  {footerLinks.socialMedia.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link?.href}
                        target="_blank"
                        className="my-1 block text-[15px] text-[#d4cab4]"
                      >
                        {link?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
