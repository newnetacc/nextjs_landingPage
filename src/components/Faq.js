import Link from "next/dist/client/link";
const Faq = () => {
  return (
    <section id="faqs-2" style={{position:'relative'}} className="wide-60 faqs-section division">
         <div style={{position:'absolute',top:0, left: '-74vmin'}}>
      <svg width="997" height="498" viewBox="0 0 997 498" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" d="M872.243 0C872.243 102.901 835.695 191.052 762.598 264.102C689.501 337.151 601.293 373.676 498.324 373.676C395.356 373.676 307.148 337.151 234.051 264.102C160.954 191.052 124.405 102.901 124.405 0H0C0 137.319 48.8484 254.619 146.194 351.901C243.539 449.183 360.916 498 498.324 498C635.732 498 753.109 449.183 850.455 351.901C947.8 254.619 997 137.319 997 0H872.243Z" fill="#00AB78"/>
</svg>
         
      </div>
      <div style={{position:'absolute',bottom:0, right: '-80vmin'}}>
      <svg style={{transform:'rotate(180deg)'}} width="997" height="498" viewBox="0 0 997 498" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" d="M872.243 0C872.243 102.901 835.695 191.052 762.598 264.102C689.501 337.151 601.293 373.676 498.324 373.676C395.356 373.676 307.148 337.151 234.051 264.102C160.954 191.052 124.405 102.901 124.405 0H0C0 137.319 48.8484 254.619 146.194 351.901C243.539 449.183 360.916 498 498.324 498C635.732 498 753.109 449.183 850.455 351.901C947.8 254.619 997 137.319 997 0H872.243Z" fill="#00AB78"/>
</svg>
         
      </div>
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
                  <h5 className="h5-md capitalize">How Can i get started?</h5>
                  {/* Answer */}
                  <p className="p-lg capitalize">1. Sign up</p>
                  <p className="p-lg capitalize">
                    2. Answer few questions on your oral health
                  </p>
                  <p className="p-lg capitalize">
                    3. Share images of your teeth and mouth
                  </p>
                  <p className="p-lg capitalize">4. Complete report delivered </p>
                </div>
                {/* QUESTION #2 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md capitalize" >
                    How long does it take to receive my report?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg capitalize">
                    For the single issue service then its up to 6 hours while
                    the full oral assessment service is up to 24 hours
                  </p>
                </div>
                {/* QUESTION #3 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md capitalize">How can i pay?</h5>
                  {/* Answer */}
                  <p className="p-lg capitalize">
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
                  <h5 className="h5-md capitalize">Do you have a physical office?</h5>
                  {/* Answer */}
                  <p className="p-lg capitalize">
                    We would love to meet you personally. But we are an online
                    dental office completely in the cloud. However, we are
                    planning to set up state of the art dental offices in the
                    near future
                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md capitalize">Do you accept insurance?</h5>
                  {/* Answer */}
                  <p className="p-lg capitalize">
                    Unfortunately we do not accept insurance at the moment.
                  </p>
                </div>
                {/* QUESTION #6 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md capitalize">I have an issue with my account</h5>
                  {/* Answer */}
                  <p className="p-lg capitalize ">
                    Send Us An Email At help@getmoru.com
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
              <h5 className="h5-sm capitalize">
                Have more questions?{" "}
                <Link href="/contacts ">
                  <a className='gold-text'>Ask your question here</a>
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
