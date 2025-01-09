import Image from 'next/image';

export const HeroImage = ({src, absolute, text} : {src: string, absolute?: boolean, text?: string}) => {
    return (
        <div className={`${absolute ? 'absolute' : 'relative'} w-full h-full overflow-hidden -z-40`}>
            <div className="absolute w-full h-[40vh] md:h-[75vh] lg:h-screen flex flex-col justify-center items-center mix-blend-normal">
                <h1 className='invisible sm:visible lg:px-20 lg:text-[2.5rem] xl:text-[3.5rem]'>{text}</h1>
            </div>
            <div className="relative w-full h-screen -z-50">
                <Image fill className='object-cover' src={src} alt='cover image' />
            </div>
        </div>
    )
  };
