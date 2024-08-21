import { lock } from "../assets/icons";
import { heroImg } from "../assets/images";
import { info } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home">
      <div className="max-container flex flex-col-reverse xl:flex-row justify-between items-center w-full mt-10 sm:mt-20 px-4 sm:px-8 font-manrope">
        <motion.div
          animate={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="max-w-full xl:max-w-[600px]"
        >
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center mt-10 justify-center xl:justify-start">
            <p className=" font-manrope text-center sm:text-left text-lg sm:text-base ">
              Safe and reliable financial services
            </p>
            <img src={lock} alt="lock" className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl mt-4 sm:mt-6 leading-snug sm:leading-[50px] xl:leading-[65px] text-center xl:text-left">
            The largest digital payment solution in Indonesia.
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-500 text-center xl:text-left text-base sm:text-lg">
            Financial services for payments and reliable payees for startup
            businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center xl:justify-start items-center font-palanquin">
            <button className="bg-black text-white px-6 py-3 rounded w-fit sm:w-auto text-center">
              Get Started Now
            </button>
            <button className="bg-slate-200 px-6 py-3 rounded w-fit sm:w-auto text-center">
              View Live Demo
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mt-6 text-sm items-center xl:items-start font-palanquin xl:justify-start justify-center">
            {info.map((information, index) => (
              <div
                key={index}
                className="flex gap-2 items-center text-center sm:text-left"
              >
                <img
                  src={information.img}
                  alt="img"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <p className=" sm:text-sm">{information.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.img
          animate={{ y: [-200, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: 1 }}
          src={heroImg}
          alt="img"
          className="w-full sm:w-[400px] xl:w-[500px] mt-6 xl:mt-0 max-w-xs sm:max-w-none"
        />
      </div>
    </section>
  );
};

export default Hero;
