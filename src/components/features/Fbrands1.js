import Slider from "react-slick";

const Fbrands1 = () => {
  let setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="brands-1"
      className="bg-lightgrey pt-70 pb-70 brands-section division"
    >
      <div className="container">
        {/* BRANDS TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="brands-title text-center">
              <p className="p-xl">
                Over 2000+ companies are already using OLMO every day.
              </p>
            </div>
          </div>
        </div>
        {/* Brands Carousel */}
        <div className="row">
          <div className="col text-center">
            <Slider {...setting} className="owl-carousel brands-carousel">
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-1.png"
                  alt="brand-logo"
                />
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-2.png"
                  alt="brand-logo"
                />
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-3.png"
                  alt="brand-logo"
                />
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-4.png"
                  alt="brand-logo"
                />
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-5.png"
                  alt="brand-logo"
                />
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-6.png"
                  alt="brand-logo"
                />
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-7.png"
                  alt="brand-logo"
                />
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-8.png"
                  alt="brand-logo"
                />
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-9.png"
                  alt="brand-logo"
                />
              </div>
            </Slider>
          </div>
        </div>{" "}
        {/* End Brands Carousel */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default Fbrands1;
