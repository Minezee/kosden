"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const squareData = [
  {
    id: 1,
    src: "/images/rental/1. Kos DK Living.jpg",
  },
  {
    id: 2,
    src: "/images/rental/2. Kos Griya Artha Prima.jpg",
  },
  {
    id: 3,
    src: "/images/rental/3. Kos Maliqa.jpg",
  },
  {
    id: 4,
    src: "/images/rental/DK Living/kamar.jpg",
  },
  {
    id: 5,
    src: "/images/rental/DK Living/kamar3.jpg",
  },
  {
    id: 6,
    src: "/images/rental/DK Living/living.jpg",
  },
  {
    id: 7,
    src: "/images/rental/DK Living/living2.jpg",
  },
  {
    id: 8,
    src: "/images/rental/Maliqa/kamar3.jpg",
  },
  {
    id: 9,
    src: "/images/rental/Maliqa/kamar.jpg",
  },
  {
    id: 10,
    src: "/images/rental/DK Living/kamar2.jpg",
  },
  {
    id: 11,
    src: "/images/rental/DK Living/teras.jpg",
  },
  {
    id: 12,
    src: "/images/rental/Griya Artha Prima/kamar3.webp",
  },
  {
    id: 13,
    src: "/images/rental/Griya Artha Prima/kamar4.webp",
  },
  {
    id: 14,
    src: "/images/rental/Griya Artha Prima/kamar6.webp",
  },
  {
    id: 15,
    src: "/images/rental/Griya Artha Prima/kamar8.webp",
  },
  {
    id: 16,
    src: "/images/rental/Griya Artha Prima/living1.webp",
  },
];

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="relative h-full w-full overflow-hidden rounded-lg"
    >
      <Image
        src={sq?.src}
        alt={sq?.id + sq?.src}
        fill
        className="object-cover saturate-150"
        quality={100}
      />
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 4500);
  };

  return (
    <div className="order-1 grid h-[350px] w-full grid-cols-4 grid-rows-4 gap-1 sm:h-[450px] lg:order-2">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleGrid;
