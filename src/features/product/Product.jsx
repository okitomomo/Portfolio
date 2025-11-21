import { useParams } from 'react-router-dom';
import { products } from '../home/components/production/ProductionData';
import Header from './components/Header.jsx';
import Overview from './components/overview/Overview.jsx';
import Description from './components/Description.jsx';
import Technology from './components/technology/Technology.jsx';
import AppealPoint from './components/AppealPoint.jsx';
import ModalProvider from '../components/modal/ModalProvider.jsx';

export default function Product() {
    const { id } = useParams();

    const findProduct = () => {
        return products.find((product) => product.id === id);
    }

    const product = findProduct();

    return (
        <ModalProvider>
            <div className="text-white mx-auto bg-[#0c0c0c] max-w-[1400px] z-10">
                <Header />
                <div className="p-6">
                    { 
                        product ? (
                            <>
                                <Overview product={ product } />
                                <AppealPoint caption={ product.appeal } />
                                <Technology technologies={ product.technologies } />
                                <Description product={ product } />
                            </>
                        ) : ( 
                            <div className="text-2xl font-bold text-center md:text-left py-24 px-6">
                                Product Not Found
                            </div>
                        )
                    }
                </div>
            </div>
        </ModalProvider>
    );
}