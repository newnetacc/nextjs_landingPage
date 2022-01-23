import Counter from "../Counter";

const Fcontent3 = () => {
  return (
    <section
      id="content-3"
      className="bg-snow content-3 wide-60 content-section division"
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
                  src="/images/img-09.png"
                  alt="content-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* Section ID */}
                <span className="section-id txt-upcase">Totally Optimized</span>
                {/* Title */}
                <h2 className="h2-xs">Work smarter with powerful features</h2>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit at vitae ipsum primis
                  undo and cubilia laoreet augue and luctus magna dolor luctus
                  at egestas sapien vitae nemo egestas volute and turpis dolores
                  aliquam quaerat sodales a sapien
                </p>
                {/* Tools List */}
                <div className="tools-list ico-40 mt-30">
                  {/* Text */}
                  <h6 className="h6-xl">Technologies We Use:</h6>
                  {/* Icons */}
                  <span className="flaticon-html-5 text-black-50" />
                  <span className="flaticon-css-3 text-black-50" />
                  <span className="flaticon-wordpress-logo text-black-50" />
                  <span className="flaticon-js text-black-50" />
                  <span className="flaticon-diamond-1 text-black-50" />
                </div>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>
        </div>{" "}
        {/* END TOP ROW */}
        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-lg-6 order-last order-lg-2">
              <div className="txt-block slim-column left-column wow fadeInRight">
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
                  <h5 className="h5-lg">The Complete Software Solution</h5>
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
            {/* CB WRAPPER */}
            <div className="col-lg-6 order-first order-lg-2">
              <div className="cb-wrapper">
                {/* CB HOLDER */}
                <div className="cb-holder wow fadeInLeft">
                  {/* CB BOX #1 */}
                  <div className="cb-single-box">
                    <p className="p-lg cb-header">New Customers</p>
                    <h2 className="h2-title-xs statistic-number">
                      <sup>+</sup>
                      {/* <Counter end={784} /> */}
                      <Counter end={784} />
                    </h2>
                    <p className="p-md mt-5 ico-10">
                      <span className="green-color">
                        <span className="flaticon-" /> 4.6%
                      </span>{" "}
                      vs last 7 days
                    </p>
                  </div>
                  <hr className="divider" />
                  {/* CB BOX #2 */}
                  <div className="cb-single-box">
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-md">
                          Fringilla risus luctus mauris auctor and purus euismod
                          purus
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-md">
                          Nemo ipsam volute turpis dolores ut quaerat sodales
                          sapien
                        </p>
                      </li>
                    </ul>
                  </div>
                  {/* CB BOX #3 */}
                  <div className="cb-single-box cb-box-rounded bg-green white-color mt-25">
                    <h4 className="h4-lg">98.245</h4>
                    <p className="p-lg">Ligula risus auctor tempus</p>
                  </div>
                </div>{" "}
                {/* END CB HOLDER */}
                {/* CB SHAPE */}
                <div className="cb-shape-1">
                  <img
                    className="img-fluid"
                    src="/images/bg-shape-1.png"
                    alt="content-image"
                  />
                </div>
                {/* CB SHAPE */}
                <div className="cb-shape-2">
                  <img
                    className="img-fluid"
                    src="/images/bg-shape-2.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>{" "}
            {/* END CB WRAPPER */}
          </div>
        </div>{" "}
        {/* END BOTTOM ROW */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Fcontent3;
