import Link from "next/dist/client/link";
const Demo18cta1 = () => {
  return (
    <section id="cta-1" className="bg-snow cta-section division">
      <div className="container">
        <div className="rel bg-white cta-1-wrapper">
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-8">
              <div className="cta-1-txt">
                <h4 className="h4-xl">
                  Try OLMO free for 14 days. Start your trial now and pick a
                  plan later
                </h4>
              </div>
            </div>
            {/* CALL TO ACTION BUTTON */}
            <div className="col-lg-4">
              <div className="text-end">
                <div className="cta-1-btn text-center">
                  <Link href="/pricing">
                    <a className="btn btn-skyblue tra-grey-hover">
                      Get Started Now
                    </a>
                  </Link>
                  <p>
                    <a href="#">Read The FAQs</a>
                  </p>
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

export default Demo18cta1;
