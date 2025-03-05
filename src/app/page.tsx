import { Video } from './components/Video';
import Image from 'next/image';
import Link from 'next/link';
import Asterisk from './components/svg/asterisk';

export default function Home() {
    return (
        <main>
            <Video />
{/*             <div className="w-full h-[40vh] md:h-[75vh] lg:h-screen flex flex-col justify-center items-center mix-blend-normal">
                <h1 className="invisible sm:visible lg:px-lg lg:text-[2.5rem] xl:text-[3.5rem] [text-shadow:_1px_1px_28px_#283033] font-bold tracking-widest">
                    Winter gardens for modern spaces
                </h1>
                <p className="hidden lg:visible py-sm l wrap-balance text-[1.3rem]">
                    We build super light modular structures that can weather all
                    seasons. <br></br> Our goal is to blend the joy of being
                    outside with the comforts of being inside.{' '}
                </p>
            </div> */}
            <div className='h-screen flex flex-col items-center justify-center text-white [text-shadow:_0.5px_0.5px_1px_#000000]'>
            <h1 className="invisible sm:visible lg:px-lg lg:text-[3rem] xl:text-[3.5rem] font-black pb-lg tracking-[0.4rem]">
                    Winter gardens for modern spaces
                </h1>
            </div>
            <div className="relative flex flex-col gap-12 justify-between items-center py-lg mx-lg">
                <h2 className='text-pretty px-xl py-sm tracking-[0.2rem]'>
                    We build super light modular structures that bridge the gap
                    between indoors and outdoors. <br />Our affordable designs are
                    engineered to last but easy to change and customize.
                </h2>
                <div className='flex flex-col gap-2 items-center text-nowrap text-[2rem] tracking-wide'>
                  <Link
                      href="/projects"
                      className="capitalize text-center px-md py-sm transition-all duration-500 shadow-[4px_4px_0.9px_0_#000000] hover:shadow-none hover:bg-primary hover:text-white"
                  >
                      discover our projects
                  </Link>
{/*                   <Link
                      href="/inspiration"
                      className="capitalize w-[80%] text-center px-md py-sm transition-all duration-500 shadow-[4px_4px_0.9px_0_#000000] hover:shadow-none hover:bg-secondary hover:text-white"
                  >
                      get inspired
                  </Link>
                  <Link
                      href="/contact"
                      className="capitalize w-fit text-center px-md py-sm transition-all duration-500 shadow-[4px_4px_0.9px_0_#000000] hover:shadow-none hover:bg-[#283033]/70 hover:text-white"
                  >
                      get in touch
                  </Link> */}
                </div>
            </div>
            <div className="flex flex-row items-center gap-8 mx-lg py-lg">
                <div className="w-1/2 flex flex-col">
                    <h3 className="text-pretty pt-4 pb-2 text-left tracking-tight">
                        "Motherstructures has created a beautiful and super
                        unique solution that perfectly complements who we are.
                        Our courtyard has been transformed into a three-season
                        dining room that wows our customers."
                    </h3>
                    <p className="pb-md pt-xs text-right tracking-tighter text-[1em] font-sans">
                        Jeff Gimmel, Proprietor, Le Perche Bakery & Bar
                    </p>
                    <Link
                        href="/about"
                        className="font-[vollkorn] w-fit text-[1.3em] tracking-wide bg-secondary/50 text-center px-md py-sm transition-all duration-500 shadow-[2px_2px_0.9px_0_#283033] hover:shadow-none hover:bg-mono"
                    >
                        Learn More
                    </Link>
                </div>
                    <Image
                        src="/images/Le Perche.jpg"
                        width={700}
                        height={400}
                        alt="outdoors"
                        className="lg:rounded-sm object-fit"
                    />
            </div>
            <div className="mx-xl my-lg">
                <ul className="grid grid-cols-3 gap-8 justify-center">
                    <li className="flex flex-col gap-4 px-md leading-6">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold text-nowrap">Cheaper than wood</h3>
                        <p className="text-[0.9rem]">
                            Save costs with easy-to-assemble and affordable
                            materials that can be precisely cut with minimal
                            waste.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4 px-md leading-6">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold text-nowrap">Flexible</h3>
                        <p className="text-[0.9rem]">
                            Our modular structures are easy to adjust. Add doors
                            and windows in the winter, remove them in the
                            spring.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4 px-md leading-6">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold text-nowrap">Safe and sound</h3>
                        <p className="text-[0.9rem]">
                            Motherstructures are assembled on an ultra-light and
                            ultra-strong grid that withstands heavy storms and
                            snow.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4 px-md leading-6">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold text-nowrap">Low maintenance</h3>
                        <p className="text-[0.9rem]">
                            Motherstructures age gracefully. An annual powerwash
                            is all you need to keep them in ship shape.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4 px-md leading-6">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold text-nowrap">Built-in gutters</h3>
                        <p className="text-[0.9rem]">
                            We engineer elegant gutters that guide the water
                            along the structure and are easy to reach and clean.
                            The water runoff feeds plants.
                        </p>
                    </li>
                    <li className="flex flex-col gap-4 px-md leading-6">
                        <Asterisk />
                        <h3 className="font-[Verdana] font-bold text-nowrap">Room to grow</h3>
                        <p className="text-[0.9rem]">
                            Add consistent capacity to your business or expand
                            your home with a space that acts as a hybrid between
                            the indoors and outdoors.{' '}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="[text-shadow:_1.5px_0px_0px_#171717] flex flex-col gap-8 m-lg py-lg px-xl bg-tertiary text-white">
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
                <div className='[text-shadow:_1.5px_0px_0px_#171717] w-full flex flex-row justify-between'>
                  <Link
                      href="/design"
                      className="font-[vollkorn] w-fit text-[1.4em] tracking-wide bg-secondary/50 text-center px-md py-sm transition-all duration-500 shadow-[2px_2px_1px_0_#171717] hover:shadow-none hover:bg-primary"
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
                    className="w-fit text-[1.3em] tracking-wide bg-secondary/50 text-center px-md py-sm transition-all duration-500 shadow-[2px_2px_0_0_#171717] hover:shadow-none hover:bg-mono"
                >
                    Get in touch
                </Link>
            </div>
        </main>
    );
}
