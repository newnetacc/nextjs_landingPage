import Counter from "../../Counter";

const Demo1content1 = () => {
  return (
    <section
      id="content-1"
      className="content-1 bg-snow wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-lg-6 order-last order-lg-2">
            <div className="txt-block slim-column left-column wow fadeInRight">
              {/* Title */}
              <h2 className="h2-xs">
                Online dental care is the latest trend in healthcare
              </h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                    Moru teledentistry has created the leading service! Works
                    around your schedule, and can reach patients in any part of
                    the world
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Patients can access their health records online at all times, making it convenient for flexible working, traveling across the country, or living abroad
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Moru Teledentistry guarantees privacy for patients who want to be able to have dental consultation or a second opinion with ease of access, minimal distruption and convenience
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* END TEXT BLOCK */}
          {/* CB WRAPPER */}
          <div className="col-lg-6 order-first order-lg-2">
            <div className="cb-wrapper">
              {/* CB HOLDER */}
              <div className="cb-holder wow fadeInLeft">
                {/* CB BOX #1 */}
                <div className="cb-single-box">
                  <p className="p-lg cb-header">Dental Consultations</p>
                  <h2 className="h2-title-xs statistic-number">
                    <sup>+</sup>
                    <Counter end={784} />
                  </h2>
                  <p className="p-md mt-5 ico-10">
                    <span className="violet-red-color">
                      <span className="flaticon-" /> 4.6%
                    </span>
                    vs last 7 days
                  </p>
                </div>
              </div>
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
          </div>
          {/* END CB WRAPPER */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1content1;
