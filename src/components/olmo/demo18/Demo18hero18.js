const Demo18hero18 = () => {
  return (
    <section id="hero-18" className="rel bg-snow hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO REQUEST FORM */}
          <div className="col-md-7 col-lg-6">
            <div id="hero-18-form">
              {/* Title */}
              <h2 className="h2-sm">
                Get more sales with SEO, PPC, and Email Marketing
              </h2>
              {/* Form */}
              <form
                name="requestForm"
                className="row request-form"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Form Input */}
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control name"
                    placeholder="Enter Your Name*"
                    autoComplete="off"
                    required
                  />
                </div>
                {/* Form Input */}
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control email"
                    placeholder="Enter Your Email*"
                    autoComplete="off"
                    required
                  />
                </div>
                {/* Form Button */}
                <div className="col-md-12 form-btn mt-15">
                  <button
                    type="submit"
                    className="btn btn-md btn-skyblue tra-grey-hover submit"
                  >
                    Get Started Now
                  </button>
                </div>
                {/* Form Message */}
                <div className="col-md-12 request-form-msg text-center">
                  <span className="loading" />
                </div>
              </form>
              {/* Advantages List */}
              <ul className="advantages clearfix mt-20">
                <li className="first-li">
                  <p>Free 30 days trial</p>
                </li>
                <li>
                  <p>Exclusive Support</p>
                </li>
                <li className="last-li">
                  <p>No Fees</p>
                </li>
              </ul>
            </div>{" "}
            {/* END FORM */}
          </div>{" "}
          {/* END HERO REQUEST FORM */}
          {/* HERO IMAGE */}
          <div className="col-md-5 col-lg-6">
            <div className="hero-18-img wow fadeInLeft">
              <img
                className="img-fluid"
                src="/images/hero-18-img.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo18hero18;
