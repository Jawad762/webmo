import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import BackgroundSquares from "../Backgrounds/BackgroundSquares";
import Link from "next/link";
import { config } from "@/lib/config";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 text-white lg:px-32">
      <div className="relative flex flex-col items-center justify-start w-full py-24 mt-4">
        <h1 className="text-4xl md:text-6xl mt-8 text-center max-w-[700px] font-extrabold px-4">
          Transforming Ideas into Digital Solutions
        </h1>
        <div className="flex flex-col justify-center items-center mt-7 gap-2 md:text-2xl font-thin text-center max-w-[500px]">
          <h2>
          Welcome To WebMo: a Lebanon-based agency specializing in custom Web and Mobile development.
          </h2>
        </div>
        <Link href={'#services'}>
          <Button size="lg" className="mt-6">
            Read More
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
        <BackgroundSquares />
      </div>
      <div className="border border-[#2e2e2e] py-10 md:py-20 px-4 lg:px-16 text-xl md:text-4xl font-medium text-center">
        <p>Skyrocket your business with cutting-edge digital solutions that captivate customers and drive sales</p>
      </div>
    </section>
  );
}
