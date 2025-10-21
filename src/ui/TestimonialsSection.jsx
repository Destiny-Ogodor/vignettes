import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TESTIMONIALS } from "../../constants";

function TestimonialsSection() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="m-auto w-3/4">
      <div className="mt-20">
        <Slider {...settings}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="h-[450px]">
              <div>
                <p>{t.text}</p>
                <img src={t.img} alt="" className="h-20 w-20 rounded-full" />
              </div>

              <div>
                <p>{t.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialsSection;
