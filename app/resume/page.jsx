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
      fieldValue: "9923085110",
    },
    {
      fieldName: "Degree",
      fieldValue: "Btech",
    },
    {
      fieldName: "College Name",
      fieldValue: "Web development",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "pranavdesai1273@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "language",
      fieldValue: "English,Hindi,Marathi",
    },
  ],
};

const experience = {
  icon: "/assests/resume",
  title: "my experience",
  description: "Experience Details:",
  items: [
    {
      company: "Codsoft",
      position: "Web Developer.",
      duration: "1 Month.",
    },
    {
      company: "technoTrench",
      position: "Founder.",
      duration: "2024.",
    },
    {
      company: "Otakuspot",
      position: "Graphic Designer lead.",
      duration: "1 year",
    },
  ],
};
const education = {
  icon: "/assests/resume",
  title: "my education",
  description: "Education Details:",
  items: [
    {
      institution: "Manipal Institute Of Technology",
      degree: "Btech Computer Science (Cyber Security)",
      duration: "4 years",
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "12th",
      duration: "1 year",
    },
    {
      institution: "Jayawant public school",
      degree: "10th",
      duration: "1 year",
    },
  ],
};

const skill = {
  title: "My Skills",
  description: "skills that I can work on...",
  skillList: [
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Nextjs",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Nodejs",
    },
  ],
};
const BucketList = {
  title: "My Bucket List",
  description:
    "These are the things I want to accomplish.(Green Box depicts as completed",
  fieldNumber: "My BucketList",
  fieldValue: [
    { description: "Learn Electric Guitar", name: "1", completed: false },
    { description: "Everest Base Camp", name: "2", completed: false },
    { description: "Learn Japanese", name: "3", completed: false },
    { description: "Start a Startup", name: "4", completed: true },
    {
      description: "Earn money through freelancing as side income",
      name: "5",
      completed: false,
    },
    {
      description: "Become a content Creator Like gawx",
      name: "6",
      completed: false,
    },
    {
      description: "Get a motor bike racing track license",
      name: "7",
      completed: false,
    },
    { description: "Go Fishing", name: "8", completed: false },
    { description: "Learn how to drive a car", name: "9", completed: false },
    { description: "Visit 10 countries", name: "10", completed: false },
    { description: "Ladakh Bike trip", name: "11", completed: false },
    {
      description: "Get the physique that I want",
      name: "12",
      completed: false,
    },
    {
      description: "Build and live in your dream home",
      name: "13",
      completed: false,
    },
    { description: "Learn to how to skateboard", name: "14", completed: false },
    { description: "learn graphic designing", name: "15", completed: true },
    { description: "Skydive from a plane", name: "16", completed: false },
    { description: "Learn to ride a horse", name: "17", completed: false },
    { description: "Learn to rock climb", name: "18", completed: false },
    { description: "Learn to do a handstand", name: "19", completed: false },
    {
      description: "Explore the Amazon Rainforest",
      name: "20",
      completed: false,
    },
    { description: "Hike to Machu Picchu", name: "21", completed: false },
    {
      description: "Take a hot air balloon ride",
      name: "22",
      completed: false,
    },
    { description: "Visit Tokyo,Japan", name: "23", completed: false },
    { description: "Adopt a Pet", name: "24", completed: false },
    {
      description: "Take a sunrise or sunset hike",
      name: "25",
      completed: true,
    },
    {
      description:
        "Learn to paint, draw, or express your creativity through art",
      name: "26",
      completed: true,
    },
    {
      description: "Achieve financial stability and independence",
      name: "27",
      completed: false,
    },
    {
      description:
        "ry outdoor cooking and prepare meals over a campfire or grill",
      name: "28",
      completed: false,
    },
    {
      description: "Loads of coding",
      name: "29",
      completed: false,
    },
    {
      description: "Want to be funny ofc(plz)",
      name: "30",
      completed: false,
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
      className="min-h-[60vh] flex items-center justify-center py-12 xl:py-10"
    >
      <div className="containner mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap=[10px]"
        >
          <TabsList className="flex flex-col w-full max-w-[160px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="BucketList">BucketList</TabsTrigger>
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
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[360px] min-h-[80px] text-center lg:text-left">
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
            <TabsContent value="skill" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skill.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skill.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skill.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              {/**/}
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-1xl font-extrabold">{about.title}</h3>
                <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldValue}</span>
                        <span className="text-xl">{item.fieldName}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="BucketList" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{BucketList.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {BucketList.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-col gap-[15px]">
                    {BucketList.fieldValue.map((item, index) => (
                      <li
                        key={index}
                        className={`bg-[#232329] py-4 px-6 rounded-xl flex justify-between items-center ${
                          item.completed ? "bg-accent text-white" : ""
                        }`}
                      >
                        <span
                          className={`text-lg ${
                            item.completed ? "text-white" : "text-accent"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span
                          className={`ml-4 text-white/60 ${
                            item.completed ? "text-white" : ""
                          }`}
                        >
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
