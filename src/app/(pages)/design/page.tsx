import Link from 'next/link';
import { HeroImage } from "@/app/components/HeroImage";
import Image from 'next/image';

export default function Design() {
  return (
    <>
      <HeroImage src="/images/Chez Oskar canopy in progress.jpg" text="Fast to build, easy to modify" textcolor="white" />
      <div className="m-lg">
        <h2 className="px-md tracking-thin">Motherstructures are modular, durable, lightweight, and completely one-of-a-kind. Because of the flexibility of our systems, we can design and customize each project from scratch, turning any modification into an elegant design feature.</h2>
      </div>
      <div className='flex flex-col gap-8 m-lg p-lg bg-secondary text-white'>
        <div className='flex flex-row items-center'>
          <div className='w-1/2 px-lg tracking-widest'>
            <h2 className='text-[2em] font-sans font-bold'>More space, less hassle</h2>
            <p className='pt-sm text-[1.3em]'>Our structures are engineered with modular components. This allows us to maximize every inch of space and easily work around nooks and crannies.</p>
          </div>
          <div className='relative w-1/2 h-[50vh]'>
            <Image src='/images/230609_Le_Perche_ 15.jpg' fill alt='outdoors' className='lg:rounded-sm object-cover'/>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='relative w-1/2 h-[50vh]'>
            <Image src='/images/230609_Le_Perche_ 15.jpg' fill alt='outdoors' className='lg:rounded-sm object-cover'/>
          </div>
          <div className='w-1/2 px-lg tracking-widest'>
            <h2 className='text-[2em] font-sans font-bold'>Simple materials that solve complex problems</h2>
            <p className='pt-sm text-[1.3em]'>We use a proprietary system of flexible piping and corrugated clear plastic. 
              It’s light, durable, user-friendly, and infinitely versatile. 
              It’s fast to build and easy to remove and modify according to seasonal needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
