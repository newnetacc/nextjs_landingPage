import Counter from "../../Counter";

const Demo18statistic4 = () => {
  return (
    <div
      id="statistic-4"
      className="bg-snow pt-70 pb-70 statistic-section division"
    >
      <div className="container">
        {/* STATISTIC-4 WRAPPER */}
        <div className="statistic-4-wrapper">
          <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
            {/* STATISTIC BLOCK #1 */}
            <div id="sb-4-1" className="col">
              <div className="statistic-block pr-15 d-flex align-items-center wow fadeInUp">
                {/* Digit */}
                <div className="statistic-block-digit">
                  <h2 className="h2-lg statistic-number">
                    <Counter end={65} />k
                  </h2>
                </div>
                {/* Text */}
                <div className="statistic-block-txt grey-color">
                  <h6 className="h6-md">
                    Porta justo integer and velna vitae auctor
                  </h6>
                </div>
              </div>
            </div>
            {/* STATISTIC BLOCK #2 */}
            <div id="sb-4-2" className="col">
              <div className="statistic-block pr-15 d-flex align-items-center wow fadeInUp">
                {/* Digit */}
                <div className="statistic-block-digit">
                  <h2 className="h2-lg statistic-number">
                    <Counter end={54} />%
                  </h2>
                </div>
                {/* Text */}
                <div className="statistic-block-txt grey-color">
                  <h6 className="h6-md">
                    Ligula magna suscipit vitae and rutrum
                  </h6>
                </div>
              </div>
            </div>
            {/* STATISTIC BLOCK #3 */}
            <div id="sb-4-3" className="col">
              <div className="statistic-block pr-15 d-flex align-items-center wow fadeInUp">
                {/* Digit */}
                <div className="statistic-block-digit">
                  <h2 className="h2-lg statistic-number">
                    <Counter end={4.86} decimals={2} />
                  </h2>
                </div>
                {/* Text */}
                <div className="statistic-block-txt grey-color">
                  <h6 className="h6-md">
                    Sagittis congue augue egestas an egestas
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END STATISTIC-4 WRAPPER */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default Demo18statistic4;
