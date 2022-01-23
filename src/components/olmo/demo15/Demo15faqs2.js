import Link from "next/dist/client/link";
const Demo15faqs2 = () => {
  return (
    <section id="faqs-2" className="bg-lightgrey wide-60 faqs-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              {/* Title */}
              <h2 className="h2-md">Got Questions? Look Here</h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
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
                  <h5 className="h5-md">
                    Can I see OLMO in action before purchasing?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                    Etiam amet mauris suscipit in odio integer congue metus
                    vitae arcu mollis blandit ultrice ligula egestas and magna
                    suscipit lectus magna suscipit luctus blandit vitae
                  </p>
                </div>
                {/* QUESTION #2 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                    What are the requirements for using OLMO?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                    An enim nullam tempor sapien gravida a donec ipsum enim an
                    porta justo integer at velna vitae auctor integer congue
                    undo magna at pretium purus pretium
                  </p>
                </div>
                {/* QUESTION #3 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                    Can I use OLMO on different devices?
                  </h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris orci auctor purus ligula
                        euismod pretium purus pretium rutrum tempor sapien
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Nemo ipsam egestas volute turpis dolores ut aliquam
                        quaerat sodales sapien undo pretium a purus
                      </p>
                    </li>
                  </ul>
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
                  <h5 className="h5-md">Do you have a free trial?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                    Cubilia laoreet augue egestas and luctus donec curabite diam
                    vitae dapibus libero and quisque gravida donec and neque.
                    Blandit justo aliquam molestie nunc sapien
                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">How does OLMO handle my privacy?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                    Etiam amet mauris suscipit sit amet in odio. Integer congue
                    leo metus. Vitae arcu mollis blandit ultrice ligula
                  </p>
                  {/* Answer */}
                  <p className="p-lg">
                    An enim nullam tempor sapien gravida donec congue leo metus.
                    Vitae arcu mollis blandit integer at velna
                  </p>
                </div>
                {/* QUESTION #6 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">I have an issue with my account</h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris orci auctor purus
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Quaerat sodales sapien euismod blandit purus and ipsum
                        primis in cubilia laoreet augue luctus
                      </p>
                    </li>
                  </ul>
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

export default Demo15faqs2;
