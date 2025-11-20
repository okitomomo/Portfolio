import { useModal } from '../../modal/ModalProvider.jsx';
import SkillCommentModal from '../../modal/modals/SkillCommentModal.jsx';


export default function Skill({ skill, margin }) {
    const { openModal } = useModal();

    return (
        <tr className="odd:bg-[#363636] even:bg-[#191919]">
            <td className="py-4 px-2">
                <div className="flex flex-row items-center">
                    { margin > 0 && 
                        <div className="mr-2" style={{ marginLeft: `${ margin }px` }}>┗</div> 
                    }
                    { skill.img && <img className="skill-img w-8 h-8 mr-2" src={`img/skill_icon/${ skill.img }`} alt="" /> }
                    <div className="skill-name font-bold">{ skill.name }</div>
                </div>
            </td>
            <td className="skill-level p-2 text-nowrap">
                <div className="flex flex-row items-center justify-center">
                    {Array.from({ length: 5 }).map((_, i) => {
                        if (i < skill.level) {
                            return <i key={i} className="fa-solid fa-star text-[#ff3c56]"></i>;
                        }
                        return <i key={i} className="fa-solid fa-star"></i>;
                    })}
                </div>
            </td>
            <td className="hidden md:table-cell p-2">
                <div className="flex flex-row item-center">
                    <div className="skill-comment">{skill.comment}</div>
                </div>
            </td>
            <td onClick={ () => openModal(SkillCommentModal, {
                    title: skill.name, 
                    comment: skill.comment
                })}
                className="btn-comment md:hidden px-4 py-2 cursor-pointer"
            >
                <i className="fa-solid fa-comment text-white"></i>
            </td>
        </tr>
    );
}

