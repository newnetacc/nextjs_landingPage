import Link from "next/dist/client/link";
const Fcta3 = () => {
  return (
    <section id="cta-3" className="cta-section division">
      <div className="cta-3-holder bg-lightgrey">
        <div className="container">
          <div className="bg-white cta-3-wrapper">
            <div className="row d-flex align-items-center">
              {/* CALL TO ACTION TEXT */}
              <div className="col-lg-7 col-lg-8">
                <div className="cta-3-txt">
                  <h4 className="h4-xl">
                    Try OLMO free for 14 days. Start your trial now and pick a
                    plan later
                  </h4>
                </div>
              </div>
              {/* CALL TO ACTION BUTTON */}
              <div className="col-lg-4">
                <div className="text-end">
                  <div className="cta-3-btn text-center">
                    <Link href="/pricing">
                      <a className="btn btn-skyblue tra-grey-hover">
                        Get Started Now
                      </a>
                    </Link>
                    <p>
                      <Link href="/faqs">
                        <a>Read The FAQs</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>
    </section>
  );
};

export default Fcta3;
