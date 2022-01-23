import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../utils/utils";

const RtlHeader = ({ btnCustomHover, navHoverColor, navLight, whiteLogo }) => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  const [toggle, setToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState("");

  const toggleFun = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };
  const toggleMenu = (value) => {
    setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
  };

  return (
    <header
      id="header"
      className={`header tra-menu ${
        navLight ? "navbar-light" : "navbar-dark"
      }  `}
    >
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/images/logo-01.png" alt="mobile-logo" />
          </span>
          <a
            id="wsnavtoggle"
            onClick={() => toggleFun()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <a href="#hero-6" className="logo-black">
                <img src="/images/logo-01.png" alt="header-logo" />
              </a>
            </div>
            <div className="desktoplogo">
              <a href="#hero-6" className="logo-white">
                <img src="/images/logo-white.png" alt="header-logo" />
              </a>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <ul
                className={`wsmenu-list ${
                  navHoverColor ? navHoverColor : "nav-stateblue-hover"
                }`}
              >
                {/* MEGAMENU */}
                <li aria-haspopup="true" className="mg_link a ">
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "home" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("home")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <a href="#">
                    الصفحة الرئيسية <span className="wsarrow" />
                  </a>
                  <div
                    className="wsmegamenu w-75 clearfix"
                    style={{
                      display: mobileMenuToggle === "home" ? "block" : "",
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <Link href="/demo-22">وكالة التسويق</Link>
                          </li>
                          <li>
                            <Link href="/demo-23">وكالة العلامات التجارية</Link>
                          </li>
                          <li>
                            <Link href="/404">404 صفحة</Link>
                          </li>
                          <li>
                            <Link href="/demo-24">RTL الإصدار # 1</Link>
                          </li>
                          <li>
                            <Link href="/demo-25">RTL الإصدار # 2</Link>
                          </li>
                          <li>
                            <Link href="/demo-26">RTL الإصدار # 3</Link>
                          </li>
                        </ul>
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <Link href="/demo-15">البرمجيات 2</Link>
                          </li>
                          <li>
                            <Link href="/demo-16">عرض التطبيق 3</Link>
                          </li>
                          <li>
                            <Link href="/demo-17">برامج سطح المكتب 2</Link>
                          </li>
                          <li>
                            <Link href="/demo-18">شركة SEO</Link>
                          </li>
                          <li>
                            <Link href="/demo-19">التسويق الرقمي</Link>
                          </li>
                          <li>
                            <Link href="/demo-20">الأمن الإلكتروني</Link>
                          </li>
                          <li>
                            <Link href="/demo-21">خدمة SaaS 3</Link>
                          </li>
                        </ul>
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <Link href="/demo-8">
                              تسويق وسائل الاعلام الاجتماعية
                            </Link>
                          </li>
                          <li>
                            <Link href="/demo-9">الوكالة الرقمية</Link>
                          </li>
                          <li>
                            <Link href="/demo-10">خدمة SaaS 2</Link>
                          </li>
                          <li>
                            <Link href="/demo-11">برامج سطح المكتب 1</Link>
                          </li>
                          <li>
                            <Link href="/demo-12">الخدمة الرقمية 2</Link>
                          </li>
                          <li>
                            <Link href="/demo-13">البرمجيات SaaS</Link>
                          </li>
                          <li>
                            <Link href="/demo-14">عرض التطبيق 2</Link>
                          </li>
                        </ul>
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <Link href="/demo-1">هبوط التطبيق</Link>
                          </li>
                          <li>
                            <Link href="/demo-2">عرض التطبيق 1</Link>
                          </li>
                          <li>
                            <Link href="/demo-3">وكالة بدء التشغيل</Link>
                          </li>
                          <li>
                            <Link href="/demo-4">وكالة تصميم</Link>
                          </li>
                          <li>
                            <Link href="/demo-5">البرمجيات 1</Link>
                          </li>
                          <li>
                            <Link href="/demo-6">خدمة SaaS 1</Link>
                          </li>
                          <li>
                            <Link href="/demo-7">الخدمة الرقمية 1</Link>
                          </li>
                        </ul>
                      </div>{" "}
                      {/* End row */}
                    </div>{" "}
                    {/* End container */}
                  </div>{" "}
                  {/* End wsmegamenu */}
                </li>{" "}
                {/* END MEGAMENU */}
                {/* DROPDOWN MENU */}
                <li aria-haspopup="true" className="b">
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "about" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("about")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <a href="#">
                    عن <span className="wsarrow" />
                  </a>
                  <ul
                    className="sub-menu"
                    style={{
                      display: mobileMenuToggle === "about" ? "block" : "",
                    }}
                  >
                    <li aria-haspopup="true">
                      <a href="#features-8">لماذا OLMO؟</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#content-3">أفضل الحلول</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#content-10">كيف تعمل</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#features-4">الميزات الأساسية</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#content-6">عملية التكامل</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#reviews-4">المراجعات</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#content-7">أدوات داخلية</a>
                    </li>
                  </ul>
                </li>
                {/* DROPDOWN MENU */}
                <li aria-haspopup="true" className="c">
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "pages" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("pages")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <a href="#">
                    الصفحات <span className="wsarrow" />
                  </a>
                  <div
                    style={{
                      display: mobileMenuToggle === "pages" ? "block" : "",
                    }}
                    className="wsmegamenu clearfix halfmenu"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        {/* Links */}
                        <ul className="col-lg-6 link-list">
                          <li>
                            <Link href="/about">معلومات عنا</Link>
                          </li>
                          <li>
                            <Link href="/features">الميزات والملحقات</Link>
                          </li>
                          <li>
                            <Link href="/pricing">حزم التسعير</Link>
                          </li>
                          <li>
                            <Link href="/download">صفحة التحميل</Link>
                          </li>
                          <li>
                            <Link href="/projects">مشاريعنا</Link>
                          </li>
                          <li>
                            <Link href="/project-details">تفاصيل المشروع</Link>
                          </li>
                        </ul>
                        {/* Links */}
                        <ul className="col-lg-6 link-list">
                          <li>
                            <Link href="/team">قابل الفريق</Link>
                          </li>
                          <li>
                            <Link href="/faqs">صفحة الأسئلة الشائعة</Link>
                          </li>
                          <li>
                            <Link href="/blog-listing">قائمة المدونة</Link>
                          </li>
                          <li>
                            <Link href="/single-post">مشاركة مدونة واحدة</Link>
                          </li>
                          <li>
                            <Link href="/terms">الشروط والخصوصية</Link>
                          </li>
                          <li>
                            <Link href="/contacts">جهات الاتصال</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>{" "}
                {/* END DROPDOWN MENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple d" aria-haspopup="true">
                  <a href="#projects-2">المشاريع</a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#pricing-2">التسعير</a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#faqs-2">أسئلة وأجوبة</a>
                </li>
                {/* HEADER BUTTON */}
                <li className="nl-simple" aria-haspopup="true">
                  <a
                    href="#cta-11"
                    className={
                      btnCustomHover
                        ? btnCustomHover
                        : "btn btn-stateblue tra-grey-hover last-link"
                    }
                  >
                    لنبدأ
                  </a>
                </li>
                {/* HEADER SOCIAL LINKS 													
									<li class="nl-simple header-socials ico-20 clearfix" aria-haspopup="true">
										<span><a href="#" class="ico-facebook"><span class="flaticon-facebook"></span></a></span>
										<span><a href="#" class="ico-twitter"><span class="flaticon-twitter"></span></a></span>
										<span><a href="#" class="ico-instagram"><span class="flaticon-instagram"></span></a></span>
										<span><a href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></a></span>	
									</li> */}
              </ul>
            </nav>{" "}
            {/* END MAIN MENU */}
          </div>
        </div>{" "}
        {/* END NAVIGATION MENU */}
      </div>{" "}
      {/* End header-wrapper */}
    </header>
  );
};

export default RtlHeader;
