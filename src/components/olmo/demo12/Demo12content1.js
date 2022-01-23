const Demo12content1 = () => {
  return (
    <section
      id="content-1"
      className="content-1 bg-04 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6 order-last order-md-2">
            <div className="txt-block left-column white-color wow fadeInRight">
              {/* Section ID */}
              <span className="section-id rounded-id bg-tra-white white-color txt-upcase">
                Totally Optimized
              </span>
              {/* Title */}
              <h2 className="h2-xs">Work smarter with powerful features</h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                    Fringilla risus, luctus mauris orci auctor euismod iaculis
                    luctus magna purus pretium ligula purus undo quaerat tempor
                    sapien rutrum mauris quaerat ultrice
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Quaerat sodales sapien euismod purus blandit
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Nemo ipsam egestas volute turpis dolores undo ultrice
                    aliquam quaerat at sodales sapien purus
                  </p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6 order-first order-md-2">
            <div className="rel img-block right-column video-preview wow fadeInLeft">
              {/* Play Icon */}
              <a
                className="video-popup1"
                href="https://www.youtube.com/embed/SZEflIVnhH8"
              >
                <div className="video-btn video-btn-xl bg-violet-red ico-90">
                  <div className="video-block-wrapper">
                    <span className="flaticon-play-button" />
                  </div>
                </div>
              </a>
              {/* Preview Image */}
              <img
                className="img-fluid"
                src="/images/img-08.png"
                alt="video-preview"
              />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo12content1;
