import QualificationDetail from "./components/QualificationDetail";
import { qualifications } from "./QualificationData";

export default function Qualification() {
    return (
        <section id="qualification" className="bg-[#191919] px-2 md:px-6 py-6">
            <div className="text-2xl font-eng text-center md:text-left my-8">Qualification</div>
            <div className="max-w-5xl mx-auto px-2 md:px-12 py-6">
                <div id="qualifications-data" className="grid grid-cols-[80px_1fr] gap-x-6 gap-y-2 text-sm items-baseline font-thin mx-auto w-fit">
                    {
                        qualifications.map((qualification, index) => (
                            <QualificationDetail key={index} qualification={qualification} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}