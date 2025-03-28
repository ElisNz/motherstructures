import Link from 'next/link';
import { HeroImage } from '@/app/components/HeroImage';
import Image from 'next/image';

export default function Design() {
    return (
        <>
            <HeroImage
                src="/images/Chez Oskar canopy in progress.jpg"
                text="Fast to build, easy to modify"
                textcolor="white"
            />
            <div className="flex flex-col gap-8 mb-lg py-md px-sm md:p-lg bg-gray">
                <h2 className="px-sm pb-md mt-sm text-start self-end font-bold text-[1.4em] md:text-[2.5em]">
                    Motherstructures are modular, durable, lightweight, and
                    completely one-of-a-kind. Because of the flexibility of our
                    systems, we can design and customize each project from
                    scratch, turning any modification into an elegant design
                    feature.
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 px-sm lg:px-lg">
                        <h2 className="text-[1.5em] md:text-[2em] font-bold font-sans tracking-widest">
                            More space, less hassle
                        </h2>
                        <p className="py-sm tracking-wider">
                            Our structures are engineered with modular
                            components. This allows us to maximize every inch of
                            space and easily work around nooks and crannies.
                        </p>
                    </div>
                    <div className="relative w-full md:w-1/2 h-[50vh]">
                        <Image
                            src="/images/230609_Le_Perche_ 15.jpg"
                            fill
                            alt="outdoors"
                            className="lg:rounded-sm object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="relative w-full md:w-1/2 h-[50vh]">
                        <Image
                            src="/images/240517_ Anononymous Detail shot.jpg"
                            fill
                            alt="outdoors"
                            className="lg:rounded-sm object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 px-sm lg:px-lg">
                        <h2 className="text-[1.5em] md:text-[2em] font-bold font-sans tracking-widest">
                            Simple materials that solve complex problems
                        </h2>
                        <p className="py-sm tracking-wider">
                            We use a proprietary system of flexible piping and
                            corrugated clear plastic. It’s light, durable,
                            user-friendly, and infinitely versatile. It’s fast
                            to build and easy to remove and modify according to
                            seasonal needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:m-lg mb-md flex flex-row justify-center">
                <div className="flex flex-col lg:flex-row items-center lg:px-lg rounded-sm">
                  <div className="px-md md:px-lg flex flex-col">
                      <h3 className="text-pretty lg:px-lg pb-sm">
                          "Our Motherstructure provides shelter from the elements
                          and a unique ambiance that allows guest to enjoy fresh
                          air and views of their surroundings."
                      </h3>
                      <p className="self-end tracking-tighter font-sans pb-md lg:px-lg">
                          Joy Thomas, Owner, Secret Garden Juice Bar & Tea House
                      </p>
                    </div>
                    <div className="relative w-full md:w-1/2 h-[50vh]">
                        <Image
                            src="/images/Hudson-Milliner-DM.jpg"
                            fill
                            alt="outdoors"
                            className="lg:rounded-sm object-cover px-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="px-sm lg:px-lg flex flex-col-reverse md:flex-row items-center bg-gray">
                <Image
                    src="/images/Chez-Oskar-DM-Resize.jpg"
                    width={800}
                    height={500}
                    alt="outdoors"
                    className="basis-1/4 lg:rounded-sm py-md"
                />
                <div className="basis-4/5 flex flex-col md:gap-8 items-center py-sm lg:p-lg text-center">
                    <p className="text-left text-[14px] md:text-[1.3em] lg:text-[1.7em] text-pretty md:leading-8">
                        Motherstructures has great respect for Mother Nature. We
                        use sustainable technologies for heating and cooling. We
                        also harvest rainwater runoff to feed indoor and outdoor
                        gardens.
                    </p>
                    <div className="flex flex-col md:flex-row md:gap-8 leading-8 md:px-md text-pretty">
                        <div className="flex flex-col py-sm">
                            <h3 className="font-sans font-bold text-center text-nowrap p-sm md:p-md">
                                Responsible heating
                            </h3>
                            <p className="leading-5 px-sm">
                                Pellet stoves, which burn waste material from
                                furniture manufacturing, are a perfect
                                complement to Motherstructures. They’re
                                low-energy consumers and heat your space safely
                                and efficiently.
                            </p>
                        </div>
                        <div className="flex flex-col py-sm">
                            <h3 className="font-sans font-bold text-center p-sm md:p-md">
                                Low-tech cooling
                            </h3>
                            <p className="leading-5 px-sm">
                                During summer days, our covered courtyards are
                                naturally cooled when the rising hot air
                                circulates through high transom windows. We also
                                work with fans and misters to cool down the air
                                closer to the ground.
                            </p>
                        </div>
                    </div>
                    <p className="text-left text-[14px] md:text-[1.3em] lg:text-[1.7em] text-pretty pt-md md:leading-8">
                        Our lightweight grid of metal pipes and plastic allows
                        for an even weight distribution with multiple
                        anchorpoints. This results in a safe and sturdy structure that can
                        weather extreme storms and carry heavy snow loads (well
                        above the NY state rule of 40 lbs per sq. foot)
                    </p>
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
                    href="/about"
                    className="w-fit text-[1.3em] tracking-wide bg-secondary/50 text-center px-md py-sm transition-all duration-500 shadow-[2px_2px_0_0_#171717] hover:shadow-none hover:bg-mono"
                >
                    Get in touch
                </Link>
            </div>
        </>
    );
}
