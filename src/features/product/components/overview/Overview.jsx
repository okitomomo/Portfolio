import ProductSlider from "./components/ProductSlider";

export default function Overview({ product }) {
    return (
        <section className="my-4 px-2 md:px-6 py-12">
            <div className="text-2xl font-bold text-center md:text-left">{ product.name }</div>
            <div className="w-5xl mx-auto px-4 py-12 md:px-12">
                <ProductSlider />
            </div>
        </section>
    );
}