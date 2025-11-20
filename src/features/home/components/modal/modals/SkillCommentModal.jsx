import Modal from "../Modal";

export default function SkillCommentModal({title, comment, onClose}) {
    return (
        <Modal
            title={`Skill Comment : ${title}`}
            content={ comment } 
            onClose = { onClose }
        />
    );
}