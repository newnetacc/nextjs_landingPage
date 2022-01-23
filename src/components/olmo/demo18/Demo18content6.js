const Demo18content6 = () => {
  return (
    <section
      id="content-6"
      className="content-6 bg-whitesmoke wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 col-lg-5">
            <div className="txt-block left-column wow fadeInRight">
              {/* Section ID */}
              <span className="section-id txt-upcase">Easiest to Use</span>
              {/* Title */}
              <h3 className="h3-lg">One brilliant idea for every client</h3>
              {/* Text */}
              <p className="p-lg">
                Aliqum mullam blandit tempor sapien gravida at donec ipsum porta
                justo. Velna vitae auctor and congue magna impedit luctus dolor
                volute
              </p>
              {/* Button */}
              <a href="#pricing-3" className="btn btn-skyblue tra-grey-hover">
                Pricing &amp; Packages
              </a>
            </div>
          </div>
          {/* IMAGE BLOCK */}
          <div className="col-md-6 col-lg-7">
            <div className="img-block right-column wow fadeInLeft">
              <img
                className="img-fluid"
                src="/images/seo-06.png"
                alt="content-image"
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

export default Demo18content6;
