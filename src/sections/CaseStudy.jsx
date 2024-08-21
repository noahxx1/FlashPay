import { vedio } from "../assets/icons";
import { person } from "../assets/images";
import AnimatedSection from "../components/AnimatedSection";
import { statistics } from "../constants";

const CaseStudy = () => {
  return (
    <section className="max-container flex flex-col xl:flex-row xl:justify-between justify-start items-center p-4 xl:p-8">
      <AnimatedSection
        animationProps={{ x: [-200, 0], opacity: [0, 1] }}
        transitionProps={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      >
        <div className="flex flex-col font-manrope mb-8 xl:mb-0">
          <img
            src={person}
            alt="img"
            className="w-full max-w-[300px] xl:max-w-[400px]  object-cover"
          />
          <h1 className="bg-white p-3 font-bold text-xl">John Cabbagonh</h1>
          <div className="bg-white flex items-center gap-2 xl:gap-4 pl-3 text-xs xl:text-sm text-gray-500 pb-3">
            <p>Senior Financial Manager, Uber</p>
            <img src={vedio} alt="icon" className="w-4 h-4 xl:w-6 xl:h-6" />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection
        animationProps={{ x: [200, 0], opacity: [0, 1] }}
        transitionProps={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      >
        <div className="flex flex-col gap-6 xl:gap-12 max-w-full xl:max-w-[550px] font-manrope items-center xl:items-start p-4">
          <p className="font-bold bg-white w-fit p-2 rounded text-sm xl:text-base">
            Case Study
          </p>
          <h1 className="text-2xl xl:text-4xl leading-snug xl:leading-[50px] font-bold">
            Uber succeeded in increasing financial operational efficiency using
            solutions from Dimond.
          </h1>
          <p className="text-gray-600 text-sm xl:text-base">
            “No longer needing 5 people to verify fund income from VCC, Uber now
            only needs a maximum of 1 employee to carry out this process.”
          </p>
          <button className="bg-black w-fit text-white p-2 xl:p-3 self-center rounded font-palanquin text-sm xl:text-base">
            Read Case Study
          </button>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 items-center xl:items-start">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white px-4 py-2 flex flex-col items-center justify-center text-center rounded-xl w-fit"
              >
                <p className="font-bold text-xl xl:text-[20px]">{stat.value}</p>
                <h1 className="text-gray-500 text-[10px] mt-1 ">
                  {stat.label}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CaseStudy;
