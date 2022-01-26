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
              <h2 className="h2-xs capitalize">
                Online dental care is the latest trend in healthcare
              </h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg  capitalize">
                    Moru teledentistry has created the leading service! Works
                    around your schedule, and can reach patients in any part of
                    the world
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg capitalize">
                    Patients can access their health records online at all times, making it convenient for flexible working, traveling across the country, or living abroad
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg capitalize">
                    Moru Teledentistry guarantees privacy for patients who want to be able to have dental consultation or a second opinion with ease of access, minimal distruption and convenience
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* END TEXT BLOCK */}
          {/* CB WRAPPER */}
          <div className="col-lg-6 order-first order-lg-2">
          <div className="">
              <div className="img-block right-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/dental_care.svg"
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
