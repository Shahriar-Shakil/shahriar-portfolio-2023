import Image from "next/image";
import React from "react";

type Props = {};

export default function ProfilePicture({}: Props) {
  return (
    <div className="max-w-[20rem] max-h-[20rem] overflow-hidden bg-light-alpha-25 border border-light-alpha-25 m-auto object-cover rounded-[50%]">
      <Image
        src="/images/shahriar-red.jpg"
        alt="profile-pic"
        width="200"
        height="200"
        className="w-full grayscale-[90%] hover:grayscale-0 transition-all ease-in-out duration-[2s] "
      />
    </div>
  );
}
