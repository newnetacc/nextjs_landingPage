const Demo1content3 = () => {
  return (
    <section
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md red-text capitalize">
              We're 2,500 Dentists Strong &
Growing. We're Serving People In
Cities Across The Country
              </h2>
            </div>
          </div>
        </div>
        {/* TOP ROW */}
        <div className="top-row pb-50">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/img-05.png"
                  alt="content-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* TEXT BOX */}
                <div className="txt-box mb-20">
                  {/* Title */}
                  <h5 className="h5-lg capitalize">No Insurance? No problem</h5>
                  {/* Text */}
                  <p className="p-lg capitalize grey-text" >
                    Yep, we totally get that good teeth aren't a luxury.
                    Everyone deserves a care they need, and we'll make sure you
                    get the care you need at a price you can afford.
                  </p>
                </div>
                {/* TEXT BOX */}
                <div className="txt-box mb-20 capitalize">
                  {/* Title */}
                  <h5 className="h5-lg capitalize">
                    No commute, no hassle, and nobody knows you go to the
                    dentist
                  </h5>
                  {/* Text */}
                  <p className="p-lg capitalize  grey-text">
                    Save time by eliminating the dentist commute and scheduling
                    hassles. Connect to an online dentist in minutes, whenever
                    you need it.
                  </p>
                </div>
                {/* TEXT BOX */}
                <div className="txt-box mb-20 capitalize">
                  {/* Title */}
                  <h5 className="h5-lg capitalize">No hidden agenda or costs</h5>
                  {/* Text */}
                  <p className="p-lg capitalize grey-text">
                    Trusted advice and care thats about you, always. No hidden
                    agenda or costs. Whether you need a second opinion or an
                    in-depth treatment plan, you're in safe hands
                  </p>
                </div>
               
                {/* END TEXT BOX */}
              </div>
            </div>
            {/* END TEXT BLOCK */}
          </div>
        </div>
        {/* END TOP ROW */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1content3;
