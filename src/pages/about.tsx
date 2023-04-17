import Layout from "@/components/Layout";
import ProfilePicture from "@/components/UI/ProfilePicture";
import Image from "next/image";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Education from "@/components/UI/Education";
import Experience from "@/components/UI/Experience";

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
                  <Education />
                </Tab.Panel>
                <Tab.Panel>
                  <Experience />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </Layout>
  );
}
