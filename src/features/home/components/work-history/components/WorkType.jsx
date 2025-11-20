import Business from './Business.jsx';

export default function WorkType({ workType }) {
    return (
        <div id="template-workhistory" className="w-full flex flex-col">
            <div className="text-left text-lg md:text-xl border-b-4 border-[#363636] font-bold py-2">
                <span>{ workType.title }</span>
            </div>
            <div>
                <div className="p-0 py-2 md:p-4">
                    { workType.contents.map((business, index) => (
                        <Business
                            business={ business }
                            key={ index }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
