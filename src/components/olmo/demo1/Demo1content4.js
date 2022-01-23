import Link from "next/dist/client/link";
const Demo1content4 = () => {
  return (
    <section id="content-4" className="content-4 pt-80 content-section">
      <div className="bg-inner bg-whitesmoke-gradient division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6 order-end order-md-2">
              <div className="content-4-img left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/img-01.png"
                  alt="content-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6 order-first order-md-2">
              <div className="txt-block right-column wow fadeInLeft">
                {/* Title */}
                <h2 className="h2-xs">
                  Make your life better. Keep your smile!
                </h2>
                {/* Text */}
                <p className="p-lg">
                  Get a dental care anytime
                </p>
                {/* Buttons Group */}
                <div className="btns-group mb-30">
                  <Link href="/download">
                    <a className="btn btn-orange-red tra-orange-red-hover mr-15">
                      {` Connect to a Dentist`}
                    </a>
                  </Link>
                  <Link href="/pricing">
                    <a className="btn btn-tra-grey tra-orange-red-hover">
                      View Pricing
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* END CONTENT TXT */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </div>
      {/* End Inner Background */}
    </section>
  );
};

export default Demo1content4;
