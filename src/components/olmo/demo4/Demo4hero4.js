const Demo4hero4 = () => {
  return (
    <section id="hero-4" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-md-6">
            <div className="hero-4-txt white-color">
              {/* Title */}
              <h2 className="h2-lg">
                Create your unique website with OLMO in just few hours
              </h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-xl">
                    Fringilla risus, luctus mauris orci auctor purus a ligula
                    undo euismod pretium purus pretium rutrum tempor sapien
                    ligula undo auctor mauris
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-xl">
                    Nemo ipsam egestas volute turpis dolores aliquam quaerat
                    sodales sapien undo pretium a purus
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* END HERO TEXT */}
          {/* HERO REQUEST FORM */}
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div id="hero-4-form">
              {/* Small Logo */}
              <div className="hero-logo-sm mb-20">
                <img
                  className="img-fluid"
                  src="/images/logo-01.png"
                  alt="hero-logo"
                />
              </div>
              {/* Title */}
              <h4 className="h4-xs">
                Convert your ideas into workable solutions
              </h4>
              {/* Text */}
              <p className="p-lg">
                Feugiat primis ligula risus auctor purus laoreet augue mauris
                viverra tortor
              </p>
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
                <div className="col-md-12 form-btn mt-10">
                  <button
                    type="submit"
                    className="btn btn-md btn-pink tra-grey-hover submit"
                  >
                    Get Started Now
                  </button>
                </div>
                {/* Form Message */}
                <div className="col-md-12 request-form-msg text-center">
                  <span className="loading" />
                </div>
              </form>
            </div>
          </div>
          {/* END HERO REQUEST FORM */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
      {/* WAVE SHAPE BOTTOM */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,192L120,197.3C240,203,480,213,720,197.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Demo4hero4;
