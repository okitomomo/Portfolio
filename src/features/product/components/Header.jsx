export default function Header() {
    return (
        <>
            <div className="flex flex-row font-eng bg-[#272626] p-4">
                <div className="grow-0">
                    <a href="/">
                        <div className="text-xl">
                            Portfolio
                        </div>
                        <div className="text-sm">
                            Engineer TomohiroOkita's Work
                        </div>
                    </a>
                </div>
            </div>
            <div className="relative p-4">
                <div className="absolute inset-0 bg-[url('/Portfolio/img/product.jpg')] bg-[center_68%] bg-cover grayscale brightness-[15%]"></div>
                <div className="relative py-8 px-4 font-eng text-white text-3xl">
                    Production Introduction
                </div>
            </div>
        </>
    );
}