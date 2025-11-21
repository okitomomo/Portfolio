import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProductSlider.css'

export default function ProductSlider() {

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
        {Array.from({ length: 5 }).map((_, i) => {
            return (
                <div className="w-full md:max-w-100">
                    <img className="w-full h-full object-contain" src={`/Portfolio/product/1/thumbnail.png`} alt="" />
                </div>
            );
        })}
      </Slider>
    </div>
  );

}
