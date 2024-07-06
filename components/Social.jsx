import { icons } from "lucide-react";
import Link from "next/link";
import { FaLinkedinIn, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/Pranavd500" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/pranav-desai-76bb67226/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.notion.so/pranavdesai/Hi-I-m-Pranav-Desai-ff08727c12db4430afaec69e6bbb6f83",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/pranav_d500/" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
