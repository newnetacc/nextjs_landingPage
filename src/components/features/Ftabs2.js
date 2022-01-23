const Ftabs2 = () => {
  return (
    <section id="tabs-2" className="wide-60 tabs-section division">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
          {/* TABS NAVIGATION */}
          <div className="col">
            <div className="tabs-nav clearfix">
              <ul className="tabs-1">
                {/* TAB-1 LINK */}
                <li className="tab-link current" data-tab="tab-1">
                  {/* Title */}
                  <h5 className="h5-md">Perfect Integration</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Semper lacus cursus porta feugiat primis a luctus ultrice
                    tellus potenti neque dolor in primis
                  </p>
                </li>
                {/* TAB-2 LINK */}
                <li className="tab-link" data-tab="tab-2">
                  {/* Title */}
                  <h5 className="h5-md">Speed Optimized</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Semper lacus cursus porta feugiat primis a luctus ultrice
                    tellus potenti neque dolor in primis
                  </p>
                </li>
                {/* TAB-3 LINK */}
                <li className="tab-link" data-tab="tab-3">
                  {/* Title */}
                  <h5 className="h5-md">Advanced Security</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Semper lacus cursus porta feugiat primis a luctus ultrice
                    tellus potenti neque dolor in primis
                  </p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* END TABS NAVIGATION */}
          {/* IMAGE BLOCK */}
          <div className="col">
            <div className="img-block right-column wow fadeInLeft">
              <div className="tabs-content">
                {/* TAB #1 IMAGE */}
                <div id="tab-1" className="tab-content current">
                  <img
                    className="img-fluid"
                    src="/images/img-06.png"
                    alt="tab-image"
                  />
                </div>
                {/* TAB #2 IMAGE */}
                <div id="tab-2" className="tab-content">
                  <img
                    className="img-fluid"
                    src="/images/img-10.png"
                    alt="tab-preview"
                  />
                </div>
                {/* TAB #3 IMAGE */}
                <div id="tab-3" className="tab-content">
                  <img
                    className="img-fluid"
                    src="/images/img-14.png"
                    alt="tab-image"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END IMAGE BLOCK */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Ftabs2;
