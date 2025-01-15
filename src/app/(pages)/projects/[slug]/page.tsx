import { HeroImage } from "@/app/components/HeroImage";
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'Chez Oscar',
        slug: 'chez-oscar',
        heroImage: '/images/outdoor1.jpg',
        description: 'Chez Oscar - Sidewalk and roadside canopies',
        quote: 'We transformed our outdoor dining experience with a strong and efficient solution that exceeded my expectations',
        attributee: 'Charlotta Janssen - Owner, Chez Oscar',
        topImage: '/images/200709_Chez_Oskar_ 200730_Hudson_ 0759 1.jpg',
        topText: `Chez Oskar’s sidewalk and roadside canopies are the original Motherstructures. 
                They were born as a response to the restaurant’s struggle with outdoor dining tents (a lifeline during pandemic restrictions in 2021) as they kept blowing away and leaking rain on customers. 
                Motherstructure founder Charlotta, who also owns Chez Oskar, was determined to build something better and adopted “Fight ugly times with beauty” as her rallying cry. 
                The initial inspiration was Art Nouveau architect Hector Guimard’s iconic sloping canopies for Paris Metro stations.`,
        sections: [
            {
                img: '/images/200709_Chez_Oskar_ 200730_Hudson_ 0759 1.jpg', 
                text: `Chez Oskar’s sidewalk and roadside canopies are the original Motherstructures. 
                    They were born as a response to the restaurant’s struggle with outdoor dining tents (a lifeline during pandemic restrictions in 2021) as they kept blowing away and leaking rain on customers. 
                    Motherstructure founder Charlotta, who also owns Chez Oskar, was determined to build something better and adopted “Fight ugly times with beauty” as her rallying cry. 
                    The initial inspiration was Art Nouveau architect Hector Guimard’s iconic sloping canopies for Paris Metro stations.`
            },
            {
                img: '/images/Chez-Oskar-E.jpg', 
                text: `Researching materials, Charlotta discovered that ultra-light steel pipes and corrugated clear polycarbonate siding were perfect for the kind of dining structures she wanted to create. 
                    The versatile system gave her the freedom to create canopies with curves and connections of various angles. The flexible assembly also allowed for easy modifications and “editing.”`
            },
            {
                img: '/images/Chez-Oskar-DM-Resize.jpg', 
                text: `The Motherstructures bring consistent capacity for the business and a beautiful and comfortable environment for all: diners, pedestrians, wheelchair users, and staff. 
                    The canopy’s slim profile offers clear sightlines while taking up minimal sidewalk space. 
                    Plants thrive in the abundant light, and so do guests who love the greenhouse/winter garden atmosphere.`,
            },
        ],
        bottomImage: '/images/200709_Chez_Oskar_ 200730_Hudson_ 0759 1.jpg',
    },
    {
        id: 2,
        title: 'Le Perche',
        slug: 'le-perche',
        heroImage: '/images/230609_Le_Perche_ 15.jpg',
        textColor: 'white',
        description: 'Le Perche - Covered Courtyard with transom windows',
        quote: 'The structure is not only beautiful but cost-effective. When we initially looked into covering the courtyard, every other solution was two or three times more expensive and nowhere near as unique.',
        attributee: 'Jeff Gimmel - Proprietor, Le Perche',
        topImage: '/images/230609_Le_Perche_ 5.jpg',
        topText: `The soaring Motherstructure that covers the large patio of this popular French-inspired bakery and restaurant in Hudson, New York, solved several business-critical problems. 
                    It connected the rear building that houses the bakery with the main restaurant, allowing the all-day, back-and-forth transportation of baked goods to run smoothly without weather interference. 
                    It also gave the restaurant a nearly year-round oasis for events and consistent capacity dining.`,
        sections: [
            {
                img: '/images/230609_Le_Perche_ 5.jpg', 
                text: `Chez Oskar’s sidewalk and roadside canopies are the original Motherstructures. 
                They were born as a response to the restaurant’s struggle with outdoor dining tents (a lifeline during pandemic restrictions in 2021) as they kept blowing away and leaking rain on customers. 
                Motherstructure founder Charlotta, who also owns Chez Oskar, was determined to build something better and adopted “Fight ugly times with beauty” as her rallying cry.
                The initial inspiration was Art Nouveau architect Hector Guimard’s iconic sloping canopies for Paris Metro stations.`
            },
            {
                img: '/images/Chez-Oskar-E.jpg', 
                text: `Researching materials, Charlotta discovered that ultra-light steel pipes and corrugated clear polycarbonate siding were perfect for the kind of dining structures she wanted to create. 
                    The versatile system gave her the freedom to create canopies with curves and connections of various angles. The flexible assembly also allowed for easy modifications and “editing.”`
            },
            {
                img: '/images/Chez-Oskar-DM-Resize.jpg', 
                text: `The Motherstructures bring consistent capacity for the business and a beautiful and comfortable environment for all: diners, pedestrians, wheelchair users, and staff. 
                    The canopy’s slim profile offers clear sightlines while taking up minimal sidewalk space. 
                    Plants thrive in the abundant light, and so do guests who love the greenhouse/winter garden atmosphere.`,
            },
        ],
        bottomImage: '/images/200709_Chez_Oskar_ 200730_Hudson_ 0759 1.jpg',
    },
];

/* export async function generateStaticParams() {
    return projects.map((project) => ({
        params: {
            slug: project.slug,
        },
    }));
} */

export default async function Project({ params } : {params: Promise<{ slug: string }>}) {
    const { slug } = await params;
    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    const { title, heroImage, topImage, topText, textColor, description, quote, attributee, sections, bottomImage } = project;

    return (
        <main>
            <HeroImage src={heroImage} text={description} textcolor={textColor} />
            <div className="flex flex-col gap-2 bg-primary items-center m-lg p-lg rounded-sm">
                <h3>"{quote}"</h3>
                <p className="self-end">{attributee}</p>
            </div>
            <div className="flex flex-col gap-y-4 mx-lg p-lg bg-secondary rounded-sm">
                <div className="flex flex-row items-center">
                    <div className="relative w-2/3 min-h-[400px]">
                        <Image src={topImage} alt="A large image depicting the site" fill className="object-cover rounded-sm" />
                    </div>
                    <h2 className="w-1/3 text-pretty text-center">About {title}</h2>
                </div>

                <p className="breadtext text-pretty">{topText}</p>
            </div>
            <div className="m-lg px-lg">
                {sections.map((section, index) => (
                    index % 2 === 0 ? (
                        <div key={index} className="flex flex-col lg:flex-row items-center p-md">
                            <img src={section.img} alt={title} className="w-1/2 max-h-[90dvh] rounded-sm" />
                            <p className="breadtext py-md px-lg">{section.text}</p>
                        </div>
                        ) : (
                        <div key={index} className="flex flex-col lg:flex-row items-center p-md">
                            <p className="breadtext py-md px-lg text-pretty">{section.text}</p>
                            <img src={section.img} alt={title} className="w-1/2 max-h-[90dvh] rounded-sm" />
                        </div>)
                ))}
            </div>
        </main>
    );
}