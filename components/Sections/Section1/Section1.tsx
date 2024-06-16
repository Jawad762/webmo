import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { dataLeft, dataRight } from "./data";
import { config } from "@/lib/config";
import { RiNextjsFill } from "react-icons/ri";
import { FaShopify, FaSwift, FaReact, FaAndroid, FaWordpress } from "react-icons/fa6";


export default function Section1() {
  return (
    <div id="contact" className="border border-[#2e2e2e] border-t-0 md:border-t md:mt-4 py-6 md:py-0 mx-4 lg:mx-32 flex flex-col md:flex-row justify-center text-white">
      <div className="border-b border-[#2e2e2e] md:hidden h-[0.5px] w-full mb-8"></div>
      <div className="w-full max-w-[1200px] md:grid grid-cols-8">
        <div className="col-span-2 text-center md:h-[500px] flex md:flex-col justify-center gap-10 md:gap-0 md:justify-around items-center mb-6 md:mb-0">
          <RiNextjsFill className="text-5xl md:text-8xl"/>
          <FaShopify className="text-5xl md:text-8xl"/>
          <FaWordpress className="text-5xl md:text-8xl"/>
        </div>
        <div className="flex flex-col items-center justify-center col-span-4">
          <p className="mx-4 text-4xl font-bold text-center md:mx-0">
            Start Today
          </p>
          <p className="mx-10 my-8 text-2xl font-thin text-center md:mx-6">
            Contact us to see how our tech stack can power your next business.
          </p>
          <a target="_blank" href={'https://wa.me/96171482386'}>
            <Button>
              Contact us <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
        <div className="col-span-2 text-center md:h-[500px] flex md:flex-col justify-center gap-10 md:gap-0 md:justify-around items-center mt-6 md:mt-0">
          <FaReact className="text-5xl md:text-8xl"/>
          <FaAndroid className="text-5xl md:text-8xl"/>
          <FaSwift className="text-5xl md:text-8xl"/>
        </div>
      </div>
    </div>
  );
}
