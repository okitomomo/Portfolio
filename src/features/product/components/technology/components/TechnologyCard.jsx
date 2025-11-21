import { useModal } from '../../../../components/modal/ModalProvider.jsx';
import { useState, useRef, useEffect } from "react";
import TechnologyCommentModal from "./TechnologyCommentModal";

export default function TechnologyCard({ tech }) {
    const { openModal } = useModal();
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="relative w-32 h-44 bg-white rounded-md shadow-xl py-2 flex flex-col items-center justify-center cursor-pointer"
            onMouseEnter={ () => setIsHover(true) }
            onMouseLeave={ () => setIsHover(false) }
        >
            <div
                className="absolute inset-0 z-20 w-full h-full md:hidden "
                onClick={ () => openModal(TechnologyCommentModal, {
                    title: tech.name, 
                    comment: tech.comment
                })}
            >
            </div>
            <div className={`
                absolute hidden top-48 bg-[#363636] text-xs w-80 p-4 rounded-md
                ${isHover ? 'md:block' : '' }
            `}>
                { tech.comment }
            </div>
            <div className="relative w-24 h-24">
                <div className="absolute inset-0 flex items-center justify-center font-bold text-lg text-gray-700 p-5">
                    <img src={`/Portfolio/img/skill_icon/${tech.img}`} alt="" />
                </div>
            </div>
            <div className="font-bold text-[#ff3c56] w-full text-center py-2">{tech.name}</div>
        </div>
    );
}