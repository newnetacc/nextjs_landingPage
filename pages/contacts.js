import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const contacts = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="contacts-2"
        className="bg-snow wide-50 inner-page-hero contacts-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-80">
                {/* Title */}
                <h2 className="h2-xs">
                  {`Have a question? Need help? Don't hesitate, drop us a line`}
                </h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius and
                  magnis sapien
                </p>
              </div>
            </div>
          </div>
          {/* CONTACT FORM */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="form-holder">
                <form
                  name="contactform"
                  className="row contact-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Form Select */}
                  <div className="col-md-12 input-subject">
                    <p className="p-lg">This question is about: </p>
                    <span>
                      Choose a topic, so we know who to send your request to:{" "}
                    </span>
                    <select
                      className="form-select subject"
                      aria-label="Default select example"
                    >
                      <option selected>This question is about...</option>
                      <option>Registering/Authorising</option>
                      <option>Using Application</option>
                      <option>Troubleshooting</option>
                      <option>Backup/Restore</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {/* Contact Form Input */}
                  <div className="col-md-12">
                    <p className="p-lg">Your Name: </p>
                    <span>Please enter your real name: </span>
                    <input
                      type="text"
                      name="name"
                      className="form-control name"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Your Email Address: </p>
                    <span>
                      Please carefully check your email address for accuracy
                    </span>
                    <input
                      type="text"
                      name="email"
                      className="form-control email"
                      placeholder="Email Address*"
                    />
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Explain your question in details: </p>
                    <span>
                      Your OS version, OLMO version &amp; build, steps you did.
                      Be VERY precise!
                    </span>
                    <textarea
                      className="form-control message"
                      name="message"
                      rows={6}
                      placeholder="I have a problem with..."
                      defaultValue={""}
                    />
                  </div>
                  {/* Contact Form Button */}
                  <div className="col-md-12 mt-15 form-btn text-right">
                    <button
                      type="submit"
                      className="btn btn-skyblue tra-grey-hover submit"
                    >
                      Submit Request
                    </button>
                  </div>
                  {/* Contact Form Message */}
                  <div className="col-lg-12 contact-form-msg">
                    <span className="loading" />
                  </div>
                </form>
              </div>
            </div>
          </div>{" "}
          {/* END CONTACT FORM */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END CONTACTS-2 */}
      {/* DIVIDER LINE */}
      <hr className="divider" />
      {/* CALL TO ACTION-8
			============================================= */}
      <section id="cta-8" className="bg-snow wide-100 cta-section division">
        <div className="container">
          <div className="cta-8-wrapper pc-25">
            <div className="row row-cols-1 row-cols-md-2">
              {/* BOX #1 */}
              <div className="col">
                <Link href="/pricing">
                  <a>
                    <div className="cta-box cta-top-box bg-white wow fadeInUp">
                      {/* Icon */}
                      <div className="cta-ico">
                        <div className="ico-60">
                          <span className="flaticon-wallet" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cta-txt">
                        {/* Title */}
                        <h5 className="h5-md">View Pricing</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus at auctor tempus
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>{" "}
              {/* END BOX #1 */}
              {/* BOX #2 */}
              <div className="col">
                <Link href="/faqs">
                  <a>
                    <div className="cta-box bg-white wow fadeInUp">
                      {/* Icon */}
                      <div className="cta-ico">
                        <div className="ico-60">
                          <span className="flaticon-help" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cta-txt">
                        {/* Title */}
                        <h5 className="h5-md">Read the FAQs</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus at auctor tempus
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>{" "}
              {/* END BOX #2 */}
            </div>{" "}
            {/* End cta-8-wrapper */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END CALL TO ACTION-8 */}
      {/* DIVIDER LINE */}
      <hr className="divider" />
    </Layout>
  );
};

export default contacts;
