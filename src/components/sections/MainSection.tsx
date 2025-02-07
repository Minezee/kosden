import Image from "next/image";
import ShuffleGrid from "../ui/ShuffleGrid";

export default function MainSection() {
  return (
    <section id="home" className="w-full scroll-mt-20 py-12 lg:py-16">
      <div className="custom__container">
        <main className="relative flex h-auto w-full flex-col items-center justify-between gap-y-14 lg:flex-row">
          <div className="order-2 -mt-4 flex w-full flex-col items-center text-center lg:order-1 lg:items-start lg:text-start">
            <div className="relative aspect-square w-[45px] lg:w-[72px]">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="animate__swing saturate-200"
              />
            </div>
            <h1 className="text-5xl font-bold text-black/80 lg:text-[68px] lg:leading-[68px]">
              WELCOME TO{" "}
              <span className="bg-gradient-to-r from-[#754a00] to-[#db8a00] bg-clip-text text-transparent">
                KOSDEN
              </span>
            </h1>
            <p className="mt-2 text-black/70 lg:max-w-[500px] lg:text-lg">
              Tempat tinggal nyaman dan modern yang siap menemani keseharian
              Anda dan terletak di kota Malang
            </p>
            <a
              href="#about"
              className="mt-5 w-fit rounded-md bg-[#db8a00] px-8 py-2.5 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none lg:text-lg"
            >
              Explore
            </a>
          </div>

          <ShuffleGrid />
        </main>
      </div>
    </section>
  );
}
