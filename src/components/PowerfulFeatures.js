const PowerfulFeatures = ({ noBg, id, sync, footer }) => {
  return (
    <section
      id={`content-${id ? id : 9}`}
      className={`${
        !noBg
          ? `content-${id ? id : 9} bg-01 pt-100 content-section division`
          : `content-${id ? id : 9} pb-100 content-section division`
      }`}
    >
      <div className={`container ${noBg ? "" : "white-color"}`}>
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-60">
              {sync && (
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  Sync Across Devices
                </span>
              )}
              <h2 className="h2-xs">
                Discover powerful features to boost your productivity
              </h2>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div
              className={`${
                noBg
                  ? "img-block text-center video-preview wow fadeInUp"
                  : "content-9-img video-preview wow fadeInUp"
              }`}
            >
              {/* Play Icon */}
              <a
                className="video-popup1"
                href="https://www.youtube.com/embed/SZEflIVnhH8"
              >
                <div className="video-btn video-btn-xl bg-orange-red ico-90">
                  <div className="video-block-wrapper">
                    <span className="flaticon-play-button" />
                  </div>
                </div>
              </a>
              {/* Preview Image */}
              <img
                className="img-fluid"
                src="/images/dashboard-07.png"
                alt="video-preview"
              />
            </div>
          </div>
        </div>
        {footer && (
          <div className="row">
            <div className="col">
              <div className="content-10-btn">
                <ul className="advantages mt-25 clearfix">
                  <li className="first-li">
                    <p>Free 30 days trial</p>
                  </li>
                  <li>
                    <p>Exclusive Support</p>
                  </li>
                  <li className="last-li">
                    <p>No Fees</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* End container */}
    </section>
  );
};

export default PowerfulFeatures;
