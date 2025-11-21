export default function ProductOverview({ product }) {
    return (
        <a href={`#/product/${product.id }`} className="flex flex-col bg-white text-black w-[300px] cursor-pointer">
            <div className="bg-gray-700 w-full h-40 overflow-hidden">
                <img className="w-full h-full object-contain" src={`/Portfolio/product/${ product.id }/thumbnail.png`} alt="" />
            </div>
            <div className="p-2">
                <div className="py-2 font-bold">{ product.name }</div>
                <div className="text-sm h-16">{ product.overview }</div>
            </div>
        </a>
    );
}