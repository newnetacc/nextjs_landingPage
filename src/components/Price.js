const Price = ({ color }) => {
  return (
    <section
      id="pricing-2"
      className="bg-whitesmoke wide-60 pricing-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              {/* Title */}
              <h2 className="h2-md">Simple And Flexible Pricing</h2>
              {/* Text */}
              <p className="p-xl">
                No credit card required. Change or cancel your plan anytime
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
                    <h5 className="h5-xs">Basic</h5>
                    <h6 className="h6-sm bg-lightgrey">Save 30%</h6>
                  </div>
                  {/* Price */}
                  <sup className="dark-color">$</sup>
                  <span className="dark-color">7</span>
                  <sup className="validity dark-color">
                    <span>.99</span> / month
                  </sup>
                  <p className="p-md">Billed as $96 per year</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">
                      <span>25</span> Projects
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>10</span> mySQL Database
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>25 GB</span> of Storage
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>Premium</span> Support
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a
                  href="#"
                  className={`btn btn-sm btn-tra-grey tra-${color}-hover`}
                >
                  Select Plan
                </a>
              </div>
            </div>
            {/* END BASIC PLAN */}
            {/* AGENCY PLAN */}
            <div className="col">
              <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price */}
                <div className="pricing-plan">
                  {/* Plan Title */}
                  <div className="pricing-plan-title">
                    <h5 className="h5-xs">Agency</h5>
                    <h6 className="h6-sm bg-lightgrey">Save 25%</h6>
                  </div>
                  {/* Price */}
                  <sup className="dark-color">$</sup>
                  <span className="dark-color">11</span>
                  <sup className="validity dark-color">
                    <span>.25</span> / month
                  </sup>
                  <p className="p-md">Billed as $135 per year</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">
                      <span>100</span> Projects
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>25</span> mySQL Database
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>80 GB</span> of Storage
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>Premium</span> Support
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a
                  href="#"
                  className={`btn btn-sm btn-tra-grey tra-${color}-hover`}
                >
                  Select Plan
                </a>
              </div>
            </div>
            {/* END AGENCY PLAN  */}
            {/* ADVANCED PLAN */}
            <div className="col">
              <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price  */}
                <div className="pricing-plan highlight">
                  {/* Plan Title */}
                  <div className="pricing-plan-title">
                    <h5 className="h5-xs">Advanced</h5>
                    <h6 className={`h6-sm bg-${color} white-color`}>Popular</h6>
                  </div>
                  {/* Price */}
                  <sup className="dark-color">$</sup>
                  <span className="dark-color">15</span>
                  <sup className="validity dark-color">
                    <span>.99</span> / month
                  </sup>
                  <p className="p-md">Billed as $199 per year</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">
                      <span>Unlimited</span> Projects
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>50</span> mySQL Database
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>500 GB</span> of Storage
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>VIP</span> Support
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a
                  href="#"
                  className={`btn btn-sm btn-${color} tra-grey-hover`}
                >
                  Select Plan
                </a>
              </div>
            </div>
            {/* END ADVANCED PLAN */}
          </div>
        </div>
        {/* END PRICING TABLES */}
        {/* PRICING NOTICE TEXT */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="pricing-notice text-center mb-40">
              <p className="p-md">
                The above prices do not include applicable taxes based on your
                billing address. The final price will be displayed on the
                checkout page, before the payment is completed
              </p>
            </div>
          </div>
        </div>
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
                    <img src="/images/png-icons/visa.png" alt="payment-icon" />
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
                <h6 className="h6-md">Money Back Guarantee</h6>
                {/* Text */}
                <p>
                  Explore OLMO Premium for 14 days. If it’s not a perfect fit,
                  receive a full refund.
                </p>
              </div>
            </div>
            {/* Payment Encrypted */}
            <div className="col col-lg-3">
              <div className="pbox mb-40">
                {/* Title */}
                <h6 className="h6-md">SSL Encrypted Payment</h6>
                {/* Text */}
                <p>Your information is protected by 256-bit SSL encryption.</p>
              </div>
            </div>
          </div>
        </div>
        {/* END PAYMENT METHODS */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Price;
