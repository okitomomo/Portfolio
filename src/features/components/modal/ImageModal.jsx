import Modal from "./Modal";

export default function ImageModal({title, src, onClose}) {
    return (
        <Modal
            title={ title }
            content={ 
                <div className="flex flex-row justify-center">
                    <img className="max-w-full h-[calc(100lvh-200px)] object-contain" src={ src } alt="" /> 
                </div>
            } 
            onClose = { onClose }
        />
    );
}