import Link from "next/dist/client/link";
const Demo15cta11 = () => {
  return (
    <section id="cta-11" className=" bg-whitesmoke-gradient">
      <div className="container ">
      <div style={{position:'absolute',top:0, left: '-100vmin'}}>
      <svg width="997" height="498" viewBox="0 0 997 498" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" d="M872.243 0C872.243 102.901 835.695 191.052 762.598 264.102C689.501 337.151 601.293 373.676 498.324 373.676C395.356 373.676 307.148 337.151 234.051 264.102C160.954 191.052 124.405 102.901 124.405 0H0C0 137.319 48.8484 254.619 146.194 351.901C243.539 449.183 360.916 498 498.324 498C635.732 498 753.109 449.183 850.455 351.901C947.8 254.619 997 137.319 997 0H872.243Z" fill="#00AB78"/>
</svg>
         
      </div>
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-7 col-lg-7">
              <div className="cta-11-txt">
                {/* Title */}
                <h2 className="h2-xs black-text">Ready to Join <span>
                <img src="/images/logo.svg" alt="mobile-logo" />
                  </span> </h2>
                {/* Text */}
                <p className="p-lg">
                  Donec vel sapien augue integer urna vel turpis cursus porta,
                  mauris augue luctus dolor velna auctor congue tempus
                </p>
                {/* Button */}
                <Link href="/pricing">
                  <a className="btn btn btn-orange-red tra-orange-red-hover mr-15">
                   View Pricing
                  </a>
                </Link>
              </div>
            </div>
            {/* CALL TO ACTION BUTTON */}
            <div className="col-lg-5">
              <div className="text-end">
                <div className="cta-11-img text-center">
                <img
                  className="img-fluid"
                  src="/images/hero-1-img.png"
                  alt="content-image"
                />
                </div>
              </div>
            </div>
          </div>
    
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo15cta11;
