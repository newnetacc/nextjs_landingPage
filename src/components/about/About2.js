const About2 = () => {
  return (
    <section id="about-2" className="about-section">
      <div className="bg-inner bg-lightgrey inner-page-hero division">
        <div className="container">
          {/* ABOUT-2 TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="about-2-title">
                {/* Title */}
                <h2 className="h2-xl">
                  Creativity and quality is our destination
                </h2>
                {/* Text */}
                <p className="p-xl">
                  Quaerat sodales sapien and euismod blandit vitae ipsum primis
                  cubilia undo laoreet augue luctus magna and dolor luctus
                  egestas sapien
                </p>
              </div>
            </div>
          </div>{" "}
          {/* END ABOUT-2 TITLE */}
          {/* ABOUT-2 IMAGES */}
          <div className="about-2-images">
            <div className="row row-cols-1 row-cols-md-2">
              {/* IMAGES-1 */}
              <div className="col col-md-5">
                <img
                  className="img-fluid"
                  src="/images/about-1-img.jpg"
                  alt="about-image"
                />
              </div>
              {/* IMAGES-2 */}
              <div className="col col-md-7">
                <img
                  className="img-fluid"
                  src="/images/about-2-img.jpg"
                  alt="about-image"
                />
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END ABOUT-2 IMAGES */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* End bg-inner */}
    </section>
  );
};

export default About2;
