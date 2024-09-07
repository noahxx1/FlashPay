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
          <div
            className={`flex flex-col sm:flex-row gap-2 sm:gap-4 items-center mt-10 justify-center xl:justify-end mb-12 `}
          >
            <p
              className={`font-cairo three font-bold text-center sm:text-left text-lg  sm:text-base order-2`}
            >
              تعريف عن التطبيق
            </p>
          </div>
          <h1
            className={`text-2xl sm:text-4xl xl:text-4xl mt-4 sm:mt-6 leading-snug sm:leading-[50px] xl:leading-[50px] text-center xl:text-right font-cairo `}
          >
            هو تطبيق إلكتروني لتنظيم عملية بيع الوحدات الخليوية ويعتمد على
            الوساطة بين شركات الخليوي والإنترنت
          </h1>
          <p
            className={`mt-4 sm:mt-6 text-gray-500 text-center xl:text-right text-base sm:text-lg font-cairo`}
          >
            يقدم خدمة سريعة للسادة أصحاب محلات الخليوي والموزعين ونقاط البيع
            المهتمة بهذه الخدمات المذكورة بشكل سريع ودقيق عملياً وحسابياً
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-6 justify-center xl:justify-end items-center font-palanquin`}
          >
            <button className="bg-black text-white px-6 py-3 rounded w-fit sm:w-auto text-center font-cairo mt-12">
              <a
                className="no-underline"
                href="https://focustradingco.sy/applications/Flash%20Pay.apk"
              >
                تحميل التطبيق
              </a>
            </button>
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
