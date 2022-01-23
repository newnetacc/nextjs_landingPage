const Demo1content5 = () => {
  return (
    <section
      id="content-5"
      className="content-5 ws-wrapper content-section division"
    >
      <div className="container">
        <div className="content-5-wrapper bg-whitesmoke">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block left-column wow fadeInRight">
                {/* CONTENT BOX #1 */}
                <div className="cbox mb-40">
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="orange-red-color ico-65">
                      <span className="flaticon-speech-bubble-2" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md">Text, Voice &amp; Video Calls</h5>
                    <p className="p-lg">
                      Ligula risus auctor tempus dolor feugiat undo lacinia
                      purus lipsum quaerat primis ultrice tellus and viverra
                      purus suscipit
                    </p>
                  </div>
                </div>
                {/* CONTENT BOX #2 */}
                <div className="cbox mb-40">
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="orange-red-color ico-65">
                      <span className="flaticon-tongue" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md">Stickers, Emojis, Themes</h5>
                    <p className="p-lg">
                      Ligula risus auctor tempus dolor feugiat undo lacinia
                      purus lipsum quaerat primis ultrice tellus and viverra
                      purus suscipit
                    </p>
                  </div>
                </div>
                {/* CONTENT BOX #3 */}
                <div className="cbox mb-40">
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="orange-red-color ico-65">
                      <span className="flaticon-shield-2" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md">Spam Protection</h5>
                    <p className="p-lg">
                      Ligula risus auctor tempus dolor feugiat undo lacinia
                      purus lipsum quaerat primis ultrice tellus and viverra
                      purus suscipit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div
                className="img-block right-column wow fadeInLeft"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <img
                  className="img-fluid"
                  src="/images/img-12.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1content5;
