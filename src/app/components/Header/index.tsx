import Image from 'next/image';
import Link from 'next/link';


export const Header = () => {
    return (
        <header className="absolute w-full h-fit flex flex-row items-center justify-between py-4 px-8 lg:px-20">
            <Link href="/" className='w-1/2'>
                <Image src='/images/MOTHERSTRUCTURES-LOGO-red-B-PNG.jpg' alt="Mother Structures Logo" width={300} height={50} className='hover:cursor-pointer' />
            </Link>
            <nav className="max-lg:hidden flex flex-row items-center text-center text-nowrap gap-4 lg:gap-8 underline-offset-2 text-black text-[1rem] font-bold">
                <Link className=" hover:underline" href="/projects">Projects</Link>
                <Link className=" hover:underline" href="/services">Design and Material</Link>
                <Link className=" hover:underline" href="/about">Our Story</Link>
                <Link className=" hover:underline" href="/contact">Contact Us</Link>
                <Link className=" hover:underline" href="/inspiration">Inspiration</Link>
            </nav>
        </header>
    )
};
