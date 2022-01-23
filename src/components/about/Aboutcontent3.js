const Aboutcontent3 = () => {
  return (
    <section
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        {/* TOP ROW */}
        <div className="top-row pb-50">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6 order-last order-lg-2">
              <div className="txt-block left-column wow fadeInRight">
                {/* Section ID */}
                <span className="section-id txt-upcase">Digital Strategy</span>
                {/* Title */}
                <h2 className="h2-xs">Start your online business with OLMO</h2>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit at vitae ipsum primis
                  undo and cubilia laoreet augue and luctus magna dolor luctus
                  at egestas sapien vitae nemo egestas
                </p>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit purus a purus ipsum
                  primis in cubilia laoreet augue luctus magna dolor luctus and
                  egestas sapien egestas vitae nemo volute
                </p>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6 order-first order-md-2">
              <div className="img-block left-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="/images/img-16.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END TOP ROW */}
        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/img-17.png"
                  alt="video-preview"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* TEXT BOX */}
                <div className="txt-box mb-25">
                  {/* Title */}
                  <h5 className="h5-lg">Advanced Analytics Review</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Quaerat sodales sapien euismod blandit at vitae ipsum primis
                    undo and cubilia laoreet augue and luctus magna dolor luctus
                    at egestas sapien vitae nemo egestas volute and turpis
                    dolores aliquam quaerat sodales a sapien
                  </p>
                </div>
                {/* TEXT BOX */}
                <div className="txt-box">
                  {/* Title */}
                  <h5 className="h5-lg">Search Engine Optimization (SEO)</h5>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris auctor euismod an iaculis
                        luctus magna purus pretium ligula purus and quaerat
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Nemo ipsam egestas volute turpis dolores undo ultrice
                        aliquam quaerat at sodales sapien purus
                      </p>
                    </li>
                  </ul>
                </div>{" "}
                {/* END TEXT BOX */}
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>
        </div>{" "}
        {/* END BOTTOM ROW */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Aboutcontent3;
