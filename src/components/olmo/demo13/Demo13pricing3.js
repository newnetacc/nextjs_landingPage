const Demo13pricing3 = () => {
  return (
    <section
      id="pricing-3"
      className="bg-lightgrey wide-60 pricing-section division"
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
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* PRICING TABLES */}
        <div className="pricing-3-row pc-20">
          <div className="row row-cols-1 row-cols-md-3">
            {/* BASIC PLAN */}
            <div className="col">
              <div className="pricing-3-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price  */}
                <div className="pricing-plan">
                  <h6 className="h6-xl">Basic</h6>
                  <sup className="dark-color">$</sup>
                  <span className="price dark-color">11</span>
                  <sup className="coins dark-color">99</sup>
                  <p className="p-lg">Monthly Payment</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">
                      <span>10</span> Projects
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>15</span> mySQL Database
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>30 GB</span> of Storage
                    </p>
                  </li>
                  <li className="disabled-option">
                    <p className="p-md">No Ads. No Trackers</p>
                  </li>
                  <li className="disabled-option">
                    <p className="p-md">Daily Data Backup</p>
                  </li>
                  <li className="disabled-option">
                    <p className="p-md">Extra Features</p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>12/5</span> Free Support
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a href="#" className="btn btn-tra-grey tra-violet-red-hover">
                  Get Started
                </a>
              </div>
            </div>{" "}
            {/* END BASIC PLAN */}
            {/* ADVANCED PLAN */}
            <div className="col">
              <div className="pricing-3-table bg-white rel mb-40 wow fadeInUp">
                {/* Hightlight Badge */}
                <div className="badge-wrapper">
                  <div className="highlight-badge bg-violet-red white-color">
                    <h6 className="h6-md">Most Popular</h6>
                  </div>
                </div>
                {/* Plan Price  */}
                <div className="pricing-plan">
                  <h6 className="h6-xl">Advanced</h6>
                  <sup className="dark-color">$</sup>
                  <span className="price dark-color">24</span>
                  <sup className="coins dark-color">99</sup>
                  <p className="p-lg">Monthly Payment</p>
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
                      <span>40</span> mySQL Database
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>100 GB</span> of Storage
                    </p>
                  </li>
                  <li>
                    <p className="p-md">No Ads. No Trackers</p>
                  </li>
                  <li>
                    <p className="p-md">Daily Data Backup</p>
                  </li>
                  <li className="disabled-option">
                    <p className="p-md">Extra Features</p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>24/7</span> Free Support
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a href="#" className="btn btn-violet-red tra-grey-hover">
                  Get Started
                </a>
              </div>
            </div>{" "}
            {/* END ADVANCED PLAN */}
            {/* PREMIUM PLAN */}
            <div className="col">
              <div className="pricing-3-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price  */}
                <div className="pricing-plan">
                  <h6 className="h6-xl">Premium</h6>
                  <sup className="dark-color">$</sup>
                  <span className="price dark-color">89</span>
                  <sup className="coins dark-color">99</sup>
                  <p className="p-lg">Monthly Payment</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">
                      <span>50</span> Projects
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>30</span> mySQL Database
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>500 GB</span> of Storage
                    </p>
                  </li>
                  <li>
                    <p className="p-md">No Ads. No Trackers</p>
                  </li>
                  <li>
                    <p className="p-md">Daily Data Backup</p>
                  </li>
                  <li>
                    <p className="p-md">Extra Features</p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span>VIP</span> Support
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a href="#" className="btn btn-tra-grey tra-violet-red-hover">
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
              <p>
                The above prices do not include applicable taxes based on your
                billing address.The final price will be displayed on the
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

export default Demo13pricing3;
