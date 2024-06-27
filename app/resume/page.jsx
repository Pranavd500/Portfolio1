"use client";
import { icons } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Pranav Desai",
    },
    {
      fieldName: "Phone No",
      fieldValue: "Pranav Desai",
    },
    {
      fieldName: "Experience",
      fieldValue: "Pranav Desai",
    },
    {
      fieldName: "Skype",
      fieldValue: "Pranav Desai",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pranav Desai",
    },
    {
      fieldName: "Email",
      fieldValue: "Pranav Desai",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "language",
      fieldValue: "Available",
    },
  ],
};

const experience = {
  icon: "/assests/resume",
  title: "my experience",
  description: "Lorem ipsum dolor sit",
  items: [
    {
      company: "tech Solution inc.",
      position: "tech Solution inc.",
      duration: "tech Solution inc.",
    },
    {
      company: "Web design Studio",
      position: "tech Solution inc.",
      duration: "tech Solution inc.",
    },
    {
      company: "Ecommerce Startup",
      position: "tech Solution inc.",
      duration: "tech Solution inc.",
    },
    {
      company: "tech Solution inc.",
      position: "tech Solution inc.",
      duration: "tech Solution inc.",
    },
    {
      company: "tech Solution inc.",
      position: "tech Solution inc.",
      duration: "tech Solution inc.",
    },
  ],
};
const education = {
  icon: "/assests/resume",
  title: "my education",
  description: "Lorem ipsum dolor sit",
  items: [
    {
      institution: "tech Solution inc.",
      degree: "tech Solution inc.",
      duration: "tech Solution inc.",
    },
    {
      institution: "tech Solution inc.",
      degree: "tech Solution inc.",
      duration: "tech Solution inc.",
    },
    {
      institution: "tech Solution inc.",
      degree: "tech Solution inc.",
      duration: "tech Solution inc.",
    },
  ],
};

const skill = {
  title: "My Skills",
  description: "Lorem Ipsum",
  skillList: [
    {
      icon: <FaCss3 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaJs />,
      name: "html 5",
    },
    {
      icon: <FaReact />,
      name: "html 5",
    },
    {
      icon: <SiNextdotjs />,
      name: "html 5",
    },
    {
      icon: <SiTailwindcss />,
      name: "html 5",
    },
    {
      icon: <FaFigma />,
      name: "html 5",
    },
    {
      icon: <FaNodeJs />,
      name: "html 5",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
/*import { TabsTrigger } from "@radix-ui/react-tabs";*/
const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="containner mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap=[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="education">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me1</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skill" className="w-full">
              {/**/}
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              {/**/}
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
