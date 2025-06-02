import Link from 'next/link';
import Image from 'next/image';


const images = [
    {
        title: 'Le Perche',
        img: '/images/Le_Perche.jpg',
        slug: 'le-perche',
    },
    {
      title: 'Motherstructures Video',
      vid: '/videos/msvid.mp4',
      slug: '',
    },
    {
        title: 'La Nacional',
        img: '/images/La Nacional  2.jpg',
        slug: 'la-nacional',
    },
    {
        title: 'Chez Oskar',
        img: '/images/200709_Chez_Oskar_ 200730_Hudson_ 0759 1.jpg',
        slug: 'chez-oscar',
    },
    {
        title: 'Chez Oskar',
        img: '/images/210908_Oskar_ 23 copy.jpg',
        slug: 'chez-oscar',
    },
    {
        title: 'Le Perche',
        img: '/images/230518_Le_Perche_ 30 copy.jpg',
        slug: 'le-perche',
    },
    {
        title: 'Le Perche',
        img: '/images/230609_Le_Perche_ 5.jpg',
        slug: 'le-perche',
    },
    {
        title: 'Chez Oskar',
        img: '/images/Chez-Oskar-2.jpg',
        slug: 'chez-oscar',
    },
    {
        title: '230609_Le_Perche_5',
        img: '/images/230609_Le_Perche_ 5.jpg',
        slug: 'le-perche',
    },
    {
        title: '230609_Le_Perche_6 copy',
        img: '/images/230609_Le_Perche_ 6 copy.jpg',
        slug: 'le-perche',
    },
    {
        title: '230609_Le_Perche_15',
        img: '/images/230609_Le_Perche_ 15.jpg',
        slug: 'le-perche',
    },
    {
        title: '230714_Oskar_6 copy',
        img: '/images/230714_Oskar_ 6 copy.jpg',
        slug: 'chez-oscar',
    },
    {
        title: '230916_Oskar_0266',
        img: '/images/230916_Oskar_0266.jpg',
        slug: 'chez-oscar',
    },
    {
        title: '240517_ Anononymous Detail shot',
        img: '/images/240517_ Anononymous Detail shot.jpg',
        slug: '',
    },
    {
        title: '240517_ La_Nacional',
        img: '/images/240517_ La_Nacional .jpg',
        slug: 'la-nacional',
    },
    {
        title: '240517_ Nacional',
        img: '/images/240517_ Nacional.jpg',
        slug: 'la-nacional',
    },
    {
        title: 'About-Page-Section-2-1',
        img: '/images/About-Page-Section-2-1.jpg',
        slug: '',
    },
    { title: 'about', img: '/images/about.jpg', slug: 'about' },
    { title: 'amnway', img: '/images/amnway.jpg', slug: 'amnway' },
    {
        title: 'Chez Oskar canopy in progress',
        img: '/images/Chez Oskar canopy in progress.jpg',
        slug: 'chez-oscar',
    },
    {
        title: 'Chez_Oskar-Charlotta-1-1',
        img: '/images/Chez_Oskar-Charlotta-1-1.png',
        slug: 'chez-oscar',
    },
    {
        title: 'Chez-Oskar-2',
        img: '/images/Chez-Oskar-2.jpg',
        slug: 'chez-oscar',
    },
    {
        title: 'Chez-Oskar-DM-Resize',
        img: '/images/Chez-Oskar-DM-Resize.jpg',
        slug: 'chez-oscar',
    },
    {
        title: 'Chez-Oskar-E',
        img: '/images/Chez-Oskar-E.jpg',
        slug: 'chez-oscar',
    },
    {
        title: 'DSK-DM-f-crop',
        img: '/images/DSK-DM-f-crop.jpg',
        slug: 'dsk',
    },
    { title: 'gggsdfdf', img: '/images/gggsdfdf.jpg', slug: '' },
    { title: 'hhhggtt', img: '/images/hhhggtt.jpg', slug: '' },
    {
        title: 'Hudson_Clothier_5',
        img: '/images/Hudson_Clothier_ 5.jpg',
        slug: 'hudson-milliner',
    },
    {
        title: 'Hudson_Milliner-WA0056',
        img: '/images/Hudson_Milliner-WA0056-e1713846722840.jpg',
        slug: 'hudon-milliner',
    },
    {
        title: 'Hudson_Milliner-WA0063',
        img: '/images/Hudson_Milliner-WA0063.jpg',
        slug: 'hudon-milliner',
    },
    {
        title: 'Hudson_Milliner-WA00612',
        img: '/images/Hudson_Milliner-WA00612.jpg',
        slug: 'hudon-milliner',
    },
    {
        title: 'Hudson-Milliner-DM',
        img: '/images/Hudson-Milliner-DM.jpg',
        slug: 'hudon-milliner',
    },
    {
        title: 'IMG-20240201-DSK-WA00052',
        img: '/images/IMG-20240201-DSK-WA00052.jpg',
        slug: 'dsk',
    },
    {
        title: 'IMG-20240201-DSK-WA00102',
        img: '/images/IMG-20240201-DSK-WA00102.jpg',
        slug: 'dsk',
    },
    {
        title: 'IMG-20240201-WA0020',
        img: '/images/IMG-20240201-WA0020.jpg',
        slug: 'dsk',
    },
    {
        title: 'La Nacional 2',
        img: '/images/La Nacional  2.jpg',
        slug: 'la-nacional',
    },
    {
        title: 'La Nacional 3',
        img: '/images/La Nacional 3.jpg',
        slug: 'la-nacional',
    },
    {
        title: 'La Nacional Drawing',
        img: '/images/La Nacional Drawing.jpg',
        slug: 'la-nacional',
    },
    {
        title: 'Le Perche by night',
        img: '/images/Le Perche by night.jpg',
        slug: 'le-perche',
    },
    {
        title: 'Le Perche Copula drawing',
        img: '/images/Le Perche Copula drawing.jpg',
        slug: 'le-perche',
    },
    {
        title: 'Le Perche dome',
        img: '/images/Le Perche dome .png',
        slug: 'le-perche',
    },
    {
        title: 'Le Perche IG pic',
        img: '/images/Le Perche IG pic.png',
        slug: 'le-perche',
    },
    { title: 'Le Perche', img: '/images/Le Perche.jpg', slug: 'le-perche' },
    { title: 'Le_Perche', img: '/images/Le_Perche.jpeg', slug: 'le-perche' },
    { title: 'outdoor1', img: '/images/outdoor1.jpg', slug: 'le-perche' },
    { title: 'outdoor2', img: '/images/outdoor2.jpg', slug: 'le-perche' },
    {
        title: 'Projects-page-image-Anmwey-Eatery-1',
        img: '/images/Projects-page-image-Anmwey-Eatery-1.jpg',
        slug: 'anmway',
    },
    {
        title: 'Projects-page-image-Secret-Garden-fg',
        img: '/images/Projects-page-image-Secret-Garden-fg.jpg',
        slug: 'secret-garden',
    },
    {
        title: 'Secret-garden-11-aah',
        img: '/images/Secret-garden-11-aah.jpg',
        slug: 'secret-garden',
    },
    {
        title: 'secret-garden-gh',
        img: '/images/secret-garden-gh.jpg',
        slug: 'secret-garden',
    },
    {
        title: 'Secret-Garden-sidewalk-1',
        img: '/images/Secret-Garden-sidewalk-1.jpg',
        slug: 'secret-garden',
    },
    {
        title: 'Zaca-cafe-11',
        img: '/images/Zaca-cafe-11.jpg',
        slug: 'zaca',
    },
    {
        title: 'Zaca-Cefe-fyg',
        img: '/images/Zaca-Cefe-fyg.jpg',
        slug: 'zaca',
    },
];

const InspoCard = ({
    title,
    img,
    vid,
    slug,
}: {
    title: string;
    img?: string;
    vid?: string;
    slug: string;
}) => {
    return (
        <Link
            href={`projects/${slug}`}
            className="relative min-w-1/3 min-h-60 transition-all duration-1000 text-black m-xs bg-white/20"
        >
            {img &&
              <Image src={img} alt={title} width={1500} height={1500} />
            }
            {vid && 
              <div className='z-50 bg-red'>       
                <video 
                  controls={false}
                  preload='metadata'
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            }
            <div className="absolute min-w-1/4 min-h-1/4 bottom-0 right-0 m-sm justify-center text-[#283033] text-center transition duration-300 bg-white/40 hover:bg-white/50 rounded-xl">
                <h3 className="p-sm [text-shadow:_0px_0px_2px_#e8e8e8] font-sans font-semibold text-[18px] tracking-wide">{title}</h3>
            </div>
        </Link>
    );
};

export default function Inspiration() {
    const row1 = images.slice(0, images.length / 3);
    const row2 = images.slice(images.length / 3, (images.length / 3) * 2);
    const row3 = images.slice((images.length / 3) * 2, images.length);

    return (
        <>
            <div className="pt-[20vh] mx-lg content-end -z-10">
              <div className='flex flex-col md:flex-row justify-between'>
                <h1 className='align-top'>Inspiration Gallery</h1>
                <p className='md:w-2/3 md:pl-lg pt-[1.4rem]'>This is a collection of Motherstructures images that we have taken during the process of installing and maintaining motherstructures.
                  These are some examples of how our structures can actually look in action, as well as some creative ways that our clients have used them.
                </p>
              </div>
            </div>
            <div className="md:hidden flex flex-col justify-center m-lg">
              {images.map((image, index) => (
                        <InspoCard
                            key={index}
                            title={image.title}
                            img={image.img}
                            vid={image.vid}
                            slug={image.slug}
                        />
                    ))}
            </div>
            <div className="max-md:hidden flex flex-row justify-center m-lg">
                <div className="w-1/3 flex flex-col">
                    {row1.map((image, index) => (
                        <InspoCard
                            key={index}
                            title={image.title}
                            img={image.img}
                            vid={image.vid}
                            slug={image.slug}
                        />
                    ))}
                </div>
                <div className="w-1/3 flex flex-col">
                    {row2.map((image, index) => (
                        <InspoCard
                            key={index}
                            title={image.title}
                            img={image.img}
                            vid={image.vid}
                            slug={image.slug}
                        />
                    ))}
                </div>
                <div className="w-1/3 flex flex-col">
                    {row3.map((image, index) => (
                        <InspoCard
                            key={index}
                            title={image.title}
                            img={image.img}
                            vid={image.vid}
                            slug={image.slug}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
