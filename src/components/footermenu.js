import React from "react"
import "./betweenone.css"
import "./footermenu.css"
const Prefooter = () => (
  <div className=" footer-area container-fluid">
    <div
      className="container "
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
      }}
    >
      <div className="row footer-area-inner hk-quote-container">
        <div className=" footer-widgets widget-area col-md-3">
          <section className="widget widget_text">
            <h4 className="footer-widget-title">About Us</h4>
            <div className="textwidget">
              <p>
                We are an award winning plumbing company with over 20 years
                experience in the business. We provide a wide range of services
                for both residential and commercial clients.
              </p>
            </div>
          </section>
          <section className="widget plumbit_social">
            <div className="social-widget">
              <ul className="">
                <li className="social-widget-item social-fb">
                  <a target="_blank" title="Facebook" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-widget-item social-tw">
                  <a target="_blank" title="Twitter" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-widget-item social-insta">
                  <a target="_blank" title="Instagram" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="footer-widgets widget-area col-md-3">
          <section className="widget plumbit_company">
            <h4 className="footer-widget-title">Contact Us</h4>
            <ul className="company-info-wid">
              <li className="company-info-item">
                {" "}
                <i className="lnr lnr-map-marker"></i>
                <div className="info-detail-wrap">
                  <h6 className="info-title"></h6>
                  <span className="info-detail">
                    {" "}
                    73 Canal Street, New York, NY{" "}
                  </span>
                </div>
              </li>
              <li className="company-info-item">
                {" "}
                <i className="lnr lnr-phone"></i>
                <div className="info-detail-wrap">
                  <h6 className="info-title"></h6>{" "}
                  <span className="info-detail">
                    {" "}
                    <a href="tel:+000000000"> +0000000000000</a>{" "}
                  </span>
                </div>
              </li>
              <li className="company-info-item">
                {" "}
                <i className="lnr lnr-smartphone"></i>
                <div className="info-detail-wrap">
                  <h6 className="info-title"></h6>{" "}
                  <span className="info-detail">
                    {" "}
                    <a href="tel:+0000000000"> +000000000</a>{" "}
                  </span>
                </div>
              </li>
              <li className="company-info-item">
                {" "}
                <i className="lnr lnr-envelope"></i>
                <div className="info-detail-wrap">
                  <h6 className="info-title"></h6>{" "}
                  <span className="info-detail">
                    {" "}
                    <a
                      href="mailto:support@test.com?subject=Contact&amp;Us"
                      target="_blank"
                    >
                      {" "}
                      support@test.com{" "}
                    </a>{" "}
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div className="footer-widgets widget-area col-md-3">
          <section className="widget widget_nav_menu">
            <h4 className="footer-widget-title">Quick Links</h4>
            <div className="menu-navigation-menu-container">
              <ul className="menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-863 current_page_item menu-item-4883">
                  <a href="" aria-current="page">
                    About
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4884">
                  <a href="">Contact</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4885">
                  <a href="">News List</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4886">
                  <a href="">Services</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4887">
                  <a href="">Shop</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="footer-widgets widget-area col-md-3">
          <section className="widget plumbit_opening_two">
            <h4 className="footer-widget-title">Opening Hours</h4>
            <ul className="opening-hours-wid opening-hours-wid-two">
              <li className="open-hrs-item">
                {" "}
                <i className="ti-time"></i>
                <div className="open-hrs-detail-wrap">
                  <h6 className="open-hrs-text">Monday - Friday</h6>{" "}
                  <span className="open-hrs-time">8:00 AM - 5:00 PM</span>
                </div>
              </li>
              <li className="open-hrs-item">
                {" "}
                <i className="ti-time"></i>
                <div className="open-hrs-detail-wrap">
                  <h6 className="open-hrs-text">Saturday</h6>{" "}
                  <span className="open-hrs-time">CLOSED</span>
                </div>
              </li>
              <li className="open-hrs-item">
                {" "}
                <i className="ti-time"></i>
                <div className="open-hrs-detail-wrap">
                  <h6 className="open-hrs-text">Sunday</h6>{" "}
                  <span className="open-hrs-time">CLOSED</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <hr className="hr"></hr>
  </div>
)

export default Prefooter
