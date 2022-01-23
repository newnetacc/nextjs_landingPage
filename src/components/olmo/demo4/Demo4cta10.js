import Link from "next/dist/client/link";
const Demo4cta10 = () => {
  return (
    <section id="cta-10" className="bg-04 pt-50 pb-50 cta-section division">
      <div className="container white-color">
        <div className="cta-10-wrapper">
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-8 col-xl-7">
              <div className="cta-10-txt">
                {/* Title */}
                <h3 className="h3-md">
                  {`Get started with OLMO for Free. It's fast and very easy!`}
                </h3>
                {/* Text */}
                <p className="p-lg">
                  Donec vel sapien augue integer urna vel turpis cursus porta,
                  mauris augue luctus dolor velna auctor congue tempus integer
                  pretium
                </p>
                {/* Button */}
                <Link href="/pricing">
                  <a className="btn btn-pink tra-white-hover">
                    Get Started Now
                  </a>
                </Link>
              </div>
            </div>
            {/* CALL TO ACTION BUTTON */}
            <div className="col-lg-4 col-xl-5">
              <div className="text-end">
                <div className="cta-10-img text-center">
                  <img
                    className="img-fluid"
                    src="/images/img-25.png"
                    alt="cta-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo4cta10;
