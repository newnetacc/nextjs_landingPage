import Link from "next/dist/client/link";
import { useEffect } from "react";
import { isotopLayout } from "../../../utils/utils";

const Demo13projects2 = () => {
  useEffect(() => {
    isotopLayout();
  }, []);
  return (
    <section id="projects-2" className="pb-60 projects-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
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
        {/* PROJECTS-2 WRAPPER */}
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
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      <a>A ligula risus auctor and justo tempus blandit</a>
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">Graphic Design</p>
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
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      <a>Integer urna turpis donec and ipsum porta justo</a>
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">UI, Interaction Design</p>
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
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      <a>Donec sapien augue undo integer turpis cursus</a>
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">UX, Illustration</p>
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
                      src="/images/projects/project-01.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                  </div>
                </div>
                {/* Text */}
                <div className="project-txt">
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      <a>Laoreet undo magna at suscipit undo magna</a>
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">Web Design</p>
                </div>
              </div>{" "}
              {/* END PROJECT #4 */}
              {/* PROJECT #5 */}
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
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      <a>Donec sapien an augue integer turpis cursus</a>
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">Web Design</p>
                </div>
              </div>{" "}
              {/* END PROJECT #5 */}
              {/* PROJECT #6 */}
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
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      <a>Donec sapien an augue integer turpis cursus</a>
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">UI, Interaction Design</p>
                </div>
              </div>{" "}
              {/* END PROJECT #6 */}
            </div>
          </div>
        </div>{" "}
        {/* END PROJECTS-1 WRAPPER */}
        {/* MORE PROJECTS */}
        <div className="row">
          <div className="col">
            <div className="more-btn mt-20">
              <Link href="/projects">
                <a className="btn btn-violet-red tra-grey-hover">
                  View More Projects
                </a>
              </Link>
            </div>
          </div>
        </div>{" "}
        {/* END DOWNLOAD BUTTON */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo13projects2;
