import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className="absolute w-full h-fit flex flex-row items-center justify-between py-4 px-8 lg:px-20">
            <Link href="/" className="w-1/2">
                <Image
                    src="/images/MOTHERSTRUCTURES-LOGO-red-B-PNG.jpg"
                    alt="Mother Structures Logo"
                    width={300}
                    height={50}
                    className="hover:cursor-pointer"
                />
            </Link>
            <nav className="max-lg:hidden flex flex-row items-center text-center text-nowrap font-sans tracking-widest underline-offset-2 divide-x divide-black [text-shadow:_1px_0.5px_2px_#FFFFFF]">
                <Link className=" hover:underline px-2" href="/projects">
                    Projects
                </Link>
                <Link className=" hover:underline px-2" href="/design">
                    Design and Material
                </Link>
                <Link className=" hover:underline px-2" href="/about">
                    Our Story
                </Link>
                <Link className=" hover:underline px-2" href="/contact">
                    Contact Us
                </Link>
                <Link className=" hover:underline px-2" href="/inspiration">
                    Inspiration
                </Link>
            </nav>
        </header>
    );
};
