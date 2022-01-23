import Link from "next/dist/client/link";
const Faq = () => {
  return (
    <section id="faqs-2" className="wide-60 faqs-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              {/* Title */}
              <h2 className="h2-md">Got Questions? Look Here</h2>
              {/* Text */}
            </div>
          </div>
        </div>
        {/* FAQs-2 QUESTIONS */}
        <div className="faqs-2-questions">
          <div className="row row-cols-1 row-cols-lg-2">
            {/* QUESTIONS HOLDER */}
            <div className="col">
              <div className="questions-holder pr-15">
                {/* QUESTION #1 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">How Can i get started?</h5>
                  {/* Answer */}
                  <p className="p-lg">1. Sign up</p>
                  <p className="p-lg">
                    2. Answer few questions on your oral health
                  </p>
                  <p className="p-lg">
                    1. Share images of your teeth and mouth
                  </p>
                  <p className="p-lg">1. Complete report delivered </p>
                </div>
                {/* QUESTION #2 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                    How long does it take to receive my report?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                    For the single issue service then its up to 6 hours while
                    the full oral assessment service is up to 24 hours
                  </p>
                </div>
                {/* QUESTION #3 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">How can i pay?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                    We accept payments online via VISA or MASTERCARD debit or
                    credit card
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* END QUESTIONS HOLDER */}
            {/* QUESTIONS HOLDER */}
            <div className="col">
              <div className="questions-holder pl-15">
                {/* QUESTION #4 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">Do you have a physical office?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                    We would love to meet you personally. But we are an online
                    dental office completely in the cloud. However, we are
                    planning to set up state of the art dental offices in the
                    near future
                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">Do you accept insurance?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                    Unfortunately we do not accept insurance at the moment.
                  </p>
                </div>
                {/* QUESTION #6 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">I have an issue with my account</h5>
                  {/* Answer */}
                  <p className="p-lg">
                    send us an email at help@getmoru.com
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* END QUESTIONS HOLDER */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* END FAQs-2 QUESTIONS */}
        {/* MORE QUESTIONS BUTTON */}
        <div className="row">
          <div className="col">
            <div className="more-questions">
              <h5 className="h5-sm">
                Have more questions?{" "}
                <Link href="/contacts">
                  <a>Ask your question here</a>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Faq;
