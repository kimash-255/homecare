import Image from "next/image";
import Link from "next/link";

const FunFact = () => {
  return (
    <section className="fun-fact-section">
      <div className="auto-container">
        <div className="fact-counter">
          <div className="row">
            <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp">
              <div className="inner">
                <div className="content">
                  <i className="icon flaticon-oldkare-old-people"></i>
                  <div className="count-box">
                    <span
                      className="count-text"
                      data-speed="3000"
                      data-stop="1500"
                    >
                      4
                    </span>
                    +
                  </div>
                  <h6 className="counter-title">Individuals Supported</h6>
                </div>
              </div>
            </div>

            <div
              className="counter-block col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="inner">
                <div className="content">
                  <i className="icon flaticon-oldkare-old-woman"></i>
                  <div className="count-box">
                    <span
                      className="count-text"
                      data-speed="3000"
                      data-stop="600"
                    >
                      10
                    </span>
                    +
                  </div>
                  <h6 className="counter-title">Dedicated Caregivers</h6>
                </div>
              </div>
            </div>

            <div
              className="counter-block col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="inner">
                <div className="content">
                  <i className="icon flaticon-oldkare-medication"></i>
                  <div className="count-box">
                    <span
                      className="count-text"
                      data-speed="3000"
                      data-stop="250"
                    >
                      24/
                    </span>
                    7
                  </div>
                  <h6 className="counter-title">Hours of Support Provided</h6>
                </div>
              </div>
            </div>

            <div
              className="counter-block col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="inner">
                <div className="content">
                  <i className="icon flaticon-oldkare-love"></i>
                  <div className="count-box">
                    <span
                      className="count-text"
                      data-speed="3000"
                      data-stop="1200"
                    >
                      10
                    </span>
                    +
                  </div>
                  <h6 className="counter-title">Families Impacted</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
