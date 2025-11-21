import { useEffect, useState } from "react";
import Markdown from "../../components/Markdown.jsx";

export default function Description({ product }) {
    const [descriptionMd, setDescriptionMd] = useState("");

    useEffect(() => {
        async function loadMarkdown() {
            console.log('aaa');
            const res = await fetch(`/Portfolio/product/${product.id}/description.md`);
            const text = await res.text();
            setDescriptionMd(text);
        }
        loadMarkdown();       
    }, [product]);

    return (
        <section className="my-4 px-2 md:px-6 py-12 bg-[#191919]">
            <div className="text-2xl font-eng text-center md:text-left">Description</div>
            <div className="w-5xl mx-auto px-4 py-12 md:px-12">
                <div className="w-full items-baseline font-thin mx-auto ">
                    <Markdown>
                        { descriptionMd }
                    </Markdown>
                </div>
            </div>
        </section>
    );
}