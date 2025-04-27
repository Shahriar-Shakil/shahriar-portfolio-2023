import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type Props = {};

export default function Experience({}: Props) {
  return (
    <ol className="relative dark:border-gray-700">
  {/* Adbrain.io Experience */}
  <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
    <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
      2023 - 2024
    </time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      MERN Stack Developer -{" "}
      <span className="font-light text-[18px]">Adbrain.io</span>
    </h3>
    <ul className="mt-4 list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
      <li>Developed scalable applications using MERN stack (MongoDB, Express, React, Node.js).</li>
      <li>Integrated AI-driven features to optimize ad performance and comparisons.</li>
      <li>Built a custom image editor for ad visuals, streamlining ad creation process.</li>
      <li>Enhanced backend efficiency and improved API performance for real-time data processing.</li>
    </ul>
  </li>
  <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
    <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
      2024 - Ongoing
    </time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Backend Developer (Freelance) -{" "}
      <span className="font-light text-[18px]">Tixpi.com</span>
    </h3>
    <ul className="mt-4 list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
      <li>Assisting with upgrading Node.js in the app to enhance performance and maintainability.</li>
      <li>Collaborating with senior developers on API finalization and improvements.</li>
      <li>Helping with the development of application documentation for better team collaboration.</li>
    </ul>
  </li>
  {/* Createdevs Experience */}
  <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
    <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
      Jan 2021 - Dec 2022
    </time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Frontend Developer -{" "}
      <span className="font-light text-[18px]">Createdevs.com</span>
    </h3>
    <ul className="mt-4 list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
      <li>Integrated Node.js backend API with a Next.js application.</li>
      <li>Improved app performance with React-query for state and cache management.</li>
      <li>Converted Figma designs to JSX using Tailwind CSS for responsive UI.</li>
      <li>Integrated APIs for React Native mobile applications (Android).</li>
    </ul>
  </li>

  {/* Tappware Solutions Experience */}
  <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
    <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
      Sep 2019 - Jan 2021
    </time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Junior Web Developer -{" "}
      <span className="font-light text-[18px]">Tappware Solutions LTD</span>
    </h3>
    <ul className="mt-4 list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
      <li>Contributed to migrating e-Filing system (nothi.gov.bd) from PHP to React.js.</li>
      <li>Built reusable components using Ant Design UI library.</li>
      <li>Integrated REST APIs using Redux-Saga for smooth backend communication.</li>
      <li>Enhanced frontend architecture with a focus on scalability and reusability.</li>
    </ul>
  </li>
</ol>

  );
}
