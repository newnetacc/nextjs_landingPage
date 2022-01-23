import { VideoWithBtn } from "../../VideoContent";

const Demo15hero15 = () => {
  return (
    <section id="hero-15" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col text-center">
            {/* HERO TEXT */}
            <div className="hero-15-txt white-color">
              {/* Title */}
              <h2 className="h2-lg wow fadeInUp">
                Personalized care that fits your life
              </h2>
              {/* Buttons Group */}
              <div className="btns-group wow fadeInUp">
                <a
                  href="#features-7"
                  className="btn btn-md btn-orange-red tra-white-hover mr-15"
                >
                  Connect to a Dentist
                </a>
                <VideoWithBtn
                  id="7e90gBu4pas"
                  defText="How it Works"
                  extraClass="video-popup2 btn btn-md btn-transparent ico-20 ico-left"
                />
              </div>
            </div>{" "}
            {/* END HERO TEXT */}
            {/* HERO IMAGE */}
            <div className="hero-15-img wow fadeInUp">
              <img
                className="img-fluid"
                src="/images/dashboard-03.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo15hero15;
