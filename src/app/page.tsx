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
        <div className='w-full flex flex-col gap-8 lg:gap-12 pb-12 items-center justify-around'>
            <h1 className='pt-12 md:pt-20'>Building transformative spaces</h1>
            <div className='flex flex-col text-center'>
                <p className='mx-8 lg:mx-[30%] text-pretty pt-4 pb-2 text-left'>"Motherstructures has created a beautiful and super unique solution that perfectly complements who we are. Our courtyard has been transformed into a three-season dining room that wows our customers."</p>
                <p className='mx-8 lg:mx-[30%] italic pb-8 text-right text-[0.9rem]'>Jeff Gimmel, Proprietor, Le Perche Bakery & Bar</p>
                <button className='w-fit bg-black text-white px-sm py-2 hover:bg-black/50 self-center'>Learn More</button>
            </div>
            <Image src='/images/outdoor2.jpg' width={1000} height={550} alt='outdoors' className='lg:rounded-sm'/>
        </div>
    </main>
	);
};
