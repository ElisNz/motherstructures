import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="w-full h-fit flex flex-row items-baseline justify-between py-lg px-4 lg:px-20 font-geist text-white bg-black/70">
            <div className="flex flex-col gap-2 max-md:hidden">
                <h3>Motherstructures</h3>
                <p>Building transformative spaces.</p>
            </div>

            <div className="flex flex-row md:gap-12">
                <div className="flex flex-col gap-2 md:gap-8 underline-offset-2">
                    <h3>About</h3>
                    <Link className=" hover:underline" href="#services">
                        Design and Material
                    </Link>
                    <Link className=" hover:underline" href="#contact">
                        Contact
                    </Link>
                </div>
                <div className="flex flex-col gap-2 md:gap-8 underline-offset-2">
                    <h3>Social</h3>
                    <Link className=" hover:underline" href="#services">
                        Design and Material
                    </Link>
                    <Link className=" hover:underline" href="#contact">
                        Contact
                    </Link>
                </div>
                <div className="flex flex-col gap-2 md:gap-8 underline-offset-2">
                    <h3>Privacy</h3>
                    <Link className=" hover:underline" href="#services">
                        Design and Material
                    </Link>
                    <Link className=" hover:underline" href="#contact">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
};
