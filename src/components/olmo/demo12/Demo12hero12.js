import { VideoImage } from "../../VideoContent";

const Demo12hero12 = () => {
  return (
    <section id="hero-12" className="rel hero-section division">
      <div className="container">
        {/* HERO TEXT */}
        <div className="row d-flex">
          <div className="col-lg-6 ">
            <div className="hero-12-txt">
              {/* Rounded Logo */}
             
              {/* Title */}
              <h2 className="h2-xs capitalize">
                Connect to an online <br />
                dentist in <span className='red-text'> 3 easy steps</span>
              </h2>
              {/* Text */}
              <p className='capitalize p-lg '>
                With emergencies, you never know when they'll happen. MORU
                connects you with a licensed dentist - no matter your location,
                or how much time is left on the clock.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="hero-12-img video-preview">
               <img
                className="img-fluid"
                src="/images/how-it-works-hero.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>{" "}
        {/* HERO TEXT */}
        {/* HERO IMAGE */}
        {/* <div className="row"> */}
  
        {/* </div>{" "} */}
        {/* END HERO IMAGE */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo12hero12;
