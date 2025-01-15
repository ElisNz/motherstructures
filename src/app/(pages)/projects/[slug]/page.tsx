import { HeroImage } from "@/app/components/HeroImage";

const projects = [
    {
        id: 1,
        title: 'Chez Oscar',
        slug: 'chez-oscar',
        heroImage: '/images/outdoor1.jpg',
        description: 'Chez Oscar - Sidewalk and roadside canopies',
        quote: 'We transformed our outdoor dining experience with a strong and efficient solution that exceeded my expectations',
        attributee: 'Charlotta Janssen - Owner, Chez Oscar',
        sections: [
            {
                img: '/images/Chez-Oskar-2.jpg', 
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
        sections: [
            {
                img: '/images/Chez-Oskar-2.jpg', 
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

    const { title, heroImage, textColor, description, quote, attributee, sections, bottomImage } = project;

    return (
        <main>
            <HeroImage src={heroImage} text={description} textcolor={textColor} />
            <div className="flex flex-col gap-2 bg-primary items-center m-lg p-lg">
                <h3>"{quote}"</h3>
                <p className="self-end">{attributee}</p>
            </div>
            {sections.map((section, index) => (
                <div key={index} className="flex flex-col lg:flex-row gap-2 bg-backgroud items-center m-lg p-lg">
                    <img src={section.img} alt={title} />
                    <p>{section.text}</p>
                </div>
            ))}
        </main>
    );
}