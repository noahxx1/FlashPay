import { arrowRight, face, plus, wallet } from "../assets/icons";
import AnimatedSection from "../components/AnimatedSection";
import { drives, logos } from "../constants";

const Interagation = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-6 font-manrope max-container">
        <h1 className="font-bold">Interagation</h1>
        <p className="text-3xl font-bold">
          Leave behind complexity, increse success!
        </p>
        <p className="max-w-[400px] text-gray-500 text-center mb-4">
          Focus your attention on developing your business, and let us work on
          your digital payment needs.
        </p>
        <div className="flex gap-20 flex-col xl:flex-row justify-between">
          <AnimatedSection
            animationProps={{ x: [-200, 0], opacity: [0, 1] }}
            transitionProps={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            <div className="bg-[#DCE6EA] p-6 rounded flex flex-col max-w-[600px] border-2 border-gray-300">
              <h1 className="text-2xl font-bold mb-5">
                Provides peace of mind by providing modern security!
              </h1>
              <p className="text-sm text-gray-500 mb-7">
                You can foucs on growing your business while we monitor and
                ensure the security of your transactions.
              </p>
              <button className="self-start flex flex-row gap-1 items-center mb-7 font-bold">
                Learn More
                <img src={arrowRight} alt="" />
              </button>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 justify-center font-bold text-sm bg-white w-fit p-3 border-2 border-gray-400 rounded mb-5">
                  <img src={wallet} alt="icon" width={20} height={20} />
                  <p>Data is safe and protected.</p>
                </div>
                <img
                  src={plus}
                  alt="icon"
                  width={30}
                  height={30}
                  className="mb-5"
                />
                <div className="flex gap-2 items-center mb-7 font-bold bg-white p-3 border-2 text-sm border-gray-400 rounded">
                  <img src={face} alt="icon" width={20} height={20} />
                  <p>Advanced facial recongention</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection
            animationProps={{ x: [200, 0], opacity: [0, 1] }}
            transitionProps={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            <div className="bg-[#DCE6EA] p-6 rounded flex flex-col border-2 max-w-[600px] border-gray-300 items-center">
              <h1 className="text-2xl font-bold mb-5">
                Easy and fast integration through automation with 30+ apps!
              </h1>
              <p className="text-sm text-gray-500 mb-7">
                Reduce manual workload by using automatic via API, automatic
                payment verification{" "}
              </p>
              <button className="self-start flex flex-row gap-1 items-center mb-14 font-bold">
                Show All Integrations
                <img src={arrowRight} alt="" />
              </button>
              <div className="grid grid-cols-3 gap-12">
                {drives.map((icon, index) => (
                  <img
                    key={index}
                    src={icon.drive}
                    alt="icon"
                    width={40}
                    height={40}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <p className="mb-5 font-manrope text-gray-500">
            Trusted by the world’s best startups!
          </p>
          <div className="flex">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.logo}
                alt="logo"
                className="lg:w-[150px] w-[80px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interagation;
