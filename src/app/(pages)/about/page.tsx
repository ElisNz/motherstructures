import { HeroImage } from "../../components/HeroImage";
import { FAQ } from "../../components/FAQ";
import Image from 'next/image';


export default function About() {
    return (
        <main>
            <HeroImage src="/images/about.jpg" text="Giving birth to Motherstructures" textcolor="white" />
            <div className="bg-primary m-lg">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-20 p-lg">
                    <div className="w-1/2 h-full flex flex-col justify-center gap-8">
                        <h2 className="text-start text-nowrap">How it started</h2>
                        <article className="flex flex-row justify-around gap-8 text-pretty">
                            <p className="w-1/2 breadtext">My name is Charlotta Janssen and I’m an artist and restaurant owner. 
                                2020 was a hell of a year. When New York City indoor dining shut down, my restaurant team and I were struggling to create a viable outdoor dining solution.
                                Tents were a nightmare and wood was costly and cumbersome.<br/><br/>
                                I wanted to create something that was affordable, strong, and modular and could transport my staff and customers to a more beautiful place.
                                <br/>I looked to Hector Guimard (designer of the Paris Metro) for inspiration, which helped me come up with the solution: An Art Nouveau winter garden meets an outdoor dining shed for modern times.
                            </p>
                            <p className="w-1/2 breadtext">Mother Structures are made of humble materials (steel pipes and corrugated clear plastic siding) that become elegant and extremely durable when they’re brought together. 
                                They are flexible and easy to work with, almost like a Lego system. 
                                <br/><br/><br/>The possibilities for building all kinds of smart, original, and user-friendly spaces, for both businesses and private homes, are endless. 
                                <br/>We hope that you will soon find out for yourself! 
                            </p>
                        </article>
                        <button className='w-1/2 bg-black text-white p-sm hover:bg-black/50 rounded-sm breadtext'>Explore your own motherstructure</button>
                    </div>
                    <div className="relative">
                        <Image src="/images/Chez_Oskar-Charlotta-1-1.png" className="rounded-sm" width={400} height={800} alt="outdoors" />
                    </div>
                </div>
            </div>
            <div className="bg-backgroud">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-20 p-lg">
                    <Image src="/images/outdoor1.jpg" width={600} height={400} className="w-1/2 rounded-sm" alt="outdoor" />
                    <div className="w-1/3 flex flex-col justify-center gap-8 text-pretty">
                        <h2>Modular one-of-a-kind structures</h2>
                        <h4 className="text-[1.1rem] font-[Verdana]">We create infinitely versatile designs that expand capacity and bring a unique flair to our clients' spaces.</h4>
                        <button className='bg-black text-white p-sm hover:bg-black/50 self-start rounded-sm breadtext'>See what we have built</button>
                    </div>
                </div>
            </div>
            <div className="bg-secondary m-lg">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-20 p-lg">              
                    <div className="w-1/3 flex flex-col justify-center gap-8 text-pretty">
                        <h2>Extraordinary structures from ordinary parts</h2>
                        <h4 className="text-[1.1rem] font-[Verdana]">Our proprietary system makes innovative use of simple, everyday materials that are fast and easy to assemble but stand up to any weather conditions.</h4>
                        <button className='bg-black text-white p-sm hover:bg-black/50 self-start rounded-sm breadtext'>Lear more about our designs</button>
                    </div>
                    <Image src="/images/About-Page-Section-2-1.jpg" width={600} height={400} className="w-1/2 rounded-sm" alt="outdoor" />
                </div>
            </div>
            <div className="bg-backgroud">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-20 p-lg">
                    <Image src="/images/Hudson_Clothier_ 5.jpg" width={600} height={400} className="w-1/2 rounded-sm" alt="outdoor" />
                    <div className="w-1/3 flex flex-col justify-center gap-8 text-pretty">
                        <h2>Discover the possibilities</h2>
                        <h4 className="text-[1.1rem] font-[Verdana]">Our influences range from insect wings to the original Penn Station. The modularity of our system makes it possible to make the most fantastical concepts a reality.</h4>
                        <button className='bg-black text-white p-sm hover:bg-black/50 self-start rounded-sm breadtext'>Get inspired</button>
                    </div>
                </div>
            </div>
            <FAQ />
        </main>
    );
};
