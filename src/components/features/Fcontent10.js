import { VideoImage } from "../VideoContent";

const Fcontent10 = () => {
  return (
    <section
      id="content-10"
      className="content-10 wide-100 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-60">
              {/* Section ID */}
              <span className="section-id txt-upcase">Extremely Flexible</span>
              {/* Title */}
              <h2 className="h2-xs">
                Discover powerful features to boost your productivity
              </h2>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="img-block text-center video-preview wow fadeInUp">
              <VideoImage extraClass="video-btn video-btn-xl bg-pink ico-90" />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Fcontent10;
