import ProductOverview from "./components/ProductOverview";
import { products } from "./ProductionData";

export default function Production() {
    return (
        <section id="production" className="px-2 md:px-6 py-12">
            <div className="text-2xl font-eng text-center md:text-left">Production</div>
            <div id="products-data" className="flex flex-wrap justify-center px-4 py-12 gap-4">
                {
                    products.map((product, index) => (
                        <ProductOverview key={index} product={product}/>
                    ))
                }
            </div>
            {/* VIEW MORE */}
            {/* 
            <div className="flex flex-row justify-center md:justify-end font-eng text-sm">
                <a className="" href="#blank" onclick="alert('Comming Soon!!');">
                    <div className="relative border-b border-white hover:border-[#ff3c56] pr-6 hover:text-[#ff3c56]
                        after:absolute after:bottom-[-1px] after:right-0 after:h-px after:w-3 after:-rotate-[310deg] after:bg-white after:content-[''] after:origin-right after:hover:bg-[#ff3c56]">VIEW MORE</div>
                </a>
            </div>
            */}
        </section>
    );
}
