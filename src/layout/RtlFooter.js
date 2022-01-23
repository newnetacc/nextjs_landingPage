const RtlFooter = () => {
  return (
    <footer id="footer-4" className="footer division">
      <div className="container">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER LINKS */}
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 order-last order-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h6 className="h6-xl">اتصل بنا</h6>
              {/* Social Links */}
              <ul className="footer-socials text-secondary ico-25 text-center clearfix">
                <li>
                  <a href="#">
                    <span className="flaticon-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="flaticon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="flaticon-github" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="flaticon-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER LINKS */}
          <div className="col-sm-6 col-md-3 col-lg-2 order-last order-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h6 className="h6-xl">الدعم</h6>
              {/* Footer List */}
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="#">أسئلة وأجوبة</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">تعليمات المحرر</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">تواصل اجتماعي</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">الدردشة الحية</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">جهات الاتصال</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER LINKS */}
          <div className="col-sm-6 col-md-3 col-lg-2 order-last order-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h6 className="h6-xl">يكتشف</h6>
              {/* Footer List */}
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="#">مدونتنا</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">الخطط والتسعير</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">المراجعات</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">قاعدة المعرفة</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">سياسة ملفات الارتباط</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER LINKS */}
          <div className="col-sm-6 col-md-3 col-lg-2 col-lg-2 col-xl-2 order-last order-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h6 className="h6-xl">عن</h6>
              {/* Footer Links */}
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="#">معلومات عنا</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">فريقنا</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">وظائف</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">الاعلام الصحافي</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">دعاية</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER INFO */}
          <div className="col-lg-3 order-first order-lg-2">
            <div className="footer-info mb-40">
              <img
                className="footer-logo"
                src="/images/logo-01.png"
                alt="footer-logo"
              />
            </div>
          </div>
        </div>{" "}
        {/* END FOOTER CONTENT */}
        <hr />
        {/* BOTTOM FOOTER */}
        <div className="bottom-footer">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            {/* BOTTOM FOOTER LINKS */}
            <div className="col order-last order-md-2">
              <ul className="bottom-footer-list text-secondary">
                <li className="first-li">
                  <p>
                    <a href="#">سياسة خاصة</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">تعليمات الاستخدام</a>
                  </p>
                </li>
                <li className="last-li">
                  <p>
                    <a href="#">خريطة الموقع</a>
                  </p>
                </li>
              </ul>
            </div>
            {/* FOOTER COPYRIGHT */}
            <div className="col order-first order-md-2">
              <div className="footer-copyright">
                <p>© 2010 - 2021 أولمو. كل الحقوق محفوظة</p>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* BOTTOM FOOTER */}
      </div>
    </footer>
  );
};

export default RtlFooter;
