import { useState, useLayoutEffect, useRef } from "react";

export default function LifeEvent({ lifeEvent, index }) {
    const [isFirst, setIsFirst] = useState(index == 0);
    const [dir, setDir] = useState(index % 2 == 0 ? 'left' : 'right');
    const [isDisplay, setIsDisplay] = useState(false);
    const contentRef = useRef(null);
    

    const displayHandler = () => {
        if (!contentRef.current) return;
        const rect = contentRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 300 && rect.bottom > 0;
        setIsDisplay(inView);
    };

    useLayoutEffect(() => {
        displayHandler();
        window.addEventListener("scroll", displayHandler);
        return () => {
            window.removeEventListener("scroll", displayHandler);
        };
    }, []);

    return (
        <div ref={ contentRef } className={`
            w-full md:w-1/2 ml-auto transition-all [transition-duration:1200ms] 
            ${ isFirst ? "" : "md:-mt-16 " }
            ${ dir == "left" ? "mr-0 md:mr-auto md:ml-0" : "" }
            ${ isDisplay ? 
                "" 
                : dir == "left" ? "opacity-0 translate-x-60 md:-translate-x-60" : "opacity-0 translate-x-60 "
            }
        `}>
            <div className={`
                text-right text-md border-b border-white py-4 relative
                after:content-[''] after:absolute after:w-3 after:h-3 after:bg-white after:rounded-full
                ${ dir == "left" ? 
                    "md:text-left after:-bottom-1.5 after:-left-1.5 after:right-auto md:after:left-auto md:after:-right-1.5" 
                    : "after:-bottom-1.5 after:-left-1.5" 
                }
            `}>
                <span>{ lifeEvent.ymd }</span>
                <span className="ml-3">{ lifeEvent.title }</span>
            </div>
            <div className={`
                text-sm pr-1 pl-8 py-2 md:py-6 font-thin
                ${ dir == "left" ? "md:pl-1 md:pr-8" : ""}
            `}>
                { lifeEvent.caption }
            </div>
        </div>
    );
}