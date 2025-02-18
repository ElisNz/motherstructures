import Link from 'next/link';
import { HeroImage } from "@/app/components/HeroImage";
import Image from 'next/image';

export default function Design() {
  return (
    <>
      <HeroImage src="/images/Chez Oskar canopy in progress.jpg" text="Fast to build, easy to modify" textcolor="white" />
      <div className='flex flex-col gap-8 m-lg p-lg bg-secondary text-white'>
        <h2 className="text-end">Motherstructures are modular, durable, lightweight, and completely one-of-a-kind. Because of the flexibility of our systems, we can design and customize each project from scratch, turning any modification into an elegant design feature.</h2>
        <div className='flex flex-row items-center'>
          <div className='w-1/2 px-lg tracking-widest'>
            <h2 className='text-[2em] font-bold'>More space, less hassle</h2>
            <p className='pt-sm text-[1em]'>Our structures are engineered with modular components. This allows us to maximize every inch of space and easily work around nooks and crannies.</p>
          </div>
          <div className='relative w-1/2 h-[50vh]'>
            <Image src='/images/230609_Le_Perche_ 15.jpg' fill alt='outdoors' className='lg:rounded-sm object-cover'/>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='relative w-1/2 h-[50vh]'>
            <Image src='/images/240517_ Anononymous Detail shot.jpg' fill alt='outdoors' className='lg:rounded-sm object-cover'/>
          </div>
          <div className='w-1/2 px-lg tracking-widest'>
            <h2 className='text-[2em] font-bold'>Simple materials that solve complex problems</h2>
            <p className='pt-sm text-[1em]'>We use a proprietary system of flexible piping and corrugated clear plastic. 
              It’s light, durable, user-friendly, and infinitely versatile. 
              It’s fast to build and easy to remove and modify according to seasonal needs.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-lg my-md px-lg flex flex-row justify-center bg-primary">
        <div className="flex flex-col gap-2 items-center mx-lg p-lg rounded-sm tracking-tighter">
            <h2 className="text-pretty tracking-tighter">"Our Motherstructure provides shelter from the elements and a unique ambiance that allows guest to enjoy fresh air and views of their surroundings."</h2>
            <p className="self-end">Joy Thomas, Owner, Secret Garden Juice Bar & Tea House</p>
            <div className='relative w-full h-[50vh]'>
              <Image src='/images/Hudson-Milliner-DM.jpg' fill alt='outdoors' className='lg:rounded-sm object-cover'/>
            </div>
        </div>
      </div>
      <div className="m-lg p-lg flex flex-row items-center bg-tertiary text-white">
          <Image src='/images/Chez-Oskar-DM-Resize.jpg' width={800} height={500}  alt='outdoors' className='basis-1/3 lg:rounded-sm'/>
          <div className='basis-4/5 flex flex-col gap-8 items-center p-lg'>
              <h3 className="text-pretty leading-8 p-md">Motherstructures has great respect for Mother Nature. We use sustainable technologies for heating and cooling. We also harvest rainwater runoff to feed indoor and outdoor gardens.</h3>
              <div className='flex flex-row gap-8 leading-6 px-md text-pretty'>
              <div className='flex flex-col gap-4'>
                <h3 className='font-sans text-bold text-[1.8em] text-center'>Responsible heating</h3>
                <p className='text-[0.9rem]'>Pellet stoves, which burn waste material from furniture manufacturing, are a perfect complement to Motherstructures. They’re low-energy consumers and heat your space safely and efficiently.</p>
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='font-sans text-bold text-[1.8em] text-center'>Low-tech cooling</h3>
                <p className='text-[0.9rem]'>During summer days, our covered courtyards are naturally cooled when the rising hot air circulates through high transom windows. We also work with fans and misters to cool down the air closer to the ground.</p>
              </div>
            </div>
            <h3 className='leading-8 p-md'>Our lightweight grid of metal pipes and plastic allows for an even weight distribution with multiple anchorpoints. <br />This results in a safe and sturdy structure that can weather extreme storms and carry heavy snow loads (well above the NY state rule of 40 lbs per sq. foot)</h3>
          </div>
          
          
      </div>
      <div className='flex flex-col items-center gap-8 m-lg py-md'>
        <h1>Contact us</h1>
        <p>Curious about what your very own Motherstructure could look like? <br />
          Tell us about your space and we will send some ideas.
        </p>
        <Link href="/about" className='w-1/4 bg-black/70 text-white text-center p-sm hover:bg-black/50 rounded-sm'>Get in touch</Link>
      </div>
    </>
  );
};
