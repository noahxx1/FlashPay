import { webLogo } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer id="contact-us" className="max-container">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className=" flex flex-col items-start">
          <a href="/">
            <img src={webLogo} width={200} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Flash-pay processes payments , helps marketplaces simplify payments,
            send payments and other financial facilities
          </p>
          <div className="flex items-center mt-8 gap-3">
            {socialMedia.map((icon, index) => (
              <div key={index} className="flex justify-center items-center">
                <a href={icon.href}>
                  <img src={icon.src} alt={icon.alt} width={30} height={30} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-manrope text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-manrope text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer">
          <p>
            Copyright ©2024{" "}
            <a
              href="https://focustradingcompany.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#1eaab8]"
            >
              {" "}
              Focus Digital Solutions Company.
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
