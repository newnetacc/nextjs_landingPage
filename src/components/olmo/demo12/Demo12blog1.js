import Link from "next/link";
const Demo12blog1 = () => {
  return (
    <section id="blog-1" className="wide-60 blog-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Our Stories &amp; Latest News</h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* BLOG POSTS */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {/* BLOG POST #1 */}
          <div className="col">
            <div id="bp-1-1" className="blog-1-post mb-40 wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/images/blog/post-1-img.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">OLMO News  |  June 12, 2021</p>
                {/* Post Link */}
                <h5 className="h5-md">
                  <Link href="/single-post">
                    <a>Integer urna turpis donec ipsum a porta justo auctor</a>
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                  Donec sapien augue integer turpis urna cursus porta, mauris
                  augue...
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">9 Comments</p>
                </div>
              </div>{" "}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{" "}
          {/* END  BLOG POST #1 */}
          {/* BLOG POST #2 */}
          <div className="col">
            <div id="bp-1-2" className="blog-1-post mb-40 wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/images/blog/post-5-img.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">Tutorials  |  June 3, 2021</p>
                {/* Post Link */}
                <h5 className="h5-md">
                  <Link href="/single-post">
                    <a>A ligula risus auctor tempus</a>
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                  Donec sapien augue integer turpis urna cursus porta a mauris
                  dolor...
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">12 Comments</p>
                </div>
              </div>{" "}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{" "}
          {/* END  BLOG POST #2 */}
          {/* BLOG POST #3 */}
          <div className="col">
            <div id="bp-1-3" className="blog-1-post mb-40 wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/images/blog/post-2-img.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">Inspiration  |  May 18, 2021</p>
                {/* Post Link */}
                <h5 className="h5-md">
                  <Link href="/single-post">
                    <a>
                      Donec sapien augue integer turpis at cursus porta mauris
                    </a>
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                  Donec sapien augue integer turpis urna cursus porta, mauris
                  augue...
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">3 Comments</p>
                </div>
              </div>{" "}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{" "}
          {/* END  BLOG POST #3 */}
        </div>{" "}
        {/* END BLOG POSTS */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo12blog1;
