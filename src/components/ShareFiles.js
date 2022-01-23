const ShareFiles = ({ flexible }) => {
  return (
    <section
      id="content-2"
      className="content-2 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/img-09.png"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {flexible && (
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  Extremely Flexible
                </span>
              )}
              {/* Title */}
              <h2 className="h2-xs">100% secure and private</h2>
              {/* Text */}
              <p className="p-lg">
                We treat your information with the highest level of
                confidentiality and security. Toothpic operates within
                HIPAA-compliance. We're committed to your privacy and safety.
              </p>
              {/* Title */}
              <h2 className="h2-xs">Dedicated to quality care</h2>
              {/* Text */}
              <p className="p-lg">
                We offer dental care under the highest standards of clinical
                guidelines. Our online dentist give advice, diagnosis and
                treatment options within these guidelines. All advice given has
                your best interest and health in mind.
              </p>
            </div>
          </div>
          {/* END TEXT BLOCK */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default ShareFiles;
