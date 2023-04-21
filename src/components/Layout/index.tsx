import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { Fragment, useState } from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Layout({ children, className }: Props) {
  const [menu, setMenu] = useState<boolean>(true);
  const handleClick = (open: boolean) => {
    setMenu(open);
  };
  return (
    <div>
      <div className="bg-circle">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
      </div>
      <motion.main
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        className="max-w-[75rem] m-auto  relative  bg-light-alpha-25 borer border-light-alpha-40 min-h-[calc(100vh-4.688rem)] rounded-[1.875rem] backdrop-blur-[10px] overflow-hidden"
      >
        <header className="">
          <div className="absolute z-100 w-full  ">
            <div className="">
              <Disclosure>
                {({ open }) => {
                  return (
                    <>
                      <Disclosure.Button
                        onClick={() => handleClick(open)}
                        className="absolute  flex items-center justify-center z-50 right-[2rem] top-5  w-[3.125rem] h-[3.125rem] rounded-[50%] bg-light-alpha-25 border border-light-alpha-40 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring "
                      >
                        {open ? (
                          <XMarkIcon
                            className={` h-6 w-6 text-main-color hover:scale-[2] transition-all duration-300 `}
                          />
                        ) : (
                          <Bars3Icon className=" h-8 w-8 text-main-color  hover:scale-[1.2] transition-all duration-300  transform" />
                        )}
                      </Disclosure.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-500"
                        enterFrom=" opacity-0 "
                        enterTo=" opacity-100 "
                        leave="transition ease-in duration-500"
                        leaveFrom=" opacity-100 "
                        leaveTo=" opacity-0 "
                      >
                        <Disclosure.Panel
                          as="div"
                          className="px-4 absolute z-40 pt-4 pb-2 text-sm text-gray-500 "
                        >
                          <nav className="fixed  left-0 top-0 h-full w-full py-[2.19rem] px-[1rem] overflow-y-auto ">
                            <div
                              className={`flex flex-col min-h-[calc(100vh-10.688rem)] justify-center items-center 	`}
                            >
                              <ul>
                                <li className="text-center">
                                  <Link
                                    className="relative text-[2rem] capitalize text-accent-700 block font-semibold py-3 px-4 leading-8"
                                    href="/"
                                  >
                                    Home
                                  </Link>
                                </li>
                                <li className="text-center">
                                  <Link
                                    className="relative text-[2rem] capitalize text-accent-700 block font-semibold py-3 px-4 leading-8"
                                    href="/about"
                                  >
                                    About
                                  </Link>
                                </li>
                                <li className="text-center">
                                  <Link
                                    className="relative text-[2rem] capitalize text-accent-700 block font-semibold py-3 px-4 leading-8"
                                    href="/portfolio"
                                  >
                                    Portfolio
                                  </Link>
                                </li>
                                <li className="text-center">
                                  <Link
                                    className="relative text-[2rem] capitalize text-accent-700 block font-semibold py-3 px-4 leading-8"
                                    href="/contact"
                                  >
                                    Contact
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  );
                }}
              </Disclosure>
            </div>
          </div>
        </header>
        <section
          className={`py-[7.5rem] px-0 md:px-10 transition-all duration-500		 ${
            menu ? "opacity-100 " : "opacity-0"
          } ${className ? className : ""}`}
        >
          {children}
        </section>
      </motion.main>
    </div>
  );
}
