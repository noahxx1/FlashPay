import { arrowRight } from "../assets/icons";
import { featuersImg } from "../assets/images";
import AnimatedSection from "../components/AnimatedSection";

const Features = () => {
  return (
    <section>
      <div className="max-container flex flex-col items-center font-manrope">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-bold">Features</h1>
          <p className="text-3xl font-bold mb-12">
            Integrated payments for thriving businesses!
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center xl:gap-20">
          <AnimatedSection
            animationProps={{ x: [-200, 0], opacity: [0, 1] }}
            transitionProps={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            <div className="max-w-[500px]">
              <h1 className="text-2xl font-bold mb-4">
                Audit financial performance easily and simple, with an intuitive
                dashboard.
              </h1>
              <p className="text-sm text-gray-500 mb-5 xl:mb-20">
                Grow your business by providing 38+ payment methods such as
                credit cards, e-wallets, and direct debit with just one easy.
              </p>
              <button className="self-start flex flex-row gap-1 items-center mb-5 xl:mb-14 font-bold">
                Learn More
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </AnimatedSection>
          <AnimatedSection
            animationProps={{ x: [200, 0], opacity: [0, 1] }}
            transitionProps={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            <img
              src={featuersImg}
              alt=""
              className="sm:w-[400px] xl:w-[500px] xl:mt-0"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Features;
