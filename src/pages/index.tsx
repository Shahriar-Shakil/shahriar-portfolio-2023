import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout className=" flex items-center min-h-[calc(100vh-4.688rem)]  w-full ">
      <div className="flex w-full flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start ">
          <p className="font-light text-[1.2rem] text-accent-700">Hi, I'm </p>
          <h1 className="font-semibold text-center text-[30px] lg:text-[3.2rem] leading-[1.3] capitalize">
            Shahriar Shakil
          </h1>
          <h2 className="font-extralight text-accent-700 text-[18px] lg:text-2xl capitalize mt-0 mb-[1.875rem] mx-0">
            Frontend Developer
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 ">
            <Link className="button-primary " href="/">
              More About Me
            </Link>
            <Link className="button-primary " href="/">
              Portfolio
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4 ">
          <div className="max-w-[20rem] max-h-[20rem] overflow-hidden bg-light-alpha-25 border border-light-alpha-25 m-auto object-cover rounded-[50%]">
            <Image
              src="/images/shahriar-red.jpg"
              alt="profile-pic"
              width="200"
              height="200"
              className="w-full grayscale-[90%] hover:grayscale-0 transition-all ease-in-out duration-[2s] "
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
