'use client';
import { useState } from 'react';
import Link from 'next/link';

export const FAQ = () => {
    const item = (question: string, answer: string) => {
        const [open, setOpen] = useState(false);

        return (
            <div
                className="w-full flex flex-col bg-black text-white hover:cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <p className=" p-4 hover:bg-black/50 text-starte">{question}</p>
                {open && (
                    <p className="w-full bg-black text-white px-8 pb-8 hover:bg-black/50 breadtext border-b-2 border-white">
                        {answer}
                    </p>
                )}
            </div>
        );
    };
    //TODO: FIX hyperlink
    const items = [
        item(
            'Are Motherstructures safe?',
            'Yes, they are extremely stable. In structural engineering, this type of construction is known as tensile structures. Because the grid is ultra-light and supported by rigid, bending elements, it’s held together by forces of tension and compression that make it very strong. The even distribution of weight also allows the structure to withstand powerful storms and carry heavy loads (more than 40 lbs per square foot) without breaking. And, if, by some kind of freak accident, a part of it would break, only a small section would be impacted while the rest of the construction would hold.',
        ),
        item(
            'How long does it take to build a Motherstructure?',
            'The assembly process is very simple and therefore very fast. Of course, the time of construction depends on the size of the structure, but a canopy is typically built within days. A larger covered courtyard usually takes a couple of weeks.',
        ),
        item(
            'Are Motherstructures environmentally friendly?',
            'Yes! There’s hardly any waste because you can calculate and cut the material with great precision. It is also easy to modify and adapt the design of the structures using existing materials. The minimal waste and reusability also make the systems cost-effective.',
        ),
        item(
            'How do I get my own Motherstructure?',
            `The first step is to ${(<Link href="/contact">get in touch with us to start a conversation</Link>)}. From there, we will set a budget and timeline and then research your space to present a customized design concept. Once we have aligned on the vision, we will create a blueprint and build your Motherstructure from scratch onsite.`,
        ),
    ];

    return (
        <div className="bg-black text-white divide-y-2 divide-white m-20 p-20 rounded-sm">
            <h1>FAQ</h1>
            <ul className="">
                {items.map((item, index) => (
                    <li key={index} className="list-disc">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
