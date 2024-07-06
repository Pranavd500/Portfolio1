import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats1 from "@/components/Stats1";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer </span>
            <h1 className="h1 mb-6">
              Hello I,m <br />
              <span className="text-accent">Pranav Desai</span>
            </h1>
            <p className="max-w-[800px] mb-9 text-white/80">
              a passionate software developer solving real-world problems. As a
              cybersecurity enthusiast, I stay ahead of trends to ensure secure
              software solutions. I’m also a creative UI designer focused on
              user-friendly projects and enjoy brainstorming new startup ideas.
            </p>
            <div className="Button-accent flex flex-col xl:flex-row items-center gap-8">
              <Button className="btn-outline lg uppercase flex items-center gap-2 hover:bg-accent hover:text-primary">
                <a
                  as="a"
                  href="https://drive.google.com/file/d/15cMFTtOnsMyz1g67kuQrg9KIEPE4QiKj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  <span>My Resume</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats1 />
    </section>
  );
};

export default Home;
