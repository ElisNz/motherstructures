'use client';

import { useEffect, useState, useRef } from 'react';
import { Video } from './components/Video';
import Image from 'next/image';
import Link from 'next/link';
import Asterisk from './components/svg/asterisk';

export default function Home() {
    const videoAspect = 1.8;
    const [videoHeight, setVideoHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setVideoHeight(Math.floor(window.innerWidth / videoAspect));
        };
        window.addEventListener('resize', handleResize);

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    return (
        <main>
            <Video />
            <div className={`/* h-[246px] md:h-[430px] lg:h-[576px] */ xl:h-screen flex flex-col items-center justify-center text-white [text-shadow:_0.5px_0.5px_1px_#000000]`}>
              <h1 className="px-sm lg:px-lg lg:text-[3rem] xl:text-[3.5rem] font-black text-center lg:pb-lg tracking-[0.4rem]">
                  Winter gardens for modern spaces
              </h1>
            </div>
            <div className="relative flex flex-col gap-4 md:gap-12 justify-between items-center py-md md:py-lg md:mx-lg">
                <h2 className='text-pretty px-md xl:px-xl py-sm md:tracking-[0.2rem]'>
                    We build super light modular structures that bridge the gap
                    between indoors and outdoors. <br />Our affordable designs are
                    engineered to last but easy to change and customize.
                </h2>
                <div className='flex flex-col gap-2 items-center text-nowrap text-[2rem] tracking-wide'>
                  <Link
                      href="/projects"
                      className="capitalize text-center px-md py-sm transition-all duration-500 shadow-[4px_4px_0.9px_0_#000000] dark:shadow-[4px_4px_0.9px_0_#dfdfdf] hover:shadow-none hover:bg-primary hover:text-white"
                  >
                      discover our projects
                  </Link>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 mx-lg py-sm md:py-lg">
                <div className="lg:w-1/2 flex flex-col">
                    <h3 className="text-pretty pt-4 pb-2 text-left tracking-tight">
                        "Motherstructures has created a beautiful and super
                        unique solution that perfectly complements who we are.
                        Our courtyard has been transformed into a three-season
                        dining room that wows our customers."
                    </h3>
                    <p className="pb-md pt-xs text-right tracking-tighter font-sans">
                        Jeff Gimmel, Proprietor, Le Perche Bakery & Bar
                    </p>
                    <Link
                        href="/about"
                        className="self-center lg:self-start font-[vollkorn] w-fit text-[1.3em] tracking-wide bg-secondary/50 text-center px-md py-sm transition-all duration-500 shadow-[2px_2px_0.9px_0_#283033] dark:shadow-[2px_2px_0.9px_0_#dfdfdf] hover:shadow-none hover:bg-mono"
                    >
                        Learn More
                    </Link>
                </div>
                    <Image
                        src="/images/Le_Perche.jpg"
                        width={windowWidth > 760 ? 600 : 400}
                        height={400}
                        alt="outdoors"
                        className="lg:rounded-sm object-fit"
                    />
            </div>
            <div className="mx-sm md:mx-lg xl:mx-xl my-lg">
                <ul className="grid grid-cols-3 gap-y-4 md:gap-8 justify-center">
                    <li className="flex flex-col gap-4 px-sm md:px-md">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold">Cheaper than wood</h3>
                        <p className="text-[0.7em] md:text-[0.9em] md:leading-6">
                            Save costs with easy-to-assemble and affordable
                            materials that can be precisely cut with minimal
                            waste.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4 px-sm md:px-md">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold">Flexible</h3>
                        <p className="text-[0.7em] md:text-[0.9em] md:leading-6">
                            Our modular structures are easy to adjust. Add doors
                            and windows in the winter, remove them in the
                            spring.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4 px-sm md:px-md">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold">Safe and sound</h3>
                        <p className="text-[0.7em] md:text-[0.9em] md:leading-6">
                            Motherstructures are assembled on an ultra-light and
                            ultra-strong grid that withstands heavy storms and
                            snow.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4 px-sm md:px-md">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold">Low maintenance</h3>
                        <p className="text-[0.7em] md:text-[0.9em] md:leading-6">
                            Motherstructures age gracefully. An annual powerwash
                            is all you need to keep them in ship shape.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4 px-sm md:px-md">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold">Built-in gutters</h3>
                        <p className="text-[0.7em] md:text-[0.9em] md:leading-6">
                            We engineer elegant gutters that guide the water
                            along the structure and are easy to reach and clean.
                            The water runoff feeds plants.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4 px-sm md:px-md">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold">Room to grow</h3>
                        <p className="text-[0.7em] md:text-[0.9em] md:leading-6">
                            Add consistent capacity to your business or expand
                            your home with a space that acts as a hybrid between
                            the indoors and outdoors.{' '}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="[text-shadow:_1.5px_0px_0px_#171717] flex flex-col gap-8 m-sm lg:m-lg py-md md:py-lg px-sm md:px-lg xl:px-xl bg-tertiary text-white">
                <div>
                    <h1>Lightweight, strong and versatile</h1>
                    <p className="pt-sm">
                        Due to our inovative use of simple materials, we can
                        create almost any kind of structure, affordably and
                        sustainably. The modularity of the design means that the
                        structures are easy to modify and maintain.
                    </p>
                </div>
                <div className="relative w-full h-[50vh] self-end">
                    <Image
                        src="/images/230609_Le_Perche_ 15.jpg"
                        fill
                        alt="outdoors"
                        className="lg:rounded-sm object-cover"
                    />
                </div>
                <div className='[text-shadow:_1.5px_0px_0px_#171717] w-full flex flex-row justify-center text-nowrap'>
                  <Link
                      href="/design"
                      className="font-[vollkorn] w-fit text-[1.4em] tracking-wide bg-secondary/50 text-center px-md py-sm transition-all duration-500 shadow-[2px_2px_1px_0_#171717] dark:shadow-[2px_2px_0.9px_0_#dfdfdf] hover:shadow-none hover:bg-primary"
                  >
                      Explore our design components
                  </Link>
                </div>
            </div>
            <div className="flex flex-col items-center gap-8 m-lg py-md">
                <h1>Contact us</h1>
                <p>
                    Curious about what your very own Motherstructure could look
                    like? <br />
                    Tell us about your space and we will send some ideas.
                </p>
                <Link
                    href="/contact"
                    className="w-fit text-[1.3em] tracking-wide bg-secondary/50 text-center px-md py-sm transition-all duration-500 shadow-[2px_2px_0_0_#171717] dark:shadow-[2px_2px_0.9px_0_#dfdfdf] hover:shadow-none hover:bg-mono"
                >
                    Get in touch
                </Link>
            </div>
        </main>
    );
}
