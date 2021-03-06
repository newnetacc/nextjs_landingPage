import Link from "next/dist/client/link";
const Demo13cta6 = () => {
  return (
    <section id="cta-6" className="bg-04 pt-70 pb-70 cta-section division">
      <div className="container">
        <div className="row justify-content-md-center">
          {/* BANNER TEXT */}
          <div className="col col-lg-8">
            <div className="cta-6-txt white-color text-center">
              {/* Title */}
              <h2 className="h2-sm">Make your life better. Keep your smile!</h2>
              <p className="last-li">Get a great dental care anytime</p>
              {/* Buttons Group */}
              <div className="btns-group mb-30">
                <Link href="/download">
                  <a className="btn btn-md btn-violet-red tra-white-hover mr-15">
                    Connect to a Dentist
                  </a>
                </Link>
                <Link href="/pricing">
                  <a className="btn btn-md btn-tra-white white-hover">
                    View Pricing
                  </a>
                </Link>
              </div>
              {/* Advantages List */}
            
            </div>
          </div>{" "}
          {/* END BANNER TEXT */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo13cta6;
