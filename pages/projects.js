import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import { getPagination, isotopLayout, pagination } from "../src/utils/utils";

const Projects = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    isotopLayout();
    pagination(".masonry-image", sort, active);
    let list = document.querySelectorAll(".masonry-image");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      {/* PROJECTS-1
			============================================= */}
      <section
        id="projects-1"
        className="wide-50 inner-page-hero projects-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-80">
                {/* Title */}
                <h2 className="h2-md">We Care About The Details</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis a libero tempus, blandit and cursus varius and magnis
                  sapien
                </p>
              </div>
            </div>
          </div>
          {/* PROJECTS-1 WRAPPER */}
          <div className="row">
            <div className="col gallery-items-list">
              <div className="masonry-wrap grid-loaded">
                {/* PROJECT #1 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/images/projects/project-05.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Text */}
                    <p className="p-md grey-color">Graphic Design</p>
                    {/* Link */}
                    <h5 className="h5-lg">
                      <Link href="/project-details">
                        A ligula risus auctor and justo tempus blandit
                      </Link>
                    </h5>
                    {/* Project Rating */}
                    <div className="project-rating clearfix ico-20">
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-half-empty mr-5" />
                      4.69 (173)
                    </div>
                  </div>
                </div>{" "}
                {/* END PROJECT #1 */}
                {/* PROJECT #2 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/images/projects/project-02.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Text */}
                    <p className="p-md grey-color">UI, Interaction Design</p>
                    {/* Link */}
                    <h5 className="h5-lg">
                      <Link href="/project-details">
                        Integer urna turpis donec and ipsum porta justo
                      </Link>
                    </h5>
                    {/* Project Rating */}
                    <div className="project-rating clearfix ico-20">
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1 mr-5" />
                      5.0 (48)
                    </div>
                  </div>
                </div>{" "}
                {/* END PROJECT #2 */}
                {/* PROJECT #3 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/images/projects/project-04.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Text */}
                    <p className="p-md grey-color">UX, Illustration</p>
                    {/* Link */}
                    <h5 className="h5-lg">
                      <Link href="/project-details">
                        Donec sapien augue integer turpis urna cursus porta
                      </Link>
                    </h5>
                    {/* Project Rating */}
                    <div className="project-rating clearfix ico-20">
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-half-empty mr-5" />
                      4.39 (87)
                    </div>
                  </div>
                </div>{" "}
                {/* END PROJECT #3 */}
                {/* PROJECT #4 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/images/projects/project-03.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Text */}
                    <p className="p-md grey-color">Web Design</p>
                    {/* Link */}
                    <h5 className="h5-lg">
                      <Link href="/project-details">
                        Donec sapien an augue integer turpis cursus
                      </Link>
                    </h5>
                    {/* Project Rating */}
                    <div className="project-rating clearfix ico-20">
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-half-empty mr-5" />
                      4.87 (284)
                    </div>
                  </div>
                </div>{" "}
                {/* END PROJECT #4 */}
                {/* PROJECT #2 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/images/projects/project-06.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Text */}
                    <p className="p-md grey-color">UI, Interaction Design</p>
                    {/* Link */}
                    <h5 className="h5-lg">
                      <Link href="/project-details">
                        Integer urna turpis donec and ipsum porta justo
                      </Link>
                    </h5>
                    {/* Project Rating */}
                    <div className="project-rating clearfix ico-20">
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-half-empty mr-5" />
                      4.87 (68)
                    </div>
                  </div>
                </div>{" "}
                {/* END PROJECT #2 */}
                {/* PROJECT #2 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/images/projects/project-07.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Text */}
                    <p className="p-md grey-color">UI, Interaction Design</p>
                    {/* Link */}
                    <h5 className="h5-lg">
                      <Link href="/project-details">
                        Integer urna turpis donec and ipsum porta justo
                      </Link>
                    </h5>
                    {/* Project Rating */}
                    <div className="project-rating clearfix ico-20">
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-1" />
                      <span className="flaticon-star-half-empty mr-5" />
                      4.53 (70)
                    </div>
                  </div>
                </div>{" "}
                {/* END PROJECT #2 */}
              </div>
            </div>
          </div>{" "}
          {/* END PROJECTS-1 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END PROJECTS-1 */}
      {/* PAGE PAGINATION
			============================================= */}
      <div className="pb-100 page-pagination division">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination ico-20 justify-content-center">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(active === 1 ? 1 : active - 1);
                      }}
                    >
                      <span className="flaticon-back" />
                    </a>
                  </li>
                  {state &&
                    state.map((s, i) => (
                      <li
                        className={`page-item ${active === s ? "active" : ""}`}
                        key={i}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setActive(s);
                          }}
                        >
                          {s}
                        </a>
                      </li>
                    ))}
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(
                          active === state.length ? state.length : active + 1
                        );
                      }}
                    >
                      <span className="flaticon-next"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* END PAGE PAGINATION */}
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

export default Projects;
