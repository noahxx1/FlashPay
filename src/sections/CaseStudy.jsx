import { person } from "../assets/images";
import AnimatedSection from "../components/AnimatedSection";

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
            className="w-full max-w-[300px] xl:max-w-[500px]  object-cover"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection
        animationProps={{ x: [200, 0], opacity: [0, 1] }}
        transitionProps={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      >
        <div
          className={`flex flex-col gap-6 xl:gap-12 max-w-full xl:max-w-[550px] font-cairo items-center xl:items-end p-4`}
        >
          <p className="three font-bold text-right mb-6 w-fit p-2 rounded text-sm xl:text-base">
            الجهة المسؤولة عن التطبيق
          </p>
          <h1
            className={`text-2xl xl:text-4xl leading-snug xl:leading-[50px] text-center xl:text-right font-bold`}
          >
            تعود حقوق ملكية تطبيق فلاش-باي لشركة تركيز محدودة المسؤولية
          </h1>
          <p
            className={`text-gray-600 text-sm xl:text-base text-center xl:text-right`}
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
