const Demo4newsletter2 = () => {
  return (
    <section
      id="newsletter-2"
      className="pt-60 pb-60 newsletter-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
          {/* NEWSLETTER TEXT */}
          <div className="col">
            <div className="newsletter-txt pr-20">
              <h3 className="h3-xs">
                Stay up to date with our news, ideas and updates
              </h3>
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
                  <button type="submit" className="btn btn-pink black-hover">
                    Subscribe Now
                  </button>
                </span>
              </div>
              {/* Newsletter Form Notification */}
              <label htmlFor="s-email" className="form-notification" />
            </form>
          </div>
          {/* END NEWSLETTER FORM */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo4newsletter2;
