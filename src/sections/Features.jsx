import { featuersImg } from "../assets/images";
import AnimatedSection from "../components/AnimatedSection";

const Features = () => {
  return (
    <section id="features">
      <div className="max-container flex flex-col items-center font-cairo">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-bold three mb-6"> مميزات التطبيق</h1>
          <p className="text-3xl font-bold mb-16">
            واجهات سهلة الاستخدام تتناسب مع مختلف مستويات الخبرة لدى المستخدمين
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center xl:gap-20">
          <AnimatedSection
            animationProps={{ x: [-200, 0], opacity: [0, 1] }}
            transitionProps={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            <div className="max-w-[500px] text-right text-md">
              <p className=" text-gray-500 mb-5 ">
                يمكن لنقاط البيع والموزعين إدارة عملهم بشكل دقيق وسريع عن طريق
                تطبيق (فلاش-باي) من تحويل وحدات خليوية وتعبئة رصيد كاش ودفع
                فواتير (الكهرباء – الماء – الاتصالات .......) نظام محاسبة متكامل
              </p>
              <p className=" text-gray-500 mb-5 ">
                يقدم التطبيق إمكانية تصدير سجلات التحويل وكشوفات الحسابات بسهولة
                كملفات (pdf , word)
              </p>
              <p className=" text-gray-500 mb-5">
                نوفر لك نظام محاسبي متكامل خاص بالرصيد لمعالجة ديون الزبائن
                والموزعين والدفعات النقدية، ويوفر تقارير مميزة لأرباح الرصيد
              </p>
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
