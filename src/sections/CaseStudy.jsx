import { vedio } from "../assets/icons";
import { person } from "../assets/images";
import AnimatedSection from "../components/AnimatedSection";
import { statistics } from "../constants";

const CaseStudy = () => {
  return (
    <section
      id="caseStudy"
      className="max-container flex flex-col xl:flex-row xl:justify-between justify-start items-center p-4 xl:p-8"
    >
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
        <div
          className={`flex flex-col gap-6 xl:gap-12 max-w-full xl:max-w-[550px] font-cairo items-center xl:items-end p-4`}
        >
          <p className="font-bold bg-white w-fit p-2 rounded text-sm xl:text-base">
            الجهة المسؤولة عن التطبيق
          </p>
          <h1
            className={`text-2xl xl:text-4xl leading-snug xl:leading-[50px] text-center xl:text-right font-bold`}
          >
            تعود حقوق ملكية تطبيق فلاش-باي لشركة تركيز محدودة المسؤولية
          </h1>
          <p
            className={`text-gray-600 text-sm xl:text-base text-center xl:text-right xl:mt-11`}
          >
            تعتبر الشركة مسرولة عن بشكل كامل عن التطبيق و ادارته و متابعة الحلول
            و المشاكل و هي على استعداد تام لتقديم الخدمة على افضل وجد على مدار
            24 ساعة
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CaseStudy;
