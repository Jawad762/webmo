'use client'
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import BackgroundSquares from "../Backgrounds/BackgroundSquares";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const typewriterContainerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    const hiddenText = typewriterContainerRef.current?.querySelector<HTMLParagraphElement>('.hidden-text');
    setContainerHeight(hiddenText?.offsetHeight as number);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center px-4 text-white lg:px-32">
      <div className="relative flex flex-col items-center justify-center w-full h-[500px] sm:h-[600px] mt-4">
        <div 
          className="text-center max-w-[700px] font-extrabold px-4 min-h-40 md:mb-8" 
          ref={typewriterContainerRef} 
          style={{ height: containerHeight }}
        >
          <h1 className="mt-8 text-4xl md:text-6xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Transforming Ideas into Digital Solutions')
                .changeDelay(100)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Bringing Your Ideas to Life with Digital Expertise')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Crafting Your Dreams into Digital Realities')
                  .start();
              }}
            />
          </h1>
          <div className="text-4xl md:text-6xl text-center max-w-[700px] font-extrabold px-4 invisible">
            <p className="hidden-text">Crafting Dreams into Advanced Digital Realities</p>
          </div>
        </div>
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
