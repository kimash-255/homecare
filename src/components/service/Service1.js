import Image from "next/image";
import Link from "next/link";

const Service1 = () => {
  return (
    <section className="services-section-one">
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(./images/pattern/pattern-1.png)" }}
      ></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">What We Offer</span>
          <h2>
            We're committed to deliver the <br />
            high quality service
          </h2>
        </div>
        {/* <div className="carousel-outer wow fadeInUp">
          <div className="services-carousel owl-carousel owl-theme default-nav">
            <div className="service-block-one">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <a href="page-service-details.html">
                      <img src="/images/resource/service1-1.jpg" alt="" />
                    </a>
                  </figure>
                </div>
                <div className="content-box">
                  <i className="icon flaticon-oldkare-shield"></i>
                  <h4 className="title">
                    <a href="page-service-details.html">Assisted Living</a>
                  </h4>
                  <div className="text">
                    interdum arcuso pharetra per sollicitudin luctus purus
                    convalli nascetur dictumst litora tempus proin
                  </div>
                </div>
              </div>
            </div>

            <div className="service-block-one">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <a href="page-service-details.html">
                      <img src="/images/resource/service1-2.jpg" alt="" />
                    </a>
                  </figure>
                </div>
                <div className="content-box">
                  <i className="icon flaticon-oldkare-picture"></i>
                  <h4 className="title">
                    <a href="page-service-details.html">Residential Care</a>
                  </h4>
                  <div className="text">
                    interdum arcuso pharetra per sollicitudin luctus purus
                    convalli nascetur dictumst litora tempus proin
                  </div>
                </div>
              </div>
            </div>

            <div className="service-block-one">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <a href="page-service-details.html">
                      <img src="images/resource/service1-3.jpg" alt="" />
                    </a>
                  </figure>
                </div>
                <div className="content-box">
                  <i className="icon flaticon-oldkare-rocking-chair-1"></i>
                  <h4 className="title">
                    <a href="page-service-details.html">Personal Care</a>
                  </h4>
                  <div className="text">
                    interdum arcuso pharetra per sollicitudin luctus purus
                    convalli nascetur dictumst litora tempus proin
                  </div>
                </div>
              </div>
            </div>

            <div className="service-block-one">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <a href="page-service-details.html">
                      <img src="/images/resource/service1-4.jpg" alt="" />
                    </a>
                  </figure>
                </div>
                <div className="content-box">
                  <i className="icon flaticon-oldkare-rocking-chair-1"></i>
                  <h4 className="title">
                    <a href="page-service-details.html">Elderly Nutrition</a>
                  </h4>
                  <div className="text">
                    interdum arcuso pharetra per sollicitudin luctus purus
                    convalli nascetur dictumst litora tempus proin
                  </div>
                </div>
              </div>
            </div>

            <div className="service-block-one">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <a href="page-service-details.html">
                      <img src="/images/resource/service1-5.jpg" alt="" />
                    </a>
                  </figure>
                </div>
                <div className="content-box">
                  <i className="icon flaticon-oldkare-shield"></i>
                  <h4 className="title">
                    <a href="page-service-details.html">Senior Citizen</a>
                  </h4>
                  <div className="text">
                    interdum arcuso pharetra per sollicitudin luctus purus
                    convalli nascetur dictumst litora tempus proin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row justify-content-center mt-40 wow fadeInUp">
          <div className="col-lg-8">
            <div className="bottom-text d-flex align-items-center justify-content-between">
              <p className="mb-0">
                Need a walk through our facility?
                <span className="color3 ps-2">Send a request now</span>
              </p>
              <a
                href="page-contact.html"
                className="theme-btn btn-style-one small"
              >
                <span className="btn-title">Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service1;
