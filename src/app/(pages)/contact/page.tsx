import { HeroImage } from '../../components/HeroImage';
import { useEffect } from 'react';
import ContactForm from '@/app/components/ContactForm';

export default function Contact() {
    useEffect(() => {
        document.getElementById('other')?.addEventListener('change', () => {
            document.getElementById('substrate')!.style.display =
                document.getElementById('substrate')?.style.display === 'block'
                    ? 'none'
                    : 'block';
        });
    }, []);

    const allowDrop = (e: any) => {
        e.preventDefault();
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        const dt = e.dataTransfer;
        const files = dt.files;
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            const output = document.getElementById('image');
            output!.appendChild(document.createElement('img')).src =
                reader.result as string;
        };
    };

    return (
        <main>
            <HeroImage
                src="/images/Hudson_Clothier_ 5.jpg"
                text="Build your own Motherstructure"
            />
            <h1 className="w-full my-lg text-center">Contact Us</h1>
            <div className="my-lg">
                <div className="flex flex-col justify-center items-center gap-20 p-lg">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
