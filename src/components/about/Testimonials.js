import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  return (
    <section class="testimonials-section">
      <div class="bg-map bounce-y"></div>
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">Client Testimonial</span>
          <h2>
            What people are saying <br />
            about us!
          </h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="testimonial-block">
              <div class="inner-box">
                <div class="info-box">
                  <div class="quote-icon">
                    <span class="icon fa fa-quote-right"></span>
                  </div>
                  <h4 class="name">Mary</h4>
                  <span class="designation">Parent</span>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="text">
                  We were amazed by the level of care and compassion shown to
                  our son. The staffs truly understand his needs and have helped
                  him thrive.
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="testimonial-block">
              <div class="inner-box">
                <div class="info-box">
                  <div class="quote-icon">
                    <span class="icon fa fa-quote-right"></span>
                  </div>
                  <h4 class="name">Robert</h4>
                  <span class="designation">Resident</span>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="text">
                  I love living here! The staff are nice, and we have fun
                  activities. I feel safe and happy.I've made friends here, and
                  we do cool things together.
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="testimonial-block">
              <div class="inner-box">
                <div class="info-box">
                  <div class="quote-icon">
                    <span class="icon fa fa-quote-right"></span>
                  </div>
                  <h4 class="name">Rachel</h4>
                  <span class="designation">Residential Counselor</span>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="text">
                  Working here is rewarding because I see the positive impact we
                  have on our residents' lives. It's a team effort, and I'm
                  proud to be part of it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
