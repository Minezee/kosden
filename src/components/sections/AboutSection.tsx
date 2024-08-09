import Image from "next/image";

const aboutUsInfo = [
  {
    label: "Kos ",
    icon: "",
    description: "",
  },
  {
    label: "Mission",
    icon: "",
    description: "",
  },
  {
    label: "Why Us",
    icon: "",
    description: "",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 lg:py-20">
      <div className="custom__container">
        <div className="relative flex h-auto w-full flex-col items-center justify-between gap-y-10 lg:gap-y-14">
          {/* Headers */}
          <div className="flex w-full flex-col items-start justify-between gap-y-6 lg:flex-row lg:items-center">
            <div className="w-full max-w-[450px]">
              <h2 className="text-4xl font-bold text-black/80 lg:text-5xl lg:leading-[52px]">
                Your Trusted Rental Room Provider
              </h2>
              <span className="mt-2 block h-2 w-24 bg-gradient-to-r from-[#754a00] to-[#db8a00]"></span>
            </div>
            <p className="w-full max-w-[400px] text-black/70 lg:text-[17px]">
              Kenali lebih jauh tentang visi, misi, dan mengapa kami menjadi
              pilihan terbaik untuk kebutuhan hunian kos Anda.
            </p>
          </div>

          {/* Content */}
          <div className="grid w-full grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
            {aboutUsInfo?.map((info, index) => (
              <div
                className="col-span-1 flex h-auto w-full flex-col gap-y-4 rounded-xl bg-[#ffeeca] p-7 shadow-none transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0px_#8c6001]"
                key={info?.label + index}
              >
                <div className="relative aspect-square w-[42px] lg:w-[54px]">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="saturate-200"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black/80">
                    {info?.label}
                  </h3>
                  {/* <p className="text-black/60">{info?.description}</p> */}
                  <p className="text-black/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum cum molestias facilis inventore, ipsam
                    necessitatibus suscipit ad earum eius consequuntur?
                    Explicabo veritatis iure possimus vel.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
