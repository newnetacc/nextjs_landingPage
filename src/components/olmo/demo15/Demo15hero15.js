import { VideoWithBtn } from "../../VideoContent";

const Demo15hero15 = () => {
  return (
    <section id="hero-15" className="bg-scroll hero-section division bg-green" style={{position:'relative'}}>
              <div style={{position:'absolute',top:0, left: '-54vmin'}}>
      <svg  width="997" height="498" width="997" height="498" width="997" height="498" width="997" height="498" viewBox="0 0 997 498" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M872.243 0C872.243 102.901 835.695 191.052 762.598 264.102C689.501 337.151 601.293 373.676 498.324 373.676C395.356 373.676 307.148 337.151 234.051 264.102C160.954 191.052 124.405 102.901 124.405 0H0C0 137.319 48.8484 254.619 146.194 351.901C243.539 449.183 360.916 498 498.324 498C635.732 498 753.109 449.183 850.455 351.901C947.8 254.619 997 137.319 997 0H872.243Z" fill="#EBF6F7"/>
</svg>
         
      </div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col text-center">
            {/* HERO TEXT */}
            <div className="hero-15-txt white-color">
              {/* Title */}
              <h2 className="h2-lg wow fadeInUp black-text">
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
                style={{borderRadius:24}}
                className="img-fluid"
                src="/images/dashboard-03.jpg"
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
