import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const team = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="team-1"
        className="wide-50 inner-page-hero team-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-75">
                {/* Section ID */}
                <span className="section-id txt-upcase">Meet Our Team</span>
                {/* Title */}
                <h2 className="h2-xs">
                  {` You've got passion. We've got stuff to make it profitable`}
                </h2>
              </div>
            </div>
          </div>
          {/* TEAM MEMBERS HOLDER */}
          <div className="team-members-wrapper text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
              {/* TEAM MEMBER #1 */}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  {/* Team Member Photo */}
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-1.jpg"
                      alt="team-member-foto"
                    />
                  </div>
                  {/* Team Member Data */}
                  <div className="team-member-data">
                    <h5 className="h5-sm">Jonathan Barnes</h5>
                    <p className="p-lg">Founder and CEO</p>
                    <p className="p-lg tm-social">
                      <a href="#" className="text-secondary">
                        @jonatanbarnes
                      </a>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEAM MEMBER #1 */}
              {/* TEAM MEMBER #2 */}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  {/* Team Member Photo */}
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-2.jpg"
                      alt="team-member-foto"
                    />
                  </div>
                  {/* Team Member Data */}
                  <div className="team-member-data">
                    <h5 className="h5-sm">Jamie Bartlett</h5>
                    <p className="p-lg">Software Engineer</p>
                    <p className="p-lg tm-social text-secondary">
                      <a href="#">@jamiebartlett</a>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEAM MEMBER #2 */}
              {/* TEAM MEMBER #3 */}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  {/* Team Member Photo */}
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-3.jpg"
                      alt="team-member-foto"
                    />
                  </div>
                  {/* Team Member Data */}
                  <div className="team-member-data">
                    <h5 className="h5-sm">Matthew Anderson</h5>
                    <p className="p-lg">Software Engineer</p>
                    <p className="p-lg tm-social text-secondary">
                      <a href="#">@matthewanderson</a>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEAM MEMBER #3 */}
              {/* TEAM MEMBER #4 */}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  {/* Team Member Photo */}
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-4.jpg"
                      alt="team-member-foto"
                    />
                  </div>
                  {/* Team Member Data */}
                  <div className="team-member-data">
                    <h5 className="h5-sm">Megan Coleman</h5>
                    <p className="p-lg">UX / UI Designer</p>
                    <p className="p-lg tm-social text-secondary">
                      <a href="#">@megancoleman</a>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEAM MEMBER #4 */}
              {/* TEAM MEMBER #5 */}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  {/* Team Member Photo */}
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-5.jpg"
                      alt="team-member-foto"
                    />
                  </div>
                  {/* Team Member Data */}
                  <div className="team-member-data">
                    <h5 className="h5-sm">Charlotte Johnson</h5>
                    <p className="p-lg">Quality Assurance</p>
                    <p className="p-lg tm-social text-secondary">
                      <a href="#">@charlottejohnson</a>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEAM MEMBER #5 */}
              {/* TEAM MEMBER #6 */}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  {/* Team Member Photo */}
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-6.jpg"
                      alt="team-member-foto"
                    />
                  </div>
                  {/* Team Member Data */}
                  <div className="team-member-data">
                    <h5 className="h5-sm">Olivia Steiner</h5>
                    <p className="p-lg">Head of Marketing</p>
                    <p className="p-lg tm-social text-secondary">
                      <a href="#">@oliviasteiner</a>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEAM MEMBER #6 */}
              {/* TEAM MEMBER #7 */}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  {/* Team Member Photo */}
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-7.jpg"
                      alt="team-member-foto"
                    />
                  </div>
                  {/* Team Member Data */}
                  <div className="team-member-data">
                    <h5 className="h5-sm">Mark Brayton</h5>
                    <p className="p-lg">Customer Care</p>
                    <p className="p-lg tm-social text-secondary">
                      <a href="#">@markbrayton</a>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEAM MEMBER #7 */}
              {/* TEAM MEMBER #8 */}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  {/* Team Member Photo */}
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-8.jpg"
                      alt="team-member-foto"
                    />
                  </div>
                  {/* Team Member Data */}
                  <div className="team-member-data">
                    <h5 className="h5-sm">Grow With Us</h5>
                    <p className="p-lg text-secondary">
                      <a href="mailto:youremail@mail.com">hireme@domain.com</a>
                    </p>
                    <p className="p-lg tm-social text-secondary">
                      <a href="mailto:youremail@mail.com">hireme1@domain.com</a>
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEAM MEMBER #8 */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* TEAM MEMBERS HOLDER */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END TEAM-1 */}
      {/* TESTIMONIALS-3
			============================================= */}
      <section
        id="reviews-3"
        className="bg-whitesmoke-gradient wide-70 reviews-section division"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* TESTIMONIALS COLUMN */}
            <div className="col-lg-6 order-last order-lg-2">
              <div className="reviews-3-column left-column pc-20 mb-40">
                {/* TESTIMONIAL #1 */}
                <div id="rw-3-1" className="review-3 wow fadeInUp">
                  {/* Testimonial Avatar */}
                  <div className="review-3-avatar">
                    <img
                      src="/images/review-author-3.jpg"
                      alt="review-avatar"
                    />
                  </div>
                  {/* Testimonial Text */}
                  <div className="review-3-txt">
                    {/* Testimonial Author */}
                    <div className="review-author">
                      <h6 className="h6-lg">
                        Joel Peterson
                        <span className="text-secondary">
                          <a href="#">Marketing Manager</a>
                        </span>
                      </h6>
                    </div>
                    {/* Text */}
                    <p className="p-lg">
                      Sapien sem at sagittis congue augue massa varius an
                      egestas suscipit
                    </p>
                  </div>
                </div>{" "}
                {/* END TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <div id="rw-3-2" className="review-3 wow fadeInUp">
                  {/* Testimonial Avatar */}
                  <div className="review-3-avatar">
                    <img
                      src="/images/review-author-2.jpg"
                      alt="review-avatar"
                    />
                  </div>
                  {/* Testimonial Text */}
                  <div className="review-3-txt">
                    {/* Testimonial Author */}
                    <div className="review-author">
                      <h6 className="h6-lg">
                        Joel Peterson
                        <span className="text-secondary">
                          <a href="#">Internet Surfer</a>
                        </span>
                      </h6>
                    </div>
                    {/* Text */}
                    <p className="p-lg">
                      Mauris donec magnis sapien congue an augue egestas undo
                      vitae purus cursus integer a congue magna
                    </p>
                  </div>
                </div>{" "}
                {/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <div id="rw-3-3" className="review-3 wow fadeInUp">
                  {/* Testimonial Avatar */}
                  <div className="review-3-avatar">
                    <img
                      src="/images/review-author-5.jpg"
                      alt="review-avatar"
                    />
                  </div>
                  {/* Testimonial Text */}
                  <div className="review-3-txt">
                    {/* Testimonial Author */}
                    <div className="review-author">
                      <h6 className="h6-lg">
                        Jennifer Harper
                        <span className="text-secondary">
                          <a href="#">App Developer</a>
                        </span>
                      </h6>
                    </div>
                    {/* Text */}
                    <p className="p-lg">
                      Augue massa varius egestas suscipit magna a tempus aliquet
                      blandit
                    </p>
                  </div>
                </div>{" "}
                {/* END TESTIMONIAL #3 */}
              </div>
            </div>{" "}
            {/* END TESTIMONIALS COLUMN */}
            {/* TEXT BLOCK */}
            <div className="col-lg-6 order-first order-lg-2">
              <div className="txt-block left-column pl-30 mb-40 wow fadeInRight">
                {/* Section ID */}
                <span className="section-id txt-upcase">What People Say</span>
                {/* Title */}
                <h3 className="h3-lg">
                  {`You're in good hands. See what our clients say about OLMO.`}
                </h3>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit vitae ipsum primis undo
                  and cubilia laoreet augue and luctus magna dolor luctus
                  egestas sapien vitae nemo egestas volute and turpis dolores
                  aliquam quaerat sodales a sapien
                </p>
                {/* Button */}
                <a href="#" className="btn btn-tra-grey skyblue-hover">
                  Read All Reviews
                </a>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END TESTIMONIALS-3 */}
      {/* BRANDS-2
			============================================= */}
      <div id="brands-2" className="pb-70 brands-section division">
        <div className="container">
          {/* BRANDS TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="brands-title text-center">
                <p className="p-xl">
                  Trusted by teams inside these great companies:
                </p>
              </div>
            </div>
          </div>
          {/* BRANDS-2 WRAPPER */}
          <div className="brands-2-wrapper">
            <div className="row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-5">
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/images/brand-1.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/images/brand-2.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/images/brand-3.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/images/brand-4.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/images/brand-5.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/images/brand-8.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/images/brand-7.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/images/brand-5.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/images/brand-8.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="/images/brand-2.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END BRANDS-2 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* END BRANDS-2 */}
      {/* DIVIDER LINE */}
      <hr className="divider" />
      {/* FAQs-2
			============================================= */}
      <section id="faqs-2" className="wide-60 faqs-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-75">
                {/* Section ID */}
                <span className="section-id txt-upcase">
                  Frequently Asked Questions
                </span>
                {/* Title */}
                <h2 className="h2-xs">
                  Everything you need to know before getting started
                </h2>
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
                    <h5 className="h5-sm">
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
                    <h5 className="h5-sm">
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
                    <h5 className="h5-sm">
                      Can I use OLMO on different devices?
                    </h5>
                    {/* Answer */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          Fringilla risus, luctus mauris orci auctor purus
                          ligula euismod pretium purus pretium rutrum tempor
                          sapien
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
                    <h5 className="h5-sm">Do you have a free trial?</h5>
                    {/* Answer */}
                    <p className="p-lg">
                      Cubilia laoreet augue egestas and luctus donec curabite
                      diam vitae dapibus libero and quisque gravida donec and
                      neque. Blandit justo aliquam molestie nunc sapien
                    </p>
                  </div>
                  {/* QUESTION #5 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-sm">How does OLMO handle my privacy?</h5>
                    {/* Answer */}
                    <p className="p-lg">
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                    </p>
                    {/* Answer */}
                    <p className="p-lg">
                      An enim nullam tempor sapien gravida donec congue leo
                      metus. Vitae arcu mollis blandit integer at velna
                    </p>
                  </div>
                  {/* QUESTION #6 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-sm">I have an issue with my account</h5>
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
      {/* END FAQs-2 */}
      {/* CALL TO ACTION-3
			============================================= */}
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
    </Layout>
  );
};

export default team;
