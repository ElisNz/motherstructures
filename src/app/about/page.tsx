import { HeroImage } from "../components/HeroImage";
import Image from 'next/image';


export default function About() {
    return (
        <main>
            <HeroImage src="/images/outdoor1.jpg" />
            <div className="bg-primary">
                <div className="flex flex-col lg:flex-row justify-around items-center px-8 py-20">
                    <div className="w-1/2 h-full flex flex-col justify-center gap-8">
                        <h2 className="text-4xl text-center">Giving birth to Motherstructures</h2>
                        <article className="flex flex-row justify-around gap-8 text-pretty">
                            <p className="w-1/2 breadtext">My name is Charlotta Janssen and I’m an artist and restaurant owner. 
                                2020 was a hell of a year. When New York City indoor dining shut down, my restaurant team and I were struggling to create a viable outdoor dining solution.
                                Tents were a nightmare and wood was costly and cumbersome.<br/><br/>
                                I wanted to create something that was affordable, strong, and modular and could transport my staff and customers to a more beautiful place.
                                <br/>I looked to Hector Guimard (designer of the Paris Metro) for inspiration, which helped me come up with the solution: An Art Nouveau winter garden meets an outdoor dining shed for modern times.
                            </p>
                            <p className="w-1/2 breadtext">Mother Structures are made of humble materials (steel pipes and corrugated clear plastic siding) that become elegant and extremely durable when they’re brought together. 
                                They are flexible and easy to work with, almost like a Lego system. 
                                <br/><br/>The possibilities for building all kinds of smart, original, and user-friendly spaces, for both businesses and private homes, are endless. 
                                <br/>We hope that you will soon find out for yourself! 
                            </p>
                        </article>
                        <button className='w-1/2 bg-black text-white px-4 py-2 hover:bg-black/50 self-start rounded-md breadtext'>Explore your own motherstructure</button>
                    </div>
                    <div className="relative">
                        <Image src="/images/Chez_Oskar-Charlotta-1-1.png" className="rounded-2xl" width={400} height={800} alt="outdoors" />
                    </div>
                </div>
            </div>
        </main>
    );
};
