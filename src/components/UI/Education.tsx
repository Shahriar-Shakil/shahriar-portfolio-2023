import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function Education({}: Props) {
  return (
    <ol className="relative border-l border-main-color dark:border-gray-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
          2022
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Think in Redux Way -{" "}
          <span className="font-light text-[18px]">Learn with Sumit</span>
        </h3>
        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
          I recently completed the &quot;Think In a Redux Way&quot; course from
          Learn with Sumit, which was a comprehensive program focused on the
          latest Redux methods like Redux Toolkit and RTK Query.
        </p>
        <a
          className="mt-2  button-primary "
          href="https://learnwithsumit.com/certificates/verify/LWSCTXN-HRICBP4I"
          target="_blank"
        >
          <span className="">View Profile</span>
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </a>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
          June 2018
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Web Design - <span className="font-light text-[18px]">BITM</span>
        </h3>
        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
          I completed a 3-month long Web Design training program from Bangladesh
          Institute of Management (BITM) under the Skills for Employment
          Investment Program (SEIP), a government initiative. The program
          focused on HTML, CSS, and JavaScript and provided me with a
          comprehensive understanding of web design. I am grateful for the
          opportunity and the knowledge I gained from this training program.
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
          December 2017-2018
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Front end development-{" "}
          <span className="font-light text-[18px]">Free Code Camp</span>
        </h3>
        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
          FreeCodeCamp.org is an amazing resource for self-taught developers who
          want to learn web development skills.I am proud to have earned the
          Responsive Web Design, JavaScript Algorithms and Data Structures, and
          Front End Libraries certificates from FreeCodeCamp in 2018 and 2019.
        </p>
        <a
          className="mt-2  button-primary "
          href="https://www.freecodecamp.org/shahriar-shakil"
          target="_blank"
        >
          <span className="">View Profile</span>
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </a>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
          2015-2018
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          BBA- <span className="font-light text-[18px]">IUBAT (Dropout)</span>
        </h3>
        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
          I am a self-taught software developer who is passionate about coding
          and programming. While pursuing a BBA degree from International
          University of Business Agriculture and Technology between 2015-2018, I
          discovered my love for software development and decided to pursue it
          as a career path. Since then, I have been continuously learning and
          growing my skills as a developer.
        </p>
      </li>
    </ol>
  );
}
