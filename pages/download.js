import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";
const download = () => {
  return (
    <Layout
      navLight
      whiteLogo
      btnCustomHover="btn btn-skyblue tra-white-hover last-link"
      singlePage
    >
      <div id="download-page" className="page-hero-section division">
        <div className="page-hero-overlay division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="hero-txt text-center white-color">
                  {/* Title */}
                  <h2 className="h2-xs">
                    Ready to try OLMO 2.10.074? 
                  </h2>
                  {/* Text */}
                  <p className="p-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque at
                    dolor primis libero tempus, blandit and cursus varius
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* End hero-overlay */}
        {/* WAVE SHAPE BOTTOM */}
        <div className="wave-shape-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
            <path
              fill="#ffffff"
              fillOpacity={1}
              d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>
      </div>{" "}
      {/* END PAGE HERO */}
      {/* DOWNLOAD-1
			============================================= */}
      <section
        id="download-1"
        className="bg-snow wide-20 download-section division"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              {/* VERSION RELEASE */}
              <div className="version-release">
                {/* Release Data */}
                <div className="release-data">
                  <h4 className="h4-xs">Latest Version</h4>
                  {/* Version Data */}
                  <div className="rel">
                    <span className="version-data">2.10.074</span>
                    <span className="release-date">
                      2021-06-22 <span>52.84 MB</span>
                    </span>
                    <a
                      href="download/example.zip"
                      download="example.zip"
                      className="btn btn-skyblue tra-grey-hover ico-15 ico-left release-download"
                    >
                      <span className="flaticon-down-arrow" /> Download 2.10.074
                    </a>
                  </div>
                </div>
                {/* Release Highlights */}
                <div className="release-highlights">
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        <b>OS X</b> (10.7 or later is required)
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <b>Windows</b> - also available as a portable version
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <b>Windows 64 bit</b> - also available as a portable
                        version
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        {`Fixed Bug: "Euismod purus and blandit"`}
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">Fixed Crash#4680682692</p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* END VERSION RELEASE */}
              {/* VERSION RELEASE */}
              <div className="version-release">
                {/* Release Data */}
                <div className="release-data">
                  <h4 className="h4-xs">Older Versions</h4>
                  {/* Version Data */}
                  <div className="rel">
                    <span className="version-data">2.10.020</span>
                    <span className="release-date">
                      2021-05-18 <span>44.12 MB</span>
                    </span>
                    <a
                      href="download/example.zip"
                      download="example.zip"
                      className="btn btn-tra-grey skyblue-hover ico-15 ico-left release-download"
                    >
                      <span className="flaticon-down-arrow" /> Download 2.10.020
                    </a>
                  </div>
                </div>
                {/* Release Highlights */}
                <div className="release-highlights">
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Quaerat sodales sapien undo euismod purus and blandit
                        egestas magna on macOS 10.12.*
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fixed suscipit lectus auctor integer cursus orci vitae
                        auctor integer
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fixed Fringilla risus nec, luctus mauris auctor integer
                        an auctor cursus euismod
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">Fixed Crash#8341682687</p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* END VERSION RELEASE */}
              {/* VERSION RELEASE */}
              <div className="version-release">
                {/* Release Data */}
                <div className="release-data">
                  {/* Version Data */}
                  <div className="rel">
                    <span className="version-data">2.01.312</span>
                    <span className="release-date">
                      2021-03-04 <span>38.24 MB</span>
                    </span>
                    <a
                      href="download/example.zip"
                      download="example.zip"
                      className="btn btn-tra-grey skyblue-hover ico-15 ico-left release-download"
                    >
                      <span className="flaticon-down-arrow" /> Download 2.01.312
                    </a>
                  </div>
                </div>
                {/* Release Highlights */}
                <div className="release-highlights">
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Quaerat sodales sapien undo euismod magna on 10.12
                        (Sierra)
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fixed suscipit lectus auctor integer cursus orci vitae
                        auctor integer
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fixed risus nec luctus mauris auctor integer an integera
                        congue magna
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fixed cubilia laoreet magna at auctor integer congue
                        egestas
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus nec, luctus mauris auctor integer an
                        auctor cursus euismod purus pretium efficitur ipsum
                        ligula undo cubilia laoreet magna and dolor suscipit
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">Fixes other minor bugs</p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* END VERSION RELEASE */}
              {/* VERSION RELEASE */}
              <div className="version-release">
                {/* Release Data */}
                <div className="release-data">
                  {/* Version Data */}
                  <div className="rel">
                    <span className="version-data">2.0.009</span>
                    <span className="release-date">
                      2021-01-26 <span>40.26 MB</span>
                    </span>
                    <a
                      href="download/example.zip"
                      download="example.zip"
                      className="btn btn-tra-grey skyblue-hover ico-15 ico-left release-download"
                    >
                      <span className="flaticon-down-arrow" /> Download 2.0.009
                    </a>
                  </div>
                </div>
                {/* Release Highlights */}
                <div className="release-highlights">
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fixes integer cursus orci bugs on 10.13 (High Sierra)
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fixed auctor integer cursus orci vitae auctor integer
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">Fixed Crash#8341689840</p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">Fixes other minor bugs</p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* END VERSION RELEASE */}
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END DOWNLOAD-1 */}
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

export default download;
