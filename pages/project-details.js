import Link from "next/dist/client/link";
import { VideoImage } from "../src/components/VideoContent";
import Layout from "../src/layout/Layout";

const ProjectDetails = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="project-1"
        className="bg-snow wide-60 inner-page-hero single-project division"
      >
        <div className="container">
          <div className="row">
            {/* PROJECT DISCRIPTION */}
            <div className="col-lg-10 offset-lg-1">
              <div className="project-description">
                {/* PROJECT TITLE */}
                <div className="project-title">
                  {/* Title */}
                  <h2 className="h2-xl">
                    Online Multimedia Concepts For Banner Presentation
                  </h2>
                  {/* Project Data */}
                  <p className="p-xl project-data">
                    <span>DSAThemes</span>
                    <span>2021-07-14</span>
                    <span>Graphic Design</span>
                    <span>
                      <a href="#" className="pink-color">
                        www.website.com
                      </a>
                    </span>
                  </p>
                </div>
                {/* PROJECT TEXT */}
                <div className="project-txt">
                  {/* Image */}
                  <div className="project-inner-img mb-50">
                    <img
                      className="img-fluid"
                      src="/images/dashboard-04.png"
                      alt="project-preview"
                    />
                  </div>
                  {/* Text */}
                  <p className="p-lg">
                    Maecenas gravida porttitor nunc, quis vehicula magna luctus
                    tempor. Quisque vel laoreet turpis augue, urna viverra a
                    augue eget, dictum tempor diam. Sed pulvinar consectetur
                    nibh, vel imperdiet dui varius viverra. Pellentesque ac
                    massa lorem. Fusce eu cursus non nulla vitae massa placerat
                    purus. An enim nullam tempor sapien gravida donec enim ipsum
                    blandit porta justo integer odio velna vitae
                  </p>
                  {/* Small Title */}
                  <h5 className="h5-md mt-25 mb-20">
                    Overview &amp; Challenge
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                    Donec sodales, nibh vel tristique aliquet, nisi libero
                    suscipit diam, sed tempus ante nulla ut purus. Donec dolor
                    magna aliquet suscipit in magna dignissim, porttitor and
                    hendrerit. Nunc gravida ultrices faucibus. Praesent lorem
                    purus, quis mollis nisi laoreet vitae. Mauris nec consequat
                    tortor
                  </p>
                  {/* Text */}
                  <p className="p-lg">
                    Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                    porta justo. Velna vitae auctor congue magna nihil impedit
                    ligula risus. Mauris donec ociis et magnis sapien sagittis
                    sapien sem congue tempor gravida donec enim ipsum porta
                    justo integer odio velna a purus efficitur ipsum primis in
                    cubilia laoreet augue egestas luctus donec purus and blandit
                    sodales urna viverra a augue eget, dictum
                  </p>
                  {/* PROJECT IMAGES */}
                  <div className="row d-flex align-items-center project-inner-img">
                    {/* IMAGE #1 */}
                    <div className="col-md-6">
                      <div className="project-image top-img">
                        <div className="hover-overlay">
                          <a
                            className="image-link"
                            href="images/projects/project-02.jpg"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/project-02.jpg"
                              alt="p_image"
                            />
                            <div className="item-overlay" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* IMAGE #2 */}
                    <div className="col-md-6">
                      <div className="project-image">
                        <div className="hover-overlay">
                          <a
                            className="image-link"
                            href="images/projects/project-06.jpg"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/project-06.jpg"
                              alt="p_image"
                            />
                            <div className="item-overlay" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END PROJECT IMAGES */}
                  {/* Small Title */}
                  <h5 className="h5-md mb-20">Project Summary</h5>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-md">
                        <span className="txt-500">Email address</span> euismod
                        purus pretium purus pretium ligula rutrum tempor mullam
                        blandit tempor sapien and gravida donec ipsum at justo
                        turpis urna augue, viverra a augue eget augue egestas
                        luctus donec
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Payment data</span> vitae
                        auctor a congue magna tempor sapien gravida laoreet
                        turpis urna augue, viverra a augue eget, dictum tempor
                        diam pulvinar consectetur purus efficitur ipsum primis
                        in cubilia laoreet augue donec, dictum tempor tempor
                        gravida donec enim ipsum porta justo integer odio velna
                      </p>
                    </li>
                  </ul>
                  {/* IMAGE */}
                  <div className="project-image project-inner-img video-preview">
                    <VideoImage extraClass="video-btn video-btn-xl bg-pink ico-90" />
                  </div>
                  {/* Small Title */}
                  <h5 className="h5-md mt-25 mb-20">Solution &amp; Results</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Aliqum mullam blandit tempor sapien gravida donec ipsum
                    porta justo. Velna vitae auctor congue magna nihil impedit
                    ligula risus. Mauris donec ociis et magnis sapien sagittis
                    sapien sem congue tempor gravida and donec enim ipsum porta
                    justo integer velna and purus efficitur ipsum primis in
                    cubilia laoreet augue egestas luctus donec purus and blandit
                    sodales in cubilia laoreet augue donec, dictum tempor
                  </p>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Donec dolor magna, suscipit in magna dignissim,
                        porttitor hendrerit diam. Nunc gravida ultrices felis
                        eget faucibus. Praesent aliquet tempus, blandit posuere
                        ligula varius congue cursus
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Nulla tincidunt volutpat tincidunt. Pellentesque
                        habitant morbi tristique senectus et netus and famesa
                        malesuada augue suscipit, luctus neque purus ipsum neque
                        dolor primis egestas luctus donec
                      </p>
                    </li>
                  </ul>
                </div>{" "}
                {/* END PROJECT TEXT */}
                {/* MORE PROJECTS BUTTON */}
                <div className="more-projects text-end">
                  <Link href="/projects">
                    <a>
                      <h3 className="h3-md txt-400">More Projects</h3>
                    </a>
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END PROJECT DISCRIPTION */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </Layout>
  );
};

export default ProjectDetails;
