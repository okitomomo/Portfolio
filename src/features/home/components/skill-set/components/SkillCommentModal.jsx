import Modal from "../../../../components/modal/Modal.jsx";

export default function SkillCommentModal({title, comment, onClose}) {
    return (
        <Modal
            title={`Skill Comment : ${title}`}
            content={ comment } 
            onClose = { onClose }
        />
    );
}