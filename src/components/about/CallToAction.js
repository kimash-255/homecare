import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-to-action py-0">
      <div className="auto-container">
        <div className="cta-wrapper">
          <div
            className="bg bg-image"
            style={{ backgroundImage: "url(./images/background/bg-2.jpg)" }}
          ></div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="img-thumb">
                <img src="/images/resource/cta-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content-column">
                <h4 className="title">
                  We provide a supportive, inclusive, and empowering community
                  for individuals with intellectual disabilities.
                </h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content-column">
                <div className="text">
                  Maintaining transparency, accountability, and a commitment
                  towards continuous quality improvement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
