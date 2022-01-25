import { VideoImage } from "../../VideoContent";

const Demo13hero13 = () => {
  return (
    <section style={{position:'relative'}} id="hero-13" className="bg-scroll hero-section  bg-transparent-green">
          <div style={{position:'absolute',top:'-30vmin', left: '-54vmin'}}>
      <svg width="997" height="498" viewBox="0 0 997 498" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" d="M872.243 0C872.243 102.901 835.695 191.052 762.598 264.102C689.501 337.151 601.293 373.676 498.324 373.676C395.356 373.676 307.148 337.151 234.051 264.102C160.954 191.052 124.405 102.901 124.405 0H0C0 137.319 48.8484 254.619 146.194 351.901C243.539 449.183 360.916 498 498.324 498C635.732 498 753.109 449.183 850.455 351.901C947.8 254.619 997 137.319 997 0H872.243Z" fill="#00AB78"/>
</svg>
         
      </div>
      <div className="container">
        {/* HERO TITLE */}
        <div className="row">
          <div className="col-md-7 col-lg-6">
            <div className="hero-13-title mb-40">
              <h2 className="h2-lg black-text capitalize">
                Trusted dental advice across all Middle Eastern countries
              </h2>
              <p className="p-title-sm capitalize">
                Our online dentists provide impartial advive and care that's
                focused on you. It's easy to understand with a personalized
                touch. There's no jargon, just great care, whereever you are,
                whenever you need it.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-6">
              <div className="img-block  wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/img-05.png"
                  alt="content-image"
                />
          
            </div>
          </div>
        </div>
        
        {/* End row */}
      </div>{" "}
      {/* End container */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Demo13hero13;
