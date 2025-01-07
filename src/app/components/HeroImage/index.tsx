import Image from 'next/image';

export const HeroImage = ({src, absolute} : {src: string, absolute?: boolean}) => {
    return (
        <div className={`${absolute ? 'absolute' : 'relative'} w-full h-full overflow-hidden -z-40`}>
            <div className="relative w-full h-screen -z-50">
                <Image fill className='object-cover' src={src} alt='cover image' />
            </div>
        </div>
    )
  };
