import Skill from './components/Skill.jsx';
import { skills } from './SkillData.js';

export default function SkillSet() {
    const renderSkills = (skills, nested = 0, parentKey = '') => {
        return skills.map((skill, index) => {
            const key = parentKey ? `${parentKey}-${index}` : `${index}`;
            const elements = [renderSkill(skill, nested, key)];

            if (skill._children) {
                elements.push(...renderSkills(skill._children, nested + 1, key));
            }

            return elements;
        }).flat();
    };

    const renderSkill = (skill, nested, key) => {
        return (
            <Skill
                key={key}
                skill={skill}
                margin={nested * 16}
            />
        );
    };

    return (
        <section id="skill-set" className="px-2 md:px-6 py-8">
            <div className="text-2xl font-eng text-center md:text-left my-8">Skill Set</div>
            <div className="p-0 md:p-4">
                {/* <div id="skill-table" className="max-w-5xl mx-auto text-xs md:text-sm overflow-y-auto"></div> */}
                <table className="table-fixed mx-auto text-sm">
                    <thead>
                        <tr>
                            <td className="bg-[#191919] p-2">Skill</td>
                            <td className="bg-[#191919] p-2">Level</td>
                            <td className="bg-[#191919] p-2 hidden md:table-cell">Comment</td>
                            <td className="bg-[#191919] p-2 md:hidden">...</td>
                        </tr>
                    </thead>
                    <tbody id="skills-data">
                        { renderSkills(skills) }
                    </tbody>
                </table>
            </div>
        </section>
    );
}

