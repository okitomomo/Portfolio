import LifeEvent from './components/LifeEvent.jsx';
import { myLifes } from './MyLifeData.js';


export default function MyLife() {
    return (
        <section id="my-life" className="px-2 md:px-6 overflow-x-hidden">
            <div className="text-2xl font-eng text-center md:text-left my-12">My life</div>
            <div className="relative w-[90%] m-auto px-4 py-12 md:px-12">
                {/* 縦線（タイムライン） */}
                <div className="absolute md:left-1/2 top-0 -translate-x-1/2 w-px h-full bg-white"></div>
                <div id="mylifes-data">
                    {
                        myLifes.map((myLife, index) => (
                            <LifeEvent 
                                lifeEvent={ myLife }
                                index={ index }
                                key={ index }
                            />
                        ))
                    }                   
                </div>
            </div>
        </section>
    );
}
