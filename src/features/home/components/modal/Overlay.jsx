export default function Overlay({isOpen, onClose}) {
    return (
        <div onClick={ onClose } className={`z-30 bg-white opacity-50 top-0 left-0 w-full h-full cursor-pointer
            ${isOpen ? "fixed" : "hidden"}
        `}>
        </div>
    );
}