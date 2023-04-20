import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ContactForm from "./contactForm";

type Props = {};

export default function ContactPage({}: Props) {
  return (
    <div className="px-4 sm:px-[2.5rem]">
      <div className="w-full">
        <h2 className="text-center text-3xl sm:text-[2.5rem]  capitalize mb-[2.5rem] font-medium">
          Contact Me
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-0 sm:gap-x-8 lg:gap-x-16">
        <div className="px-4 col-span-2 sm:col-span-1">
          <ContactForm />
        </div>
        <div className="col-span-2 sm:col-span-1 row-start-1 sm:col-start-2 space-y-[1.875rem] px-4 text-accent-700">
          <div>
            <h3 className="text-[1.25rem] mb-[5px]">Email</h3>
            <p>webdev.shakil@gmail.com</p>
          </div>
          <div>
            <h3 className="text-[1.25rem] mb-[5px]">Phone</h3>
            <p>+8801780503417</p>
          </div>
          <div className="w-full">
            <h3 className="text-[1.25rem] mb-3">Follow Me</h3>
            <div className="space-x-4">
              <a
                className="inline-flex items-center justify-center h-[2.5rem] w-[2.5rem] rounded-full text-main-color  bg-light-alpha-25 border border-light-alpha-40 hover:bg-main-color hover:text-white transition-all duration-300"
                href="https://github.com/Shahriar-Shakil"
                target="_black"
              >
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>
              <a
                className="inline-flex items-center justify-center h-[2.5rem] w-[2.5rem] rounded-full text-main-color  bg-light-alpha-25 border border-light-alpha-40 hover:bg-main-color hover:text-white transition-all duration-300"
                href="https://www.linkedin.com/in/shahriar-shakil/"
                target="_black"
              >
                <FontAwesomeIcon icon={faLinkedin} className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
