import Counter from "../../Counter";

const Demo1statistic2 = () => {
  return (
    <section id="statistic-2" className="wide-100 statistic-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              <h3 className="h3-xs">
                More than 65,000 users around the world are already using OLMO
                actively
              </h3>
            </div>
          </div>
          {/* STATISTIC BLOCK #1 */}
          <div className="col-sm-5 col-md-4 col-lg-3 offset-sm-1 offset-md-2 offset-lg-1">
            <div className="statistic-block wow fadeInUp">
              {/* Text */}
              <h2 className="h2-title-xs statistic-number">
                <Counter end={65} />k
              </h2>
              <p className="p-lg mt-20">
                Active downloads <br /> from the community
              </p>
            </div>
          </div>
          {/* STATISTIC BLOCK #2 */}
          <div className="col-sm-5 col-md-4 col-lg-2">
            <div className="statistic-block wow fadeInUp">
              {/* Text */}
              <h2 className="h2-title-xs statistic-number">
                <Counter end={4.86} decimals={2} />
              </h2>
              {/* Rating */}
              <div className="txt-block-rating ico-15 yellow-color">
                <span className="flaticon-star-1" />
                <span className="flaticon-star-1" />
                <span className="flaticon-star-1" />
                <span className="flaticon-star-1" />
                <span className="flaticon-star-half-empty" />
              </div>
              <p className="p-lg txt-400">8,376 Rating</p>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1statistic2;
