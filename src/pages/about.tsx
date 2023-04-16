import Layout from "@/components/Layout";
import ProfilePicture from "@/components/UI/ProfilePicture";
import Image from "next/image";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

let skills = [
  "JavaScript Es6",
  "React",
  "Typescript",
  "Next JS",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
  "Redux",
  "SWR",
  "React Query",
];
export default function AboutPage() {
  return (
    <Layout className="   py-[4.5rem] w-full ">
      <div className="w-full">
        <h2 className="text-center text-[2.5rem] capitalize mb-[2.5rem] font-medium">
          About Me
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[40%] min-w-[40%]">
          <ProfilePicture />
        </div>
        <div className="px-4 space-y-8">
          <p>
            {" "}
            I am passionate about creating beautiful and intuitive digital
            experiences that make a positive impact on people&apos;s lives. With
            a strong background in HTML, CSS, JavaScript, and React, I am always
            eager to push the boundaries of what&apos;s possible and experiment
            with new technologies.
          </p>
          <h3 className="capitalize text-[1.25rem] font-medium my-5">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((item) => (
              <span
                key={item}
                className="capitalize bg-light-alpha-25 border border-light-alpha-40 px-4 py-[5px]  rounded-[1.25rem]"
              >
                {item}
              </span>
            ))}
          </div>
          <div>
            <Tab.Group>
              <Tab.List>
                <Tab>
                  {({ selected }) => (
                    <button
                      className={`${selected ? "selected" : ""} tab-button`}
                    >
                      Education
                    </button>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <button
                      className={`${selected ? "selected" : ""} tab-button`}
                    >
                      Experience
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-5">
                <Tab.Panel>
                  {" "}
                  <ol className="relative border-l border-main-color dark:border-gray-700">
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                      <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
                        2021-2022
                      </time>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Frontend Career Path -{" "}
                        <span className="font-light text-[18px]">
                          Scrimba Coding School
                        </span>
                      </h3>
                      <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        I had the great opportunity to study and get to code
                        alongside experts from Scrimba and many like Cassidy
                        Williams, Kevin Powell while I was enrolled in the
                        Scrimba's Frontend Developer Career Path.
                      </p>
                    </li>
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-main-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                      <time className="mb-1 text-sm font-normal leading-none text-main-color dark:text-gray-500">
                        2022
                      </time>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Think in Redux Way -{" "}
                        <span className="font-light text-[18px]">
                          Learn with Sumit
                        </span>
                      </h3>
                      <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        I recently completed the &quot;Think In a Redux
                        Way&quot; course from Learn with Sumit, which was a
                        comprehensive program focused on the latest Redux
                        methods like Redux Toolkit and RTK Query.
                      </p>
                      <a
                        className="mt-2  button-primary "
                        href="https://learnwithsumit.com/certificates/verify/LWSCTXN-HRICBP4I"
                        target="_blank"
                      >
                        <span className="">Certificate</span>
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </a>
                    </li>
                  </ol>
                </Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </Layout>
  );
}
