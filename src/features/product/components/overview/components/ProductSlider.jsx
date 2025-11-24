import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProductSlider.css'
import { useModal } from '../../../../components/modal/ModalProvider.jsx';
import ImageModal from '../../../../components/modal/ImageModal.jsx';

export default function ProductSlider({ product }) {
  const { openModal } = useModal();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        {product.images.map((image, index) => {
            return (
                <div className="w-full md:w-100 h-96 px-4">
                    <img 
                        className="w-full h-full object-contain cursor-pointer" src={`/Portfolio/product/${ product.id }/images/${ image }`} 
                        alt="" 
                        onClick={ () => openModal(ImageModal, {
                            title: product.name, 
                            src : `/Portfolio/product/${ product.id }/images/${ image }`
                        })}
                    />
                </div>
            );
        })}
      </Slider>
    </div>
  );

}
