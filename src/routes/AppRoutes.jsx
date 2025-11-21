import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../features/home/Home.jsx";
import Product from "../features/product/Product.jsx";

export default function AppRoute() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </HashRouter>
    );
}
