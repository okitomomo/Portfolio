import { useState, useRef, useEffect } from "react";

export default function Business ({business}) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    /** アコーディオン */
    const accordionHandler = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            setMaxHeight(contentRef.current.scrollHeight + "px");
        } else {
            setMaxHeight("0px");
        }
    }, [isOpen]);

    const createYm = ( ) => {
        var [startYear, startMonth] = business.from.split('/').map(Number);
        var [endYear, endMonth] = business.to.split('/').map(Number);
        if(business.to == '現在') {
            endYear = new Date().getFullYear();
            endMonth = new Date().getMonth() + 1;
        }

        var years = endYear - startYear;
        var months = endMonth - startMonth + 1;
        if(months <0){
            months += 12;
            years -= 1;
        } 
        var strYm;
        if(years > 0) {
            strYm = years + '年' + months + 'ヶ月';
        } else {
            strYm = months + 'ヶ月';
        }
        return strYm
    };

    return (
        <div className="p-0 py-2 md:px-4 text-xs">
            <div className="flex flex-col md:flex-row">
                <div 
                    className="acrd-btn-history font-bold flex flex-row cursor-pointer"
                    onClick={ accordionHandler }>
                    <div className={`
                        px-1 py-0.5 mr-2 flex items-center rounded-sm triangle transition-transform duration-500
                        ${isOpen 
                            ? "-rotate-180 text-[#ff3c56] bg-white hover:bg-[#bbbbbb]" 
                            : "bg-[#ff3c56] hover:bg-[#c11b31] text-white"
                        }
                    `}>
                        <div className="text-xs">▼</div>
                    </div>
                    <span className="text-xs md:text-sm">{ business.title }</span>
                </div>
                <div className="ml-8 md:ml-4">
                    <span>{ business.from }</span>
                    <span>～</span>
                    <span>{ business.to }</span>
                    <span className="text-xs">
                        (<span>{ createYm() }</span>)
                    </span>
                </div>
            </div>
            <div 
                ref={contentRef}
                className="acrd-cnt-history overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight }}
            >
                <div className="px-0 py-2 md:p-4 text-xs md:text-sm">
                    <div className="">
                        <div>
                            <div>＜業務内容＞</div>
                            <div className="p-2">{ business.content }</div>
                        </div>
                        <div>
                            <div>＜実績・取り組み＞</div>
                            <div className="p-2">{ business.achievement }</div>
                        </div>
                    </div>
                    <div className="mt-3 text-left flex flex-col w-full">
                        <div className="flex flex-row text-nowrap w-full border-t border-x border-[#363636]">
                            <div className="flex flex-row w-full">
                                <div className="bg-[#363636] text-white px-4 py-2">使用言語・技術</div>
                                <div className="p-2 grow text-wrap">
                                    <span>{ business.technology }</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row text-nowrap w-full flex-wrap border-t border-x border-[#363636]">
                            <div className="flex flex-row">
                                <div className="bg-[#363636] text-white px-4 py-2">DB</div>
                                <div className="p-2 md:min-w-60 grow">
                                    <span>{ business.database }</span>
                                </div>
                            </div>
                            <div className="flex flex-row grow">
                                <div className="bg-[#363636] text-white px-4 py-2">OS</div>
                                <div className="p-2 text-wrap grow">
                                    <span>{ business.os }</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:flex-wrap md:items-start">
                            <div className="flex flex-col w-full md:w-fit">
                                <div className="flex flex-col md:flex-row w-full border border-[#363636]">
                                    <div className="bg-[#363636] text-white px-4 py-2 font-thin gorw text-center text-nowrap border-b md:border-b-0 md:border-r border-[#0c0c0c]">チーム</div>
                                    <div className="flex flex-col ">
                                        <div className="text-center flex flex-row">
                                            <div className="bg-[#363636] text-white md:px-4 py-2 font-thin flex-1 text-nowrap md:w-28 border-r border-[#0c0c0c]">人数</div>
                                            <div className="bg-[#363636] text-white md:px-4 py-2 font-thin flex-1 text-nowrap md:w-28 border-r border-[#0c0c0c] ">PM</div>
                                            <div className="bg-[#363636] text-white md:px-4 py-2 font-thin flex-1 text-nowrap md:w-28 md:border-r md:border-[#0c0c0c]">PL</div>
                                        </div>
                                        <div className="text-center flex flex-row">
                                            <div className="md:px-4 py-2 w-4 flex-1 text-nowrap md:w-28 border-r border-[#363636]">{ business.scale }</div>
                                            <div className="md:px-4 py-2 w-4 flex-1 text-nowrap md:w-28 border-r border-[#363636]">{ business.pm ? '●' : '　' }</div>
                                            <div className="md:px-4 py-2 w-4 flex-1 text-nowrap md:w-28 ">{ business.pl ? '●' : '　' }</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full md:w-fit md:grow">
                                <div className="flex flex-col md:flex-row w-full md:grow border border-[#363636]">
                                    <div className="bg-[#363636] text-white px-4 py-2 font-thin gorw text-center text-nowrap border-b md:border-b-0 md:border-r border-[#0c0c0c]">担当工程</div>
                                    <div className="flex flex-col  md:grow">
                                        <div className="text-center flex flex-row">
                                            <div className="bg-[#363636] text-white md:px-4 py-2 font-thin flex-1 md:text-nowrap border-r border-[#0c0c0c]">要件定義</div>
                                            <div className="bg-[#363636] text-white md:px-4 py-2 font-thin flex-1 md:text-nowrap border-r border-[#0c0c0c]">基本設計</div>
                                            <div className="bg-[#363636] text-white md:px-4 py-2 font-thin flex-1 md:text-nowrap border-r border-[#0c0c0c]">詳細設計</div>
                                            <div className="bg-[#363636] text-white md:px-4 py-2 font-thin flex-1 md:text-nowrap border-r border-[#0c0c0c]">実装開発</div>
                                            <div className="bg-[#363636] text-white md:px-4 py-2 font-thin flex-1 md:text-nowrap border-r border-[#0c0c0c]">テスト</div>
                                            <div className="bg-[#363636] text-white md:px-4 py-2 font-thin flex-1 md:text-nowrap ">運用保守</div>
                                        </div>
                                        <div className="text-center flex flex-row">
                                            <div className="md:px-4 py-2 w-4 flex-1 border-r border-[#363636]">{ business.rd ? '●' : '　' }</div>
                                            <div className="md:px-4 py-2 w-4 flex-1 border-r border-[#363636]">{ business.bd ? '●' : '　' }</div>
                                            <div className="md:px-4 py-2 w-4 flex-1 border-r border-[#363636]">{ business.dd ? '●' : '　' }</div>
                                            <div className="md:px-4 py-2 w-4 flex-1 border-r border-[#363636]">{ business.cd ? '●' : '　' }</div>
                                            <div className="md:px-4 py-2 w-4 flex-1 border-r border-[#363636]">{ business.test ? '●' : '　' }</div>
                                            <div className="md:px-4 py-2 w-4 flex-1 border-r border-[#363636]">{ business.op ? '●' : '　' }</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}