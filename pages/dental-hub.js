import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";
import { isotopLayout } from "../src/utils/utils";
import { useEffect } from "react";
import SingleBlog from "./singleBlog";
import { GraphQLClient, gql } from "graphql-request";
import moment from "moment"




const Blogs = ({ post }) => {
  
  useEffect(() => {
    isotopLayout(".masonry-wrap", ".masonry-image");
  }, []);
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="blog-page"
        className="bg-snow wide-50 inner-page-hero blog-page-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-85">
                <h2 className="h2-xs">
                  Relevant news and more for you. Welcome to our blog
                </h2>
              </div>
            </div>
          </div>
          {/* FEATURED POST */}
          <div className="rel blog-post-wide featured-post">
            <div className="row d-flex align-items-center">
              {/* Featured Badge */}
              <div className="featured-badge ico-25 bg-whitesmoke yellow-color">
                <span className="flaticon-star-1" />
              </div>
              {/* BLOG POST IMAGE */}
              <div className="col-lg-7 blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/images/blog/featured-post.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="col-lg-5 blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">OLMO News  |  May 18, 2021</p>
                {/* Post Link */}
                <h5 className="h5-xl">
                  <Link href="/single-post">
                    <a>
                      Tempor sapien donec gravida a suscipit and porta justo
                      vitae
                    </a>
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                  Aliqum mullam blandit vitae tempor sapien and donec lipsum
                  gravida and porta undo velna dolor in cubilia...
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">38 Comments</p>
                </div>
              </div>{" "}
              {/* END BLOG POST TEXT */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FEATURED POST */}
          {/* POSTS WRAPPER */}
          <div className="posts-wrapper">
            {/* BLOG POSTS CATEGORY */}
            <div className="row">
              <div className="col-md-12">
                <h5 className="h5-lg posts-category">Latest Articles</h5>
              </div>
            </div>
            {/* BLOG POSTS */}
            <div className="row">
              <div className="col gallery-items-list">
                <div className="masonry-wrap grid-loaded">
                  {post.map((item, index) => (
                    <SingleBlog
                      post={post}
                      key={index}
                      title={item.title}
                      slug={item.slug}
                      exerpt={item.exerpt}
                      category={item.category.name}
                      date={moment(item.createdAt).format("MMM DD, YYYY")}
                      featuredImage={item.featuredImage.url}
                    />
                  ))}
                </div>
              </div>
            </div>{" "}
            {/* END BLOG POSTS */}
          </div>{" "}
          {/* END POSTS WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>


      {/* <div className="bg-snow pb-100 page-pagination division">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination ico-20 justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>
                      <span className="flaticon-back" />
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span className="flaticon-next" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>{" "}
        </div>{" "}
      </div> */}



      <section
        id="newsletter-1"
        className="bg-snow newsletter-section division"
      >
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

export default Blogs;
isotopLayout();


export async function getStaticProps() {
  const endpoint = "https://api-ap-south-1.graphcms.com/v2/ckxm8bu5s4mjk01xp5gqe28nq/master";

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      posts {
        title
        slug
        createdAt
        category {
          name
        }
        exerpt
        content {
          markdown
        }
        featuredImage {
          url
        }
        author {
          name
        }
      }
    }
  `;


  const data = await graphQLClient.request(query);
  const post = data.posts;

  return {
    props: {
      post,
    },
  };
}