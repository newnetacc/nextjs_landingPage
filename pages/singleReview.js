import React from 'react'

function SingleReview({ text, image, socialHandle, fullName }) {
    return (
      <div className="review-1">
        {/* Quote Icon */}
        <div className="review-1-ico ico-25">
          <span className="flaticon-left-quote" />
        </div>
        {/* Text */}
        <div className="review-1-txt">
          {/* Text */}
          <p className="p-lg">
       {text}
          </p>
          {/* Testimonial Author */}
          <div className="author-data clearfix">
            {/* Testimonial Avatar */}
            <div className="review-avatar">
              <img src={image}alt="review-avatar" />
            </div>
            {/* Testimonial Author */}
            <div className="review-author">
              <h6 className="h6-xl">{fullName}</h6>
              <p className="p-md">{socialHandle}</p>
              {/* Rating */}
              <div className="review-rating ico-15 yellow-color">
                <span className="flaticon-star-1" />
                <span className="flaticon-star-1" />
                <span className="flaticon-star-1" />
                <span className="flaticon-star-1" />
                <span className="flaticon-star-half-empty" />
              </div>
            </div>
          </div>
          {/* End Testimonial Author */}
        </div>
        {/* End Text */}
      </div>
    );
}

export default SingleReview
