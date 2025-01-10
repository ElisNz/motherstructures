import { Video } from './components/Video';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
            <Video />
            <div className="w-full h-[40vh] md:h-[75vh] lg:h-screen flex flex-col justify-center items-center mix-blend-normal">
                <h1 className='invisible sm:visible lg:px-lg lg:text-[2.5rem] xl:text-[3.5rem]'>Winter gardens for modern spaces</h1>
                <p className="hidden lg:visible py-sm l wrap-balance text-[1.3rem]">We build super light modular structures that can weather all seasons. <br></br> Our goal is to blend the joy of being outside with the comforts of being inside. </p>
            </div>
            <div className='flex flex-col gap-8 lg:gap-12 bg-primary items-center justify-around mx-lg mt-lg py-lg'>
                <h1>Building transformative spaces</h1>
                <div className='flex flex-col text-center'>
                    <p className='px-8 lg:px-[30%] text-pretty pt-4 pb-2 text-left'>"Motherstructures has created a beautiful and super unique solution that perfectly complements who we are. Our courtyard has been transformed into a three-season dining room that wows our customers."</p>
                    <p className='px-8 lg:px-[30%] italic pb-8 text-right text-[0.9rem]'>Jeff Gimmel, Proprietor, Le Perche Bakery & Bar</p>
                    <button className='w-fit bg-black text-white px-sm py-2 hover:bg-black/50 self-center'>Learn More</button>
                </div>
                <Image src='/images/Hudson_Clothier_ 5.jpg' width={700} height={550} alt='outdoors' className='lg:rounded-sm'/>
            </div>
            <div className="mx-lg mt-lg">
                    <div className="w-full flex flex-col px-lg py-md">
                        <h3 className="text-justify">
                            We help you create a one-of-a-kind space that bridges the indoors and outdoors.
                            And since the process is fast and the materials affordable, Motherstructures are accessible for both private homes and small businesses.
                        </h3>
                    </div>
                </div>
                <div className="mx-xl py-md">
                    <ul className="grid grid-cols-3 gap-4 justify-center">
                        <li className="flex flex-col px-md">
                            <h3>*</h3>
                            <h3>Cheaper than wood</h3>
                            <p>Save costs with easy-to-assemble and affordable materials that can be precisely cut with minimal waste.</p>
                        </li>
                        <li className="flex flex-col px-md">
                            <h3>*</h3>
                            <h3>Flexible</h3>
                            <p>Our modular structures are easy to adjust. Add doors and windows in the winter, remove them in the spring.</p>
                        </li>
                        <li className="flex flex-col px-md">
                            <h3>*</h3>
                            <h3>Safe and sound</h3>
                            <p>Motherstructures are assembled on an ultra-light and ultra-strong grid that withstands heavy storms and snow.</p>
                        </li>
                        <li className="flex flex-col px-md">
                            <h3>*</h3>
                            <h3>Low maintenance</h3>
                            <p>Motherstructures age gracefully. An annual powerwash is all you need to keep them in ship shape.</p>
                        </li>
                        <li className="flex flex-col px-md">
                            <h3>*</h3>
                            <h3>Built-in gutters</h3>
                            <p>We engineer elegant gutters that guide the water along the structure and are easy to reach and clean. The water runoff feeds plants.</p>
                        </li>
                        <li className="flex flex-col px-md">
                            <h3>*</h3>
                            <h3>Room to grow</h3>
                            <p>Add consistent capacity to your business or expand your home with a space that acts as a hybrid between the indoors and outdoors. </p>
                        </li>
                    </ul>
                </div>
            </main>
	);
};
