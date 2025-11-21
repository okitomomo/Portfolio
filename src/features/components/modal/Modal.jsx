
export default function Modal({title, content, onClose}) {
    return (
        <div className="fixed bg-[#0c0c0c] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 p-4 w-[90%] text-white">
            <div className="border-white border-b-2 relative py-4">
                {title}
                <div className="absolute right-0 top-0 cursor-pointer text-md" onClick={ onClose }>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div className="p-4 leading-normal font-thin text-sm">
                {content}
            </div>
        </div>
    );
}