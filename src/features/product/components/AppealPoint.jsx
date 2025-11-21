export default function AppealPoint({ caption }) {
    return (
        <section className="my-4 px-2 md:px-6 py-12 bg-[#191919]">
            <div className="pb-2 border-b-2 border-[#ff3c56] text-2xl font-eng text-center md:text-left">Appeal Point</div>
            <div 
                className="w-5xl mx-auto px-4 py-12 md:px-12 font-thin leading-relaxed"
                dangerouslySetInnerHTML={{ __html: caption }}
            >
            </div>
            
        </section>
    );
}