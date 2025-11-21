import Modal from "../../../../components/modal/Modal";

export default function SkillCommentModal({title, comment, onClose}) {
    return (
        <Modal
            title={`Technology Comment : ${title}`}
            content={ comment } 
            onClose = { onClose }
        />
    );
}