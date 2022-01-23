import { VideoImage } from "../../VideoContent";

const Demo1content9 = () => {
  return (
    <section
      id="content-9"
      className="content-9 bg-01 pt-100 content-section division"
    >
      <div className="container white-color">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-60">
              <h2 className="h2-xs">
                Discover powerful features to boost your productivity
              </h2>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="content-9-img video-preview wow fadeInUp">
              <VideoImage />
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1content9;
