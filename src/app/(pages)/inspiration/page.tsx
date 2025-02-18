import Link from 'next/link';
import Image from 'next/image';

const images = [
  {
    title: 'test1',
    img: '/images/Le Perche.jpg',
    slug: 'le-perche'
  },
  {
    title: 'test2',
    img: '/images/La Nacional  2.jpg',
    slug: 'la-nacional'
  },
  {
    title: 'test3',
    img: '/images/La Nacional  2.jpg',
    slug: 'la-nacional'
  },
  {
    title: 'test4',
    img: '/images/La Nacional  2.jpg',
    slug: 'la-nacional'
  },
  {
    title: 'test5',
    img: '/images/Le Perche.jpg',
    slug: 'le-perche'
  },
  {
    title: 'test6',
    img: '/images/La Nacional  2.jpg',
    slug: 'la-nacional'
  },
  {
    title: 'test7',
    img: '/images/Chez-Oskar-2.jpg',
    slug: 'chez-oscar'
  },
];

const InspoCard = ({ title, img, slug } : {title: string, img: string, slug: string}) => {
  return (
      <Link href={`projects/${slug}`} className="relative transition-all duration-1000 text-black border-2 border-white border-solid">
          <Image src={img} alt={title} width={1500} height={1500} />
          <div className="absolute w-1/4 h-1/4 bottom-0 right-0 flex flex-col items-center justify-center text-white transition duration-300 bg-white/20 hover:bg-white/50">
              <div className="text-center rounded-sm">
                  <h3>{title}</h3>
              </div>
          </div>
      </Link>
  );
}

export default function Inspiration() {
  const row1 = images.slice(0, images.length / 3);
  const row2 = images.slice(images.length / 3, images.length / 3 * 2);
  const row3 = images.slice(images.length / 3 * 2, images.length);

    return (
      <>
        <div className="relative w-full h-[40vh] text-center content-end -z-10">
            <h1>Inspiration Gallery</h1>
        </div>
        <div className='flex flex-row justify-center m-lg'>
          <div className='flex flex-col'>
            {row1.map((image, index) => (
                <InspoCard title={image.title} img={image.img} slug={image.slug} />
            ))}
          </div>
          <div className='flex flex-col'>
            {row2.map((image, index) => (
                <InspoCard title={image.title} img={image.img} slug={image.slug} />
            ))}
          </div>
          <div className='flex flex-col'>
            {row3.map((image, index) => (
                <InspoCard title={image.title} img={image.img} slug={image.slug} />
            ))}
          </div>
        </div>
      </>
    )
};
