import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { clock, location, phone } from "../assets/icons";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email format" }).min(2, {
    message: "Email must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

const JoinUs = () => {
  const formRef = useRef(null); // Create a ref for the form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    if (formRef.current) {
      const service_id = "service_dwpn74x";
      const template_id = "template_6v4qd9j";
      const public_key = "FjyaUwYaMFEebx_vB";

      emailjs
        .sendForm(service_id, template_id, formRef.current, public_key)
        .then(
          (result) => {
            if (result.text === "OK") {
              alert("تم الإرسال بنجاح");
              reset();
            }
          },
          (error) => {
            console.error(error.text);
          }
        );
    }
  };

  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-cairo">
        <div className="mb-4">
          <div className="mb-6 text-center sm:text-center md:mx-auto md:mb-12 flex flex-col">
            <p className="text-base three w-fit self-center tracking-wide font-cairo mb-6 font-bold">
              تواصل معنا
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-[50px]">
              نحن هنا لنقدم لك الدعم الذي تحتاجه تواصل معنا لنعرف كيف يمكننا
              خدمتك
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400 text-right">
                نعمل بإستمرار لجعل تجربتك مع الخدمات التي نقدمها أسهل. سوف
                نتجاوب معك خلال 24 ساعة
              </p>
              <ul className="flex flex-col gap-6 mb-6 md:mb-0">
                <li className="flex gap-2">
                  <div className="flex h-10 w-10 items-center justify-center">
                    <img src={location} alt="" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      موقعنا
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      ساحة المحافظة, فندق الفردوس
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      دمشق, سوريا
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <div className="flex h-10 w-10 items-center justify-center">
                    <img src={phone} alt="" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      للتواصل
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      +963 933 557 775
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      011 4841
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      info@focustradingcompany.com
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <div className="flex h-10 w-10 items-center justify-center">
                    <img src={clock} alt="" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      ساعات العمل
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      متوافرون على مدار الساعة طول ايام الاسبوع
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl text-right font-bold dark:text-white">
                هل انت جاهز للبدء ؟
              </h2>
              <form
                ref={formRef}
                id="contactForm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="username"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="username"
                        autoComplete="given-name"
                        placeholder="الاسم"
                        className={`mb-2 w-full rounded border input-2 text-right border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 ${
                          errors.username ? "border-red-500" : ""
                        }`}
                        {...register("username")}
                      />
                      {errors.username && (
                        <p className="text-red-500 text-sm">
                          {errors.username.message}
                        </p>
                      )}
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="البريد الالكتروني"
                        className={`mb-2 w-full rounded input-2 border text-right border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="message"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="message"
                      name="message"
                      cols="30"
                      rows="5"
                      placeholder="... اكتب رسالتك"
                      className={`mb-2 input-2  w-full rounded resize-none border text-end border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      {...register("message")}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-black text-white px-6 py-3 font-xl rounded sm:mb-0"
                  >
                    ارسال
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
