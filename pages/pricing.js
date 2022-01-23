import Link from "next/dist/client/link";
import Slider from "react-slick";
import Layout from "../src/layout/Layout";
import Faq from "../src/components/Faq";
import CustomersReviews from "../src/components/CustomersReviews";
import { GraphQLClient, gql } from "graphql-request";

const pricing = ({ reviews }) => {
  
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
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="pricing-2"
        className="bg-snow pb-60 inner-page-hero pricing-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-80">
                {/* Title */}
                <h2 className="h2-md">Easy and Affordable Dental Care</h2>
                {/* Text */}
                <p className="p-xl">
                  No waiting for the insurance approval
                </p>
              </div>
            </div>
          </div>
          {/* PRICING TABLES */}
          <div className="pricing-2-row pc-25">
            <div className="row row-cols-1 row-cols-md-3">
              {/* BASIC PLAN */}
              <div className="col">
                <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                  {/* Plan Price */}
                  <div className="pricing-plan">
                    {/* Plan Title */}
                    <div className="pricing-plan-title">
                      <h5 className="h5-xs">Single Issue</h5>
                      <h6 className="h6-sm bg-lightgrey">Save 30%</h6>
                    </div>
                    {/* Price */}
                    <sup className="dark-color">AED</sup>
                    <span className="dark-color">30</span>
                    <sup className="validity dark-color">
                      / report
                    </sup>
                  </div>
                  {/* Plan Features  */}
                  <ul className="features">
                    <li>
                      <p className="p-md">
                        Best for a specific problem
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        Quick & simple dental assessment
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        Summary report within 6 hours
                      </p>
                    </li>
                  </ul>
                  {/* Pricing Plan Button */}
                  <a
                    href="#"
                    className="btn btn-sm btn-tra-grey tra-skyblue-hover"
                  >
                    Select Plan
                  </a>
                </div>
              </div>{" "}
              {/* END BASIC PLAN */}
              {/* AGENCY PLAN */}
              <div className="col">
                <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                  {/* Plan Price */}
                  <div className="pricing-plan">
                    {/* Plan Title */}
                    <div className="pricing-plan-title">
                      <h5 className="h5-xs">Full mouth assessment</h5>
                    </div>
                    {/* Price */}
                    <sup className="dark-color">AED</sup>
                    <span className="dark-color">50</span>
                    <sup className="validity dark-color">
                       / report
                    </sup>
                    
                  </div>
                  {/* Plan Features  */}
                  <ul className="features">
                    <li>
                      <p className="p-md">
                        Best for early detection & monitoring
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        Full dental screening & assessment
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        In-depth oral health report
                      </p>
                    </li>
                 
                  </ul>
                  {/* Pricing Plan Button */}
                  <a
                    href="#"
                    className="btn btn-sm btn-tra-grey tra-skyblue-hover"
                  >
                    Select Plan
                  </a>
                </div>
              </div>{" "}
              {/* END AGENCY PLAN  */}
              {/* ADVANCED PLAN */}
              <div className="col">
                <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                  {/* Plan Price  */}
                  <div className="pricing-plan highlight">
                    {/* Plan Title */}
                    <div className="pricing-plan-title">
                      <h5 className="h5-xs">Emergency</h5>
                      <h6 className="h6-sm bg-skyblue white-color">coming soon</h6>
                    </div>
                    {/* Price */}
                    <sup className="dark-color">AED</sup>
                    <span className="dark-color">99</span>
                    <sup className="validity dark-color">
                      / report
                    </sup>
                  </div>
                  {/* Plan Features  */}
                  <ul className="features">
                    <li>
                      <p className="p-md">
                        Best for pain and urgent care
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        Video consult within 15 minutes
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        Immediate diagnosis & advice
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        Referral to pickup
                      </p>
                    </li>
                  </ul>
                  {/* Pricing Plan Button */}
                  <a href="#" className="btn btn-sm btn-skyblue tra-grey-hover">
                    Select Plan
                  </a>
                </div>
              </div>{" "}
              {/* END ADVANCED PLAN */}
            </div>
          </div>{" "}
          {/* END PRICING TABLES */}
        
          {/* PRICING NOTICE TEXT */}
        
          {/* PAYMENT METHODS */}
          <div className="payment-methods pc-30">
            <div className="row row-cols-1 row-cols-md-3">
              {/* Payment Methods */}
              <div className="col col-lg-5">
                <div className="pbox mb-40">
                  {/* Title */}
                  <h6 className="h6-md">Accepted Payment Methods</h6>
                  {/* Payment Icons */}
                  <ul className="payment-icons ico-50">
                    <li>
                      <img
                        src="/images/png-icons/visa.png"
                        alt="payment-icon"
                      />
                    </li>
                    <li>
                      <img src="/images/png-icons/am.png" alt="payment-icon" />
                    </li>
                    <li>
                      <img
                        src="/images/png-icons/discover.png"
                        alt="payment-icon"
                      />
                    </li>
                    <li>
                      <img
                        src="/images/png-icons/paypal.png"
                        alt="payment-icon"
                      />
                    </li>
                    <li>
                      <img src="/images/png-icons/jcb.png" alt="payment-icon" />
                    </li>
                    <li>
                      <img
                        src="/images/png-icons/shopify.png"
                        alt="payment-icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* Payment Guarantee */}
              <div className="col col-lg-4">
                <div className="pbox mb-40">
                  {/* Title */}
                  <h6 className="h6-md">Satisfaction Guarantee</h6>
                  {/* Text */}
                  <p>
                    If it's not a perfect fit, receive a full refund.
                  </p>
                </div>
              </div>
              {/* Payment Encrypted */}
              <div className="col col-lg-3">
                <div className="pbox mb-40">
                  {/* Title */}
                  <h6 className="h6-md">SSL Encrypted Payment</h6>
                  {/* Text */}
                  <p>
                    Your information is protected by 256-bit SSL encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END PAYMENT METHODS */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END PRICING-2 */}
      {/* CALL TO ACTION-4
			============================================= */}
      <section id="cta-4" className="cta-section division">
        <div className="cta-4-holder bg-snow">
          <div className="container">
            <div className="bg-white cta-4-wrapper">
              <div className="row d-flex align-items-center">
                {/* CALL TO ACTION TEXT */}
                <div className="col-lg-7 col-lg-8">
                  <div className="cta-4-txt">
                    <h4 className="h4-xl">
                      Get answers to your questions. 24/7 Access to an Online Dentist.
                    </h4>
                  </div>
                </div>
                {/* CALL TO ACTION BUTTON */}
                <div className="col-lg-4">
                  <div className="text-end">
                    <div className="cta-4-btn text-center">
                      <Link href="/pricing">
                        <a className="btn btn-skyblue tra-grey-hover">
                          connect to a Dentist
                        </a>
                      </Link>
                      <p>
                        <Link href="/faqs">
                          <a>Read The FAQs</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </div>
      </section>
      {/* END CALL TO ACTION-4 */}
      {/* FAQs-2
			============================================= */}
     <Faq/>
      {/* END FAQs-2 */}
      {/* TESTIMONIALS-1
			============================================= */}
      <CustomersReviews reviews={reviews }/>
    </Layout>
  );
};

export default pricing;

export async function getStaticProps() {
  const endpoint = "https://api-ap-south-1.graphcms.com/v2/ckxm8bu5s4mjk01xp5gqe28nq/master";

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
  customerReviews {
  text
  image {
    url
  }
  fullName
  socialHandle
  ratings 
}
    }
  `;


  const data = await graphQLClient.request(query);

  const reviews = data.customerReviews
 

  return {
    props: {
      reviews,
    },
  };
}
