"use client";
import { Section } from "lucide-react";
import CountUp from "react-countup";

const stats1 = [
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: 120,
    text: "Projects Completed",
  },
  {
    num: 80,
    text: "Technologies mastered",
  },
  {
    num: 20,
    text: "Code Commits",
  },
];
const Stats1 = () => {
  return (
    <Section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats1.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className="">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
export default Stats1;
