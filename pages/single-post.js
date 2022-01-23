import Link from "next/dist/client/link";
import { VideoImage } from "../src/components/VideoContent";
import Layout from "../src/layout/Layout";

const Singlepost = ({category,title,author,date,content,bio,image}) => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="single-post"
        className="wide-100 inner-page-hero single-post-section division"
      >
        <div className="container">
          {/* SINGLE POST CONTENT */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="single-post-wrapper">
                {/* SINGLE POST TITLE */}
                <div className="single-post-title">
                  {/* CATEGORY */}
                  <p className="p-sm post-tag txt-500 txt-upcase">{category}</p>
                  {/* TITLE */}
                  <h2 className="h2-md">
                   {title}
                  </h2>
                  {/* POST DATA */}
                  <div className="post-data clearfix">
                    {/* Author Avatar */}
                    <div className="post-author-avatar">
                      <img
                        src={image}
                        alt="author-avatar"
                      />
                    </div>
                    {/* Author Data */}
                    <div className="post-author">
                      <h6 className="h6-xl">{author}</h6>
                      <p className="p-md">
                        {date} 
                      </p>
                    </div>
                  </div>{" "}
                  {/* END POST DATA */}
                </div>{" "}
                {/* END SINGLE POST TITLE */}
               
                {content}
                
               
              
                {/* END SINGLE POST SHARE */}
              </div>
            </div>
          </div>{" "}
          {/* END SINGLE POST CONTENT */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END SINGLE POST */}
      {/* ABOUT POST AUTHOR
			============================================= */}
      <div className="about-post-author bg-snow division">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="author-senoff">
                {/* Avatar */}
                <img src={image} alt="author-avatar" />
                {/* Text */}
                <div className="author-senoff-txt">
                  {/* Title */}
                  <h5 className="h5-xs">Published by</h5>
                  <h5 className="h5-md">{author}</h5>
                  <p className="p-md">
                    {bio}
                  </p>
                  {/* Follow Button */}
                  <div className="author-follow-btn">
                    <a href="#">Follow</a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* END ABOUT POST AUTHOR */}
      {/* POST COMMENTS
			============================================= */}




      {/* <section id="post-comments" className="wide-80 post-comments division">
        <div className="container">
          <div className="row">
            {/* COMMENTS WRAPPER */}
         


      


      
      
      {/* END POST COMMENTS */}
      {/* BLOG-1
			============================================= */}
      <section
        id="blog-1"
        className="bg-whitesmoke-gradient wide-60 blog-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-70">
                <h2 className="h2-md">Keep Reading...</h2>
              </div>
            </div>
          </div>
          {/* BLOG POSTS */}

          {/*
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {/* BLOG POST #1 
              <div className="col">
                <div id="bp-1-1" className="blog-1-post mb-40 wow fadeInUp">
                  {/* BLOG POST IMAGE 
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
                  {/* BLOG POST TEXT 
                  <div className="blog-post-txt">
                    {/* Post Tag 
                    <p className="p-md post-tag">OLMO News  |  June 12, 2021</p>
                    {/* Post Link 
                    <h5 className="h5-md">
                      <Link href="/single-post">
                        Integer urna turpis donec ipsum a porta justo auctor
                      </Link>
                    </h5>
                    {/* Text 
                    <p className="p-lg">
                      Donec sapien augue integer turpis urna cursus porta, mauris
                      augue...
                    </p>
                    {/* Post Meta 
                    <div className="post-meta">
                      <p className="p-md">9 Comments</p>
                    </div>
                  </div>{" "}
                  {/* END BLOG POST TEXT 
                </div>
              </div>{" "}
              {/* END  BLOG POST #1 
              {/* BLOG POST #2 
              <div className="col">
                <div id="bp-1-2" className="blog-1-post mb-40 wow fadeInUp">
                  {/* BLOG POST IMAGE 
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
                  {/* BLOG POST TEXT 
                  <div className="blog-post-txt">
                    {/* Post Tag 
                    <p className="p-md post-tag">Tutorials  |  June 3, 2021</p>
                    {/* Post Link 
                    <h5 className="h5-md">
                      <Link href="/single-post">
                        A ligula risus auctor tempus
                      </Link>
                    </h5>
                    {/* Text 
                    <p className="p-lg">
                      Donec sapien augue integer turpis urna cursus porta a mauris
                      dolor...
                    </p>
                    {/* Post Meta 
                    <div className="post-meta">
                      <p className="p-md">12 Comments</p>
                    </div>
                  </div>{" "}
                  {/* END BLOG POST TEXT 
                </div>
              </div>{" "}
              {/* END  BLOG POST #2 
              {/* BLOG POST #3 
              <div className="col">
                <div id="bp-1-3" className="blog-1-post mb-40 wow fadeInUp">
                  {/* BLOG POST IMAGE 
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
                  {/* BLOG POST TEXT 
                  <div className="blog-post-txt">
                    {/* Post Tag 
                    <p className="p-md post-tag">Inspiration  |  May 18, 2021</p>
                    {/* Post Link 
                    <h5 className="h5-md">
                      <Link href="/single-post">
                        Donec sapien augue integer turpis at cursus porta mauris
                      </Link>
                    </h5>
                    {/* Text 
                    <p className="p-lg">
                      Donec sapien augue integer turpis urna cursus porta, mauris
                      augue...
                    </p>
                    {/* Post Meta 
                    <div className="post-meta">
                      <p className="p-md">3 Comments</p>
                    </div>
                  </div>{" "}
           
                </div>
              </div>{" "}
    
            </div>
          */}






          {/* END BLOG POSTS */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END BLOG-1 */}
      {/* NEWSLETTER-1
			============================================= */}
      <section id="newsletter-1" className="newsletter-section division">
        <div className="container">
          <div className="newsletter-wrapper bg-white">
            <div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
              {/* NEWSLETTER TEXT */}
              <div className="col">
                <div className="newsletter-txt pr-20">
                  <h4 className="h4-xl">
                    Stay up to date with our news, ideas and updates
                  </h4>
                </div>
              </div>
              {/* NEWSLETTER FORM */}
              <div className="col">
                <form
                  className="newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="input-group">
                    <input
                      type="email"
                      autoComplete="off"
                      className="form-control"
                      placeholder="Your email address"
                      required
                      id="s-email"
                    />
                    <span className="input-group-btn">
                      <button
                        type="submit"
                        className="btn btn-md btn-skyblue tra-grey-hover"
                      >
                        Subscribe Now
                      </button>
                    </span>
                  </div>
                  {/* Newsletter Form Notification */}
                  <label htmlFor="s-email" className="form-notification" />
                </form>
              </div>{" "}
              {/* END NEWSLETTER FORM */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End newsletter-wrapper */}
        </div>{" "}
        {/* End container */}
      </section>
    </Layout>
  );
};

export default Singlepost;
