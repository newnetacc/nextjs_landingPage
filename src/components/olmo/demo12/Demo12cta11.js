import Link from "next/dist/client/link";
const Demo12cta11 = () => {
  return (
    <section id="cta-11" className="bg-snow cta-section division">
      <div className="container">
        <div className="bg-tra-grey cta-11-wrapper">
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-7 col-lg-7">
              <div className="cta-11-txt">
                {/* Title */}
                <h2 className="h2-xs black-text">Ready to Join <span>
                <img src="/images/logo-red.svg" alt="mobile-logo" />
                  </span> </h2>
                {/* Text */}
                <p className="p-lg">
                  Donec vel sapien augue integer urna vel turpis cursus porta,
                  mauris augue luctus dolor velna auctor congue tempus
                </p>
                {/* Button */}
                <Link href="/pricing">
                  <a className="btn bg-red">
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
                  src="/images/dental_care.svg"
                  alt="content-image"
                />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo12cta11;
