import Slider from "react-slick";
import SingleBlog from "../../pages/singleBlog";
import SingleReview from "../../pages/singleReview";
import { GraphQLClient, gql } from "graphql-request";



const CustomersReviews = ({reviews}) => {
  
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section
      id="reviews-1"
      className="bg-whitesmoke-gradient wide-100 reviews-section division slickmargin"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Stories From Our Customers</h2>
              {/* Text */}
            </div>
          </div>
        </div>
        {/* TESTIMONIALS CONTENT */}
        <div className="row">
          <div className="col">
            <div className="owl-carousel owl-theme reviews-1-wrapper">
              <Slider {...settings}>
                {/* TESTIMONIAL #1 */}
                  {reviews?.map((item, index) => (
                    <SingleReview
                      reviews={reviews}
                      key={index}
                      text={item.text}
                      image={item.image.url}
                      fullName={item.fullName}
                      socialHandle={item.socialHandle}
                    />
                  ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* END TESTIMONIALS CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default CustomersReviews;


