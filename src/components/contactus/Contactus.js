import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
      <section
        className="page-title"
        style={{ backgroundImage: "url(/images/background/page-title.jpg)" }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Get in Touch</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li> Get in Touch</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-details">
        <div className="container pb-70">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us email</span>
                <h2>Feel free to write</h2>
              </div>
              <form
                id="contact_form"
                name="contact_form"
                action="includes/sendmail.php"
                method="post"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_subject"
                        className="form-control required"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows="7"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
                <div className="mb-5">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="submit"
                    className="theme-btn btn-style-one"
                    data-loading-text="Please wait..."
                  >
                    <span className="btn-title">Send message</span>
                  </button>
                  <button
                    type="reset"
                    className="theme-btn btn-style-one ml-25"
                  >
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div className="text"></div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6 className="mb-1">Have any question?</h6>
                      <a href="tel:9714609993">
                        <span>Free</span> : 971-460-9993
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6 className="mb-1">Write email</h6>
                      <Link href="mailto:dreamcarehomes@yahoo.com">
                        dreamcarehomes@yahoo.com
                      </Link>
                      <br />
                      <Link href="mailto:dreamcarehomes17@gmail.com">
                        dreamcarehomes17@gmail.com
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text">
                      <h6 className="mb-1">Visit anytime</h6>
                      <span>
                        {" "}
                        <ul className="space-y-2 text-gray-600 text-sm">
                          <li className="border-l-4 border-blue-500 pl-2">
                            415 NE 108TH AVE, 97220 PORTLAND, OREGON
                          </li>
                          <li className="border-l-4 border-green-500 pl-2">
                            3819 NE 112TH AVE, 97220 PORTLAND, OREGON
                          </li>
                        </ul>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section py-0">
        <iframe
          className="map w-100"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=415%20NE%20108th%20Ave,%20Portland,%20Oregon,%2097220+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default ContactUs;
