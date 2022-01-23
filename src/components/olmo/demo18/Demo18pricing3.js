const Demo18pricing3 = () => {
  return (
    <section
      id="pricing-3"
      className="bg-whitesmoke wide-60 pricing-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-85">
              {/* Section ID */}
              <span className="section-id txt-upcase">
                Pricing &amp; Packages
              </span>
              {/* Title */}
              <h3 className="h3-lg">
                Scale your business to the next level with our experts
              </h3>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque at
                dolor primis libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* PRICING TABLES */}
        <div className="pricing-3-row pc-20">
          <div className="row row-cols-1 row-cols-md-3">
            {/* STARTER PLAN */}
            <div className="col">
              <div className="pricing-3-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price  */}
                <div className="pricing-plan">
                  <h6 className="h6-md">SEO Starter</h6>
                  <sup className="dark-color">$</sup>
                  <span className="price dark-color">8</span>
                  <sup className="coins dark-color">99</sup>
                  <p className="p-lg">Monthly Payment</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">10 Analytics Campaign</p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>800 Change Keywords</span>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>3 Free Optimization</span>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>25 Social Media Reviews</span>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">Upgrate Options</p>
                  </li>
                  <li>
                    <p className="p-md">Extra Features</p>
                  </li>
                  <li>
                    <p className="p-md">12/5 Free Support</p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a href="#" className="btn btn-tra-grey tra-skyblue-hover">
                  Get Started
                </a>
              </div>
            </div>{" "}
            {/* END STARTER PLAN */}
            {/* BASIC PLAN */}
            <div className="col">
              <div className="pricing-3-table bg-white rel mb-40 wow fadeInUp">
                {/* Hightlight Badge */}
                <div className="badge-wrapper">
                  <div className="highlight-badge bg-skyblue white-color">
                    <h6 className="h6-md">Most Popular</h6>
                  </div>
                </div>
                {/* Plan Price  */}
                <div className="pricing-plan">
                  <h6 className="h6-md">SEO Basic</h6>
                  <sup className="dark-color">$</sup>
                  <span className="price dark-color">16</span>
                  <sup className="coins dark-color">99</sup>
                  <p className="p-lg">Monthly Payment</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">20 Analytics Campaign</p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>1,200 Change Keywords</span>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>15 Optimization</span>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>1K Social Media Reviews</span>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">Upgrate Options</p>
                  </li>
                  <li>
                    <p className="p-md">Extra Features</p>
                  </li>
                  <li>
                    <p className="p-md">12/7 Free Support</p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a href="#" className="btn btn-skyblue tra-grey-hover">
                  Get Started
                </a>
              </div>
            </div>{" "}
            {/* END BASIC PLAN */}
            {/* PREMIUM PLAN */}
            <div className="col">
              <div className="pricing-3-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price  */}
                <div className="pricing-plan">
                  <h6 className="h6-md">SEO Premium</h6>
                  <sup className="dark-color">$</sup>
                  <span className="price dark-color">39</span>
                  <sup className="coins dark-color">99</sup>
                  <p className="p-lg">Monthly Payment</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">Unlimited Analytics Campaign</p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>Unlimited Change Keywords</span>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>Unlimited Optimization</span>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>5K Social Media Reviews</span>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">Upgrate Options</p>
                  </li>
                  <li>
                    <p className="p-md">Extra Features</p>
                  </li>
                  <li>
                    <p className="p-md">24/7 Free Support</p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a href="#" className="btn btn-tra-grey tra-skyblue-hover">
                  Get Started
                </a>
              </div>
            </div>{" "}
            {/* END PREMIUM PLAN */}
          </div>
        </div>{" "}
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
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo18pricing3;
