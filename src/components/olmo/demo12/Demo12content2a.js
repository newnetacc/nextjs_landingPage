const Demo12content2a = () => {
  return (
    <section
      id="content-2a"
      className="content-2 pb-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/img-10.png"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* TEXT BOX */}
              <div className="txt-box mb-25">
                {/* Title */}
                <h5 className="h5-lg">Editing Tools and Exports</h5>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit at vitae ipsum primis
                  undo and cubilia laoreet augue and luctus magna dolor luctus
                  at egestas sapien vitae nemo egestas volute and turpis dolores
                  aliquam quaerat sodales a sapien
                </p>
              </div>
              {/* TEXT BOX */}
              <div className="txt-box">
                {/* Title */}
                <h5 className="h5-lg">Multiplatform. Always Synced</h5>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Fringilla risus, luctus mauris auctor euismod an iaculis
                      luctus magna purus pretium ligula purus and quaerat
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
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo12content2a;
