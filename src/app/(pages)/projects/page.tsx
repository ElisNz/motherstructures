import { HeroImage } from '@/app/components/HeroImage';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({
    title,
    img,
    description,
    slug,
}: {
    title: string;
    img: string;
    description: string;
    slug: string;
}) => {
    return (
        <Link
            href={`projects/${slug}`}
            className="relative w-[450px] h-[400px] transition-all duration-1000 hover:w-[500px] text-black shadow-[5px_5px_0_0_#283033] hover:shadow-[-5px_-5px_0_0_#283033]"
        >
            <Image
                src={img}
                alt={title}
                fill
                className="object-cover rounded-sm"
            />
            <div className="absolute size-full flex flex-col items-center justify-center bg-white/10 transition duration-300 hover:bg-white/50">
                <div className="p-lg bg-white/60 text-center rounded-sm">
                    <h3>{title}</h3>
                    <h4 className="text-[0.9rem]">{description}</h4>
                </div>
            </div>
        </Link>
    );
};

const projects = [
    {
        title: 'Le Perche',
        img: '/images/230609_Le_Perche_ 15.jpg',
        description: 'Courtyard',
        slug: 'le-perche',
    },
    {
        title: 'Chez Oscar',
        img: '/images/outdoor1.jpg',
        description: 'Outdoor Canopy',
        slug: 'chez-oscar',
    },
    {
        title: 'Little Egg',
        img: '/images/little-egg-cover.jpg',
        description: 'Outdoor Canopy',
        slug: 'little-egg',
    },
    {
        title: 'La Nacional',
        img: '/images/La Nacional 3.jpg',
        description: 'Outdoor Canopy',
        slug: 'la-nacional',
    },
    {
        title: 'DSK Canopy',
        img: '/images/outdoor2.jpg',
        description: 'Outdoor Canopy',
        slug: 'dsk-canopy',
    },
    {
        title: 'Hudson Milliner',
        img: '/images/Hudson_Milliner-WA0063.jpg',
        description: 'Outdoor Canopy',
        slug: 'hudson-milliner',
    },
    {
        title: 'Anmwey Eatery',
        img: '/images/amnway.jpg',
        description: 'Outdoor Canopy',
        slug: 'amnway',
    },
    {
        title: 'Secret Garden',
        img: '/images/Secret-Garden-sidewalk-1.jpg',
        description: 'Outdoor Canopy',
        slug: 'secret-garden',
    },
    {
        title: 'Zaca Cafe',
        img: '/images/Zaca-Cefe-fyg.jpg',
        description: 'Outdoor Canopy',
        slug: 'zaca',
    },
];

export default function Projects() {
    return (
        <>
            <HeroImage
                src="/images/230609_Le_Perche_ 6 copy.jpg"
                text="Explore our projects"
                textcolor="white"
            />
            <div className="m-lg flex flex-row justify-center">
                <h2 className="w-3/4 px-md">
                    Each Motherstructure that we have built is a site-specific
                    solution for small or large spaces with unique needs.
                </h2>
            </div>
            <div className="h-fit flex flex-row m-lg bg-secondary text-white p-lg shadow-[5px_5px_0_0_#283033]">
                <h2 className="w-1/3">Our Projects</h2>
                <div className="h-fit flex flex-wrap justify-evenly gap-y-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </>
    );
}
