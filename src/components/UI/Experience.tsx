import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function Experience({}: Props) {
  return (
    <ol className="relative  dark:border-gray-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
          2022-2023
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Frontend Developer -{" "}
          <span className="font-light text-[18px]">Freelance / Contractor</span>
        </h3>
        <ul className="mt-4 list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
          <li>
            I have experience creating applications using React (including
            Custom Hooks, Context), Firebase &amp; Tailwind CSS.
          </li>
          <li>
            I am skilled in translating UI/UX design wireframes into stunning
            visual elements for web applications, using high quality, reusable
            markup with HTML5 and CSS3.
          </li>
          <li>
            I am knowledgeable in using Redux as my state management library to
            bring consistency and predictability to the data in applications.
          </li>
          <li>
            I am well-versed in using code versioning tools like Git to ensure
            project organization and version control.
          </li>
          <li>
            I am experienced in using React design patterns that involve styled
            components and compound components.
          </li>
          <li>
            I have used Typescript to ensure that all my types are correct.
          </li>
          <li>
            I have created reusable component libraries that simplify the
            process of creating the frontend user interface.
          </li>
          <li>
            I am proficient in incorporating modern React.js and JavaScript
            (ES6+) techniques, such as React Router for navigation and protected
            routes, Hooks for State and Context to allow functional components,
            and Custom hooks to log in and use the Firebase backend.
          </li>
          <li>
            I also had the opportunity to work on a{" "}
            <span className="font-semibold">headless Next.js</span> blog site
            where I gained experience with server-side rendering (SSR) and
            static site generation (SSG) using Next.js.
          </li>
        </ul>
      </li>

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
          <li>
            I integrated Node.js backend API with a{" "}
            <span className="font-semibold">Next.js</span> application, enabling
            seamless communication between the front-end and back-end.
          </li>
          <li>
            I implemented server state and cache management using React-query,
            improving application performance and reducing API calls.
          </li>
          <li>
            Using Tailwind CSS, I converted designs created in Figma to JSX,
            producing beautiful and responsive user interfaces.
          </li>
          <li>
            I successfully integrated APIs into{" "}
            <span className="font-semibold">React Native</span> applications for
            their Android Mobile apps, improving application functionality and
            data retrieval capabilities.
          </li>
        </ul>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
          Sep 2019 - Jan 2021
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Junior Web Developer -{" "}
          <span className="font-light text-[18px]">
            Tappware Solutions LTD, Dhaka
          </span>
        </h3>
        <ul className="mt-4 list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
          <li>
            Worked on updating the previous PHP website of the e-Filing system
            <span className="font-semibold"> (nothi.gov.bd)</span> to a React
            web app as a junior developer.
          </li>
          <li>
            Focused on creating reusable components that could be used
            throughout the application.
          </li>
          <li>
            Integrated REST APIs using{" "}
            <span className="font-semibold">Redux-Saga</span> to enable seamless
            communication between the front-end and back-end.
          </li>
          <li>
            Created reusable components using the Ant Design UI library to
            improve the user experience of the application.
          </li>
        </ul>
      </li>
    </ol>
  );
}
