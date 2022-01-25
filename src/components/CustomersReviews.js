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
      style={{position:'relative'}}
      className="bg-transparent-green wide-100 reviews-section division slickmargin"
    >
       <div style={{
         transform: 'scale(0.2)',
       }} style={{position:'absolute',top:0, left: '-80vmin'}}>
      <svg width="997" height="498" viewBox="0 0 997 498" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" d="M872.243 0C872.243 102.901 835.695 191.052 762.598 264.102C689.501 337.151 601.293 373.676 498.324 373.676C395.356 373.676 307.148 337.151 234.051 264.102C160.954 191.052 124.405 102.901 124.405 0H0C0 137.319 48.8484 254.619 146.194 351.901C243.539 449.183 360.916 498 498.324 498C635.732 498 753.109 449.183 850.455 351.901C947.8 254.619 997 137.319 997 0H872.243Z" fill="#00AB78"/>
</svg>
         
      </div>
      <div style={{position:'absolute',bottom:0, right: 0}}>
          <svg width="740" height="277" viewBox="0 0 740 277" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M713.116 216.16C781.176 284.097 815.531 366.028 816.119 461.5H927.494C926.9 335.306 881.285 227.48 791.537 137.893C701.2 47.7189 592.345 2.50003 464.836 2.50003C337.327 2.50003 228.473 47.7189 138.136 137.893C48.3907 227.477 3.09569 335.301 2.50584 461.5H113.553C114.142 366.028 148.496 284.097 216.556 216.16C285.209 147.631 368.124 113.336 464.836 113.336C561.548 113.336 644.464 147.631 713.116 216.16Z" stroke="white" strokeWidth="5"/>
</svg>

          
          </div>
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md gold-text">Stories From Our Customers</h2>
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


