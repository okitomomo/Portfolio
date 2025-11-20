import { workHistories } from './WorkHistoryData.js';
import WorkType from './components/WorkType.jsx';

export default function WorkHistory() {
    return (
        <section id="workhistory" className="my-4 px-2 md:px-6 py-12">
            <div className="text-2xl font-eng text-center md:text-left">Work history</div>
            <div className="w-5xl mx-auto px-4 py-12 md:px-12">
                <div id="workhistories-data" className="w-full items-baseline font-thin mx-auto ">
                    { workHistories.map((workHistory, index) => (
                        <WorkType 
                            workType={ workHistory }
                            key={ index }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}