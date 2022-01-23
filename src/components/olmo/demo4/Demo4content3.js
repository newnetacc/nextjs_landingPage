const Demo4content3 = () => {
  return (
    <section
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        {/* TOP ROW */}
        <div className="top-row pb-50">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/img-04.png"
                  alt="content-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* Section ID */}
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  Fast Performance
                </span>
                {/* Title */}
                <h2 className="h2-xs">Lightning fast and super powerful</h2>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Fringilla risus, luctus mauris orci auctor euismod iaculis
                      luctus magna purus pretium ligula purus undo quaerat
                      tempor sapien rutrum mauris quaerat ultrice
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Quaerat sodales sapien euismod purus blandit
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Nemo ipsam egestas volute turpis dolores undo ultrice
                      aliquam quaerat at sodales sapien purus
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* END TEXT BLOCK */}
          </div>
        </div>
        {/* END TOP ROW */}
        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6 order-last order-md-2">
              <div className="txt-block left-column wow fadeInRight">
                {/* TEXT BOX */}
                <div className="txt-box mb-20">
                  {/* Title */}
                  <h5 className="h5-lg">Advanced Performance Made Easy</h5>
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
                  <h5 className="h5-lg">Creative Alternative Solutions</h5>
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
                </div>
                {/* END TEXT BOX */}
              </div>
            </div>
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6 order-first order-md-2">
              <div className="img-block right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="/images/img-06.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>
        {/* END BOTTOM ROW */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo4content3;
