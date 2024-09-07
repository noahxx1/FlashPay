import AnimatedSection from "../components/AnimatedSection";
import { infoNeeded, logos, required } from "../constants";

const Interagation = () => {
  return (
    <section id="products">
      <div className="flex flex-col justify-center items-center gap-6 font-cairo max-container">
        <h1 className="font-bold three mb-6">كيفية استخدام التطبيق</h1>
        <p className="text-3xl font-bold mb-4">
          تجد هنا جميع المتطلبات اللازمة لبدء استخدام التطبيق
        </p>
        <div className="flex gap-20 flex-col xl:flex-row justify-between">
          <AnimatedSection
            animationProps={{ x: [-200, 0], opacity: [0, 1] }}
            transitionProps={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            <div className="bg-[#DCE6EA] p-6 rounded flex flex-col max-w-[600px] xl:min-h-[524px] border-2 border-gray-300">
              <h1 className="text-2xl font-bold mb-5 text-center">
                عند انشاء حساب على التطبيق يلزم ادخال ما يلي
              </h1>
              <ul className="text-gray-500 text-sm text-right flex flex-col  gap-5">
                {infoNeeded.map((information, index) => (
                  <li key={index}>{information.label}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection
            animationProps={{ x: [200, 0], opacity: [0, 1] }}
            transitionProps={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            <div className="bg-[#DCE6EA] p-6 rounded flex flex-col border-2 max-w-[600px] min-h-[520px] border-gray-300 items-center">
              <h1 className="text-2xl font-bold mb-5 text-center">
                الأوراق المطلوبة للاشتراك بتطبيق (فلاش-باي)
              </h1>
              <ul className="text-gray-500 text-sm text-right flex flex-col gap-5">
                {required.map((req, index) => (
                  <li key={index}>{req.label}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <p className="mb-5 text-gray-500 ">: الشركات التي تم التعاقد معها</p>
          <div className="flex items-center gap-6 xl:gap-10">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.logo}
                alt="logo"
                className="lg:w-[120px] w-[60px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interagation;
