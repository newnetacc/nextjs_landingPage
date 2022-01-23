const Features = () => {
  return (
    <section id="features-8" className="wide-60 features-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">How to get started?</h2>
              {/* Text */}
              
            </div>
          </div>
        </div>
        {/* FEATURES-8 WRAPPER */}
        <div className="fbox-8-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  <img
                    className="img-fluid"
                    src="/images/img-21.png"
                    alt="feature-icon"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">1. Answer a few questions on your oral health</h5>
                {/* Text */}
              
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  <img
                    className="img-fluid"
                    src="/images/img-22.png"
                    alt="feature-icon"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">2. Share images of your teeth and mouth</h5>
                {/* Text */}
              
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  <img
                    className="img-fluid"
                    src="/images/img-23.png"
                    alt="feature-icon"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">Complete Report Delivered to you</h5>
                {/* Text */}
             
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* END FEATURES-8 WRAPPER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Features;
