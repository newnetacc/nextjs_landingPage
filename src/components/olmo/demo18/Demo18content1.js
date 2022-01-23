const Demo18content1 = () => {
  return (
    <section
      id="content-1"
      className="content-1 bg-snow pb-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6 order-last order-md-2">
            <div className="txt-block left-column wow fadeInRight">
              {/* TEXT BOX */}
              <div className="txt-box">
                {/* Title */}
                <h5 className="h5-md">Higher Rankings. Relevant Visitors</h5>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Fringilla risus, luctus mauris orci auctor euismod iaculis
                      luctus magna purus pretium ligula purus undo quaerat
                      tempor sapien rutrum mauris quaerat ultrice
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
              </div>{" "}
              {/* END TEXT BOX */}
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6 order-first order-md-2">
            <div className="rel img-block right-column wow fadeInLeft">
              <img
                className="img-fluid"
                src="/images/seo-02.png"
                alt="content-image"
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

export default Demo18content1;
