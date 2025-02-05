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
        sectionsl: [
            {
                img: '/images/200709_Chez_Oskar_ 200730_Hudson_ 0759 1.jpg', 
                text: `Researching materials, Charlotta discovered that ultra-light steel pipes and corrugated clear polycarbonate siding were perfect for the kind of dining structures she wanted to create. 
                The versatile system gave her the freedom to create canopies with curves and connections of various angles. The flexible assembly also allowed for easy modifications and “editing.”`
            },
            {
              img: '/images/Chez-Oskar-E.jpg', 
          },
        ],
        sectionsr: [
            {
                img: '/images/Chez-Oskar-DM-Resize.jpg', 
                text: `Chez Oskar’s sidewalk and roadside canopies are the original Motherstructures. 
                They were born as a response to the restaurant’s struggle with outdoor dining tents (a lifeline during pandemic restrictions in 2021) as they kept blowing away and leaking rain on customers. 
                Motherstructure founder Charlotta, who also owns Chez Oskar, was determined to build something better and adopted “Fight ugly times with beauty” as her rallying cry. 
                The initial inspiration was Art Nouveau architect Hector Guimard’s iconic sloping canopies for Paris Metro stations.`
            },
            {
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
        sectionsl: [
            {
                img: '/images/230609_Le_Perche_ 5.jpg', 
                text: `When the weather cools down in the fall, modular walls can be added to block drafty passages. Because the design is flexible and versatile, it’s easy to build around existing architectural elements like staircases and ledges. The material is cut and customized to precision and suspended in ways that take up minimal space. Invisible built-in gutters direct rainwater away from walls while being easy to clean and maintain.`
            },
            
            {
                img: '/images/Le Perche by night.jpg', 
            },
        ],
        sectionsr: [
          {
            img: '/images/Le Perche IG pic.png', 
            text: `The design, especially the lofty 20-foot center cupola, was inspired by the Art Nouveau architecture of Victorian winter gardens, but rendered in a modern, modular, and low-maintenance version. The structure has been engineered to naturally provide ventilation and cooling, as air circulates through the remote-controlled electric transoms and side windows.`
          },
          {
            text: `The Motherstructures bring consistent capacity for the business and a beautiful and comfortable environment for all: diners, pedestrians, wheelchair users, and staff. 
            The canopy’s slim profile offers clear sightlines while taking up minimal sidewalk space. 
            Plants thrive in the abundant light, and so do guests who love the greenhouse/winter garden atmosphere.`,
          },  
        ],
        bottomImage: '/images/Le Perche Copula drawing.jpg',
        bottomText: 'The Motherstructures bring consistent capacity for the business and a beautiful and comfortable environment for all: diners, pedestrians, wheelchair users, and staff.',
    },
    {
      id: 3,
      title: 'Little Egg',
      slug: 'little-egg',
      heroImage: '/images/little-egg-cover.jpg',
      textColor: 'white',
      description: 'Little Egg — Courtyard Canopy',
      quote: 'Our Motherstructure has dramatically improved the use of our outdoor dining area. It’s built in such a way that it really communicates with and enhances the space, making the backyard even more pleasant to be in. Everyone who sees it for the first time responds with some wide-eyed version of ‘This is amazing!’',
      attributee: 'Evan Hanczor, Chef and Owner, Little Egg',
      topImage: '/images/Little Egg is progressc.jpg',
      topText: `With its petite dining room, the popular Prospect Heights restaurant Little Egg depends on its backyard to seat its overflow of customers. 
        Before the space was covered, its usage was limited by rain and chilly weather. 
        With the Motherstructure in place, the courtyard can be used almost year-round, consistently cutting down on wait times and speeding up table turnover, which dramatically increases the number of customers served in a day, benefitting both the staff and the business itself.`,
      sectionsl: [
          {
              img: '/images/Little Egg.jpg', 
              text: `The design’s natural cooling system of strategically placed transom windows promotes air circulation, which lowers sweltering summer temperatures. Fans and misters push cooler air down while the rising hot air escapes through the vents. A sliding door, which has been built to provide access to the building’s side, blends in seamlessly with the wall.`
          },
          
          {
              img: '/images/little-egg-cover.jpg', 
          },
      ],
      sectionsr: [
        {
          img: '/images/little egg (1).jpg', 
          text: `The simplicity of the gently sloping structure harmonizes perfectly with Little Egg’s decorative built-in benches and abstract murals. The slim profile and modular construction allow the edges to snake around the large kitchen vent and negotiate space with the building’s fire escape. Clear gutters along the wall provide a beautiful visual of running water during rain, connecting the space to nature. `
        },
        {
          text: `The Motherstructures bring consistent capacity for the business and a beautiful and comfortable environment for all: diners, pedestrians, wheelchair users, and staff. 
          The canopy’s slim profile offers clear sightlines while taking up minimal sidewalk space. 
          Plants thrive in the abundant light, and so do guests who love the greenhouse/winter garden atmosphere.`,
        },  
      ],
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

    const { title, heroImage, topImage, topText, textColor, description, quote, attributee, sectionsl, sectionsr, bottomImage, bottomText } = project;

    return (
        <main>
            <HeroImage src={heroImage} text={description} textcolor={textColor} />
            <div className="flex flex-col gap-2 items-center mx-lg p-lg rounded-sm tracking-tighter">
                <h3 className="text-center">"{quote}"</h3>
                <p className="self-end">{attributee}</p>
            </div>
            <div className="flex flex-col gap-y-4 mx-md p-lg bg-primary text-white rounded-sm">
                <div className="flex flex-row items-center">
                    <div className="relative w-2/3 min-h-[400px]">
                        <Image src={topImage} alt="A large image depicting the site" fill className="object-cover rounded-sm" />
                    </div>
                    <h2 className="w-1/3 text-pretty text-center">About {title}</h2>
                </div>
                <p className="breadtext text-pretty">{topText}</p>
            </div>
            <div className="mx-md my-md px-lg grid grid-cols-2 tracking-wide gap-[1rem]">
              <div className="w-full flex flex-col shrink-1">
                {sectionsl?.map((section, index) => (
                        <div key={index} className="flex flex-col items-end">
                          {section.img &&
                          <div className="relative w-full h-[60vh]">
                              <Image src={section.img} alt={title} fill className="max-h-[90vh] rounded-sm object-cover" />
                            </div>
                          }
                            <p className="breadtext py-lg px-md">{section.text}</p>
                        </div>
                ))}                
              </div>
              <div className="flex flex-col shrink-1">
                {sectionsr?.map((section, index) => (
                        <div key={index} className="flex flex-col items-start">
                          <p className="breadtext py-lg px-md">{section.text}</p>
                          {section.img &&
                            <div className="relative w-full h-[80vh]">
                              <Image src={section.img} alt={title} fill className="max-h-[90vh] rounded-sm object-cover" />
                            </div>
                          }
                          
                        </div>
                  ))}
                </div>
                
            </div>
            {bottomImage && bottomText &&
                  <div className="flex flex-col mb-lg mt-md mx-lg gap-2 items-center">
                    <Image src={bottomImage} alt={title} width={700} height={2000} className="max-h-[90vh] rounded-sm" />
                    <p className="w-1/2 footnote text-pretty text-center p-sm">{bottomText}</p>
                  </div>
                }
        </main>
    );
}
