import { imageCarousel } from "@/utils";
import { portfolios } from "@/utils/data";
import Image from "next/image";
import Slider from "react-slick";
import ProjectViewModal from "../UI/ProjectViewModal";

type Props = {};

export default function PortFolioPage({}: Props) {
  return (
    <>
      <div className="w-full">
        <h2 className="text-center text-[2.5rem] capitalize mb-[2.5rem] font-medium">
          Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((item) => (
            <div key={item.id} className="mt-0 px-1 pb-[1.875rem] ">
              <div className="p-[0.625rem] bg-light-alpha-25 border border-light-alpha-40 rounded-[.625rem]">
                <Slider {...imageCarousel}>
                  {item.images.map((image) => (
                    <Image
                      key={image}
                      src={image}
                      width="320"
                      height="150"
                      alt="project1"
                      className="mx-auto aspect-video	"
                    />
                  ))}
                </Slider>
              </div>
              <h3 className="text-[1.25rem] capitalize my-5">{item.title}</h3>
              <button className="button-primary">View Project</button>
            </div>
          ))}
        </div>
      </div>
      <ProjectViewModal />
    </>
  );
}
