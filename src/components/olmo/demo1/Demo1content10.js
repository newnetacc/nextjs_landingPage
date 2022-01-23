import { VideoWithBtn } from "../../VideoContent";

const Demo1content10 = () => {
  return (
    <section
      id="content-10"
      className="content-10 wide-100 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Share Moments. Share Life.</h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="img-block text-center wow fadeInUp">
              <img
                className="img-fluid"
                src="/images/social-networks.png"
                alt="content-image"
              />
            </div>
          </div>
        </div>
        {/* ACTION BUTTON */}
        <div className="row">
          <div className="col">
            <div className="content-10-btn">
              {/* Button */}
              <VideoWithBtn
                extraClass="video-popup2 btn btn-md btn-orange-red tra-grey-hover ico-15 ico-left"
                id="7e90gBu4pas"
              />
              {/* Advantages List */}
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
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1content10;
