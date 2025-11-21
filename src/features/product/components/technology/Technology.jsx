import TechnologyCard from "./components/TechnologyCard";

export default function Technology({ technologies }) {
    return (
        <section className="my-4 px-2 md:px-6 py-12">
            <div className="text-2xl font-eng text-center md:text-left">Technology</div>
            <div className="flex flex-row px-2">
                <div className="text-xs md:hidden w-full text-center">※クリックすると詳しい説明が表示されます。</div>
                <div className="text-xs hidden md:block">※カーソルを乗せると詳しい説明が表示されます。</div>
            </div>
            <div className="w-5xl mx-auto px-4 py-12 md:px-12">

                <div className="flex flex-row flex-wrap justify-center gap-8 w-full ">
                    {
                        technologies.map((technology, index) => (
                            <TechnologyCard tech={technology} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}