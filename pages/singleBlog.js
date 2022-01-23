import React from 'react'
import Link from 'next/link'

function SingleBlog( {exerpt,category,date,featuredImage,slug} ) {
 
    return (
         <div className="blog-3-post masonry-image">
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img">
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src={featuredImage}
                          alt="blog-post-image"
                          
                        />
                        <div className="item-overlay" />
                      </div>
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <p className="p-md post-tag">
                        {category}  |  {date}
                      </p>
                      {/* Post Link */}
                      <h5 className="h5-md">
            <Link href={`/dental-hub/${slug}`}>
                          <a>
                            {exerpt}
                          </a>
                        </Link>
                      </h5>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p className="p-md">9 Comments</p>
                      </div>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>
    )
}

export default SingleBlog
