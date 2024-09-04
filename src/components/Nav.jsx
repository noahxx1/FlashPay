import { hamburger, webLogo } from "../assets/icons";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SheetClose } from "./ui/sheet";

const Nav = () => {
  return (
    <motion.header className="padding-x  absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={webLogo} alt="logo" width={129} height={30} />
        </a>
        <ul className="flex gap-8 font-cairo font-bold max-lg:hidden ">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <img src={hamburger} alt="" width={25} height={25} />
          </SheetTrigger>
          <SheetContent
            side="left"
            aria-describedby={undefined}
            className="bg-white border-none list-none"
          >
            <SheetHeader>
              <SheetTitle>
                <img
                  src={webLogo}
                  alt=""
                  width={129}
                  height={30}
                  className="mb-6"
                />
              </SheetTitle>
            </SheetHeader>
            <SheetClose className="flex flex-col justify-center items-start gap-8 ml-4 ">
              {navLinks.map((item, index) => (
                <SheetClose key={index}>
                  <li>
                    <a href={item.href}>{item.label}</a>
                  </li>
                </SheetClose>
              ))}
              <button className="font-palanquin bg-black text-white px-4 py-2 rounded mt-10 ">
                English
              </button>
            </SheetClose>
          </SheetContent>
        </Sheet>
        <button className="font-palanquin bg-black text-white px-4 py-2 rounded max-lg:hidden">
          English
        </button>
      </nav>
    </motion.header>
  );
};

export default Nav;
