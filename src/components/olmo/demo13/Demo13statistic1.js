import Counter from "../../Counter";

const Demo13statistic1 = () => {
  return (
    <div
      id="statistic-1"
      className="bg-01 pt-70 pb-70 statistic-section division"
    >
      <div className="container white-color">
        {/* STATISTIC-1 WRAPPER */}
        <div className="statistic-1-wrapper">
          <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
            {/* STATISTIC BLOCK #1 */}
            <div id="sb-1-1" className="col">
              <div className="statistic-block wow fadeInUp">
                {/* Digit */}
                <h2 className="h2-xl statistic-number">
                  <Counter end={28} />%
                </h2>
                {/* Text */}
                <h5 className="h5-lg">Faster Access</h5>
                {/* Text */}
                <p className="p-lg">
                  Enim nullam tempor at sapien gravida donec a blandit integer
                  posuere porta justo velna
                </p>
              </div>
            </div>
            {/* STATISTIC BLOCK #2 */}
            <div id="sb-1-2" className="col">
              <div className="statistic-block wow fadeInUp">
                {/* Digit */}
                <h2 className="h2-xl statistic-number">
                  <Counter end={54} />%
                </h2>
                {/* Text */}
                <h5 className="h5-lg">Productivity</h5>
                {/* Text */}
                <p className="p-lg">
                  Enim nullam tempor at sapien gravida donec a blandit integer
                  posuere porta justo velna
                </p>
              </div>
            </div>
            {/* STATISTIC BLOCK #3 */}
            <div id="sb-1-3" className="col">
              <div className="statistic-block wow fadeInUp">
                {/* Digit */}
                <h2 className="h2-xl statistic-number">
                  <Counter end={36} />%
                </h2>
                {/* Text */}
                <h5 className="h5-lg">Secure Access</h5>
                {/* Text */}
                <p className="p-lg">
                  Enim nullam tempor at sapien gravida donec a blandit integer
                  posuere porta justo velna
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END STATISTIC-1 WRAPPER */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default Demo13statistic1;
