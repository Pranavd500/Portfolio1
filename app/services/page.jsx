"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { MotionConfig, delay } from "framer-motion";
import { motion } from "framer-motion";

const Services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "👋 Hi, I'm Pranav Desai, a web developer with 4+ years of experience. I specialize in building secure, user-friendly websites and web applications. Let's work together to bring your web projects to life!",
    href: "https://github.com/Pranavd500",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "👋 Hi, I'm Pranav Desai, a UI/UX designer with 2+ years of expertise in crafting intuitive digital experiences. Let's collaborate to create user-centric designs that captivate and engage!",
    href: "https://www.notion.so/pranavdesai/Hi-I-m-Pranav-Desai-ff08727c12db4430afaec69e6bbb6f83",
  },
  {
    num: "03",
    title: "Graphic Designer",
    description:
      "👋 Hi, I'm Pranav Desai, a graphic designer with 2+ years of experience in visual storytelling and brand design. Let's collaborate to create captivating visuals that elevate your brand!",
    href: "https://www.behance.net/pranavdesai4",
  },
  {
    num: "04",
    title: "Tradional Art Artist",
    description:
      "👋 Hi, I'm Pranav Desai, a skilled traditional artist adept at portraits, sketches, and character design. Let's create expressive and personalized artwork together!",
    href: "https://www.instagram.com/pranav_d500/",
  },
];

const services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {Services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-between items-center"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <a
                    href={service.href}
                    className="w-[70px] rounded-full bg-white flex justify-center items-center hover:bg-accent transition-all duration-500"
                  >
                    <Link
                      href={service.href}
                      className="w-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                      style={{ backgroundColor: "white" }} // Add this line if necessary
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </a>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default services;
