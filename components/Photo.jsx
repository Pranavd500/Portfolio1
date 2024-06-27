"use client";
import { motion } from "framer-motion";
import { Asset } from "next/font/google";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full% h-full% relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/*image*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[10px] h-[8px] xl:w-[0px] xl:h-[0px] mix-blend-lighten "
        >
          <Image
            src="/assets/work/pranav2.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        {/*circle*/}
        <motion.svg
          className="w-[400px] xl:w-[356px] h-[400px] xl:h-[356px]"
          fill="transparent"
          viewBox="-50 -49 656 656"
          xmlns="http://www.w3.org/TR/SVG"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="300"
            stroke="#00ff99"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
