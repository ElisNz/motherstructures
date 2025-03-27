'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const MobileMenu = () => {
        return (
            <div className="absolute top-0 right-0 w-full h-screen bg-white z-10">
                <button type='button' className="bg-black absolute top-0 right-0 p-sm lg:hidden" onClick={() => setMenuOpen(!menuOpen)} title='nav menu'>
                  <Image
                      src="/vercel.svg"
                      color='#FFFFFF'
                      alt="Hamburger Menu"
                      width={40}
                      height={40}
                      className='h-auto'
                  />
              </button>

                <nav className="flex flex-col gap-4 items-center justify-center h-full text-3xl font-[Vollkorn, serif] tracking-widest underline-offset-2 [text-shadow:_0_0px_2px_#FFFFFF]">
                    <Link className=" hover:underline px-4" href="/projects">
                        Projects
                    </Link>
                    <Link className=" hover:underline px-4" href="/design">
                        Design and Material
                    </Link>
                    <Link className=" hover:underline px-4" href="/about">
                        Our Story
                    </Link>
                    <Link className=" hover:underline px-4" href="/contact">
                        Contact Us
                    </Link>
                    <Link className=" hover:underline px-4" href="/inspiration">
                        Inspiration
                    </Link>
                </nav>
            </div>
        );
    }

    return (
        <header className="absolute w-full h-fit flex flex-row items-center justify-between py-sm px-md lg:px-20">
            <Link href="/" className="w-1/2">
                <Image
                    src="/images/MOTHERSTRUCTURES-LOGO-red-B-PNG.jpg"
                    alt="Mother Structures Logo"
                    priority
                    width={300}
                    height={50}
                    className="h-auto hover:cursor-pointer"
                />
            </Link>

            <button type='button' className="bg-blue absolute top-0 right-0 p-sm lg:hidden" onClick={() => setMenuOpen(!menuOpen)} title='navMenu'>
                <Image
                    src="/vercel.svg"
                    alt="Hamburger Menu"
                    width={40}
                    height={40}
                    className='h-auto'
                />
            </button>

            {menuOpen && <MobileMenu />}

            <nav className="max-lg:hidden flex flex-row items-center text-center text-nowrap font-sans tracking-widest underline-offset-2 divide-x divide-black [text-shadow:_0_0px_2px_#FFFFFF]">
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
