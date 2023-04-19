import { imageCarousel } from "@/utils";
import Image from "next/image";
import Slider from "react-slick";

type Props = {
  data: any;
};

export default function ProjectView({ data }: Props) {
  return (
    <div className="space-y-5 text-accent-700">
      <div>
        <div className="overflow-hidden  min-h-[30rem] bg-light-alpha-25 border border-light-alpha-40 rounded-[.625rem]">
          <Slider {...imageCarousel}>
            {data.images.map((image: string) => (
              <Image
                key={image}
                src={image}
                width="720"
                height="520"
                alt="project1"
                className="rounded-md mx-auto aspect-video	"
              />
            ))}
          </Slider>
        </div>
        <h2 className="text-[1.563rem] capitalize mt-5">{data.title}</h2>
      </div>
      <div className="space-y-3">
        <p className="font-light">
          <span className="font-medium">About - </span> {data.about}
        </p>
        <p className="font-light">
          <span className="font-medium">Technologies Used - </span>{" "}
          {data.tech.join(", ")}
        </p>
        <p className="font-light">
          <span className="font-medium">Role - </span> {data.role}
        </p>
        {data.github ? (
          <p className="font-light">
            <span className="font-medium">View Github - </span>{" "}
            <a className="text-main-color" href={data.github} target="_blank">
              go gere
            </a>
          </p>
        ) : (
          <></>
        )}
        {data.live ? (
          <p className="font-light">
            <span className="font-medium">Live Preview - </span>{" "}
            <a className="text-main-color" href={data.live} target="_blank">
              here
            </a>
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="pt-4 space-y-2">
        <p className=" text-main-color">Project Description</p>

        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      </div>
    </div>
  );
}
