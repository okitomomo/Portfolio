import Overlay from "./Overlay";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (ModalComponent, props) => {
        setActiveModal({ ModalComponent: ModalComponent, props : props});
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setActiveModal({ ModalComponent: null, props: {} });
    }

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <Overlay isOpen={isOpen} onClose={ closeModal }/>
            {activeModal &&activeModal.ModalComponent && (() => {
                const Modal = activeModal;
                return <Modal.ModalComponent {...activeModal.props} onClose={ closeModal } />;
            })()}
        </ModalContext.Provider>
    );
}