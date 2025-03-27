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
            className="relative size-[350px] lg:size-[400px] xl:size-[350px] transition-all duration-1000 text-black"
        >
            <Image
                src={img}
                alt={title}
                fill
                className="object-cover rounded-sm"
            />
            <div className="absolute size-full flex flex-col items-center justify-center bg-white/10 transition duration-300 hover:bg-white/50">
                <div className="p-md bg-white/60 text-center rounded-sm [text-shadow:_0.8px_0.3px_0px_#568faa86]">
                    <h3 className='text-[1.5em]'>{title}</h3>
                    <h4 className="font-sans">{description}</h4>
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
        title: 'Hudson Milliner',
        img: '/images/Hudson_Milliner-WA0063.jpg',
        description: 'Outdoor Canopy',
        slug: 'hudson-milliner',
    },
    {
        title: 'Secret Garden',
        img: '/images/Secret-Garden-sidewalk-1.jpg',
        description: 'Outdoor Canopy',
        slug: 'secret-garden',
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
            <div className='py-lg mx-sm lg:mx-lg'>
              <div className="flex flex-row justify-center">
                  <h2 className="px-sm md:px-lg xl:px-xl max-md:text-center">
                      Each Motherstructure that we have built is a site-specific
                      solution for small or large spaces with unique needs.
                  </h2>
              </div>
              <div className="h-fit flex flex-col md:flex-row py-lg">
                  <div className="h-fit flex flex-wrap gap-4 justify-center px-sm xl:px-lg">
                      {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                      ))}
                  </div>
              </div>
            </div>
        </>
    );
}
