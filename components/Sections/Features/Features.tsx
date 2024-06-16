import { BoxIcon } from "lucide-react";
import { CiMobile1, CiDesktop } from 'react-icons/ci';
import { FaCodepen } from "react-icons/fa";

const features = [
  {
    imageSrc: "",
    icon: <BoxIcon className="w-4 h-4" />,
    title: "Title",
    description: "Tell something about every feature. Don't put too much text.",
    href: "/"
  },
  {
    imageSrc: "",
    icon: <BoxIcon className="w-4 h-4" />,
    title: "Title",
    description: "Tell something about every feature. Don't put too much text.",
    href: "/"
  },
  {
    imageSrc: "",
    icon: <BoxIcon className="w-4 h-4" />,
    title: "Title",
    description: "Tell something about every feature. Don't put too much text.",
    href: "/"
  },
  {
    imageSrc: "",
    icon: <BoxIcon className="w-4 h-4" />,
    title: "Title",
    description: "Tell something about every feature. Don't put too much text.",
    href: "/"
  },
  {
    imageSrc: "",
    icon: <BoxIcon className="w-4 h-4" />,
    title: "Title",
    description: "Tell something about every feature. Don't put too much text.",
    href: "/"
  },
  {
    imageSrc: "",
    icon: <BoxIcon className="w-4 h-4" />,
    title: "Title",
    description: "Tell something about every feature. Don't put too much text.",
    href: "/"
  }
];

export default function Features() {
  return (
    <>
      <div id="services" className="relative flex flex-col items-center justify-start gap-10 mx-4 lg:mx-32 text-white bg-black border border-[#2e2e2e] border-t-0 md:border-t md:mt-4">
        <p className="absolute text-4xl font-bold text-center -translate-x-1/2 lg:border-y border-[#2e2e2e] bg-black py-3 px-8 lg:px-20 top-10 left-1/2 w-max">
            What We Do
        </p>
        <div className="flex flex-col justify-start px-4 mt-28 lg:grid lg:grid-cols-3 lg:mt-0">
          <div className="flex flex-col items-center gap-4 text-center border-b lg:border-r lg:border-b-0 border-[#2e2e2e] py-6 lg:py-44 px-4">
            <CiDesktop className="text-7xl"/>
            <p className="text-3xl font-medium">Web Development</p>
            <p className="font-thin">Custom websites that are fast, responsive, and tailored to your business needs.</p>
          </div>
          <div className="flex flex-col items-center gap-4 py-6 lg:py-44 px-4 text-center border-b lg:border-r lg:border-b-0 border-[#2e2e2e]">
            <CiMobile1 className="text-7xl"/>
            <p className="text-3xl font-medium">Mobile Development</p>
            <p className="font-thin">Engaging mobile apps for iOS and Android to keep your audience connected.</p>
          </div>
          <div className="flex flex-col items-center gap-4 px-2 py-6 text-center lg:py-44">
            <FaCodepen className="text-7xl"/>
            <p className="text-3xl font-medium">Web & Mobile Design</p>
            <p className="font-thin">Seamless solutions for both web and mobile, ensuring a consistent user experience.</p>
          </div>
        </div>
      </div>
    </>
  );
}
