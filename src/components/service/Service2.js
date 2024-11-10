import Image from "next/image";
import Link from "next/link";

const Service2 = () => {
    return (
        <section className="about-section-two">
            <div className="bg bg-1 bg-image bounce-y" style={{ backgroundImage: 'url(./images/icons/bg.png)' }}></div>
            <div className="auto-container">
                <div className="row">
        
                    <div className="content-column col-lg-6">
                        <div className="inner-column wow fadeInLeft">
                            <div className="sec-title">
                                <span className="sub-title">We Always Care Elderly</span>
                                <h2>Why most of the people <br />prefer our oldkare</h2>
                            </div>

                            <div className="about-block-two">
                                <div className="inner-box">
                                    <h4 className="title"><i className="fal fa-circle-check"></i>Free Medical CheckUp</h4>
                                    <div className="text">Vestibulum molestie pharetra dictum Integer interdum gra vida urna sed fringilla dolor maximus.</div>
                                </div>
                            </div>

                            <div className="about-block-two">
                                <div className="inner-box">
                                    <h4 className="title"><i className="fal fa-circle-check"></i>24/7 Emergency Care</h4>
                                    <div className="text">Vestibulum molestie pharetra dictum Integer interdum gra vida urna sed fringilla dolor maximus.</div>
                                </div>
                            </div>

                            <div className="about-block-two">
                                <div className="inner-box">
                                    <h4 className="title"><i className="fal fa-circle-check"></i>Low Cost Services</h4>
                                    <div className="text">Vestibulum molestie pharetra dictum Integer interdum gra vida urna sed fringilla dolor maximus.</div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="image-column col-lg-6">
                        <div className="inner-column wow fadeInRight">
                            <div className="bg bg-2 bg-image bounce-y" style={{ backgroundImage: 'url(./images/icons/arrow.png)' }}></div>
                            <div className="image-box">
                                <span className="icon-star bounce-x"></span>
                                <figure className="image overlay-anim wow fadeInUp"><img src="images/resource/about1-3.jpg" alt="" /></figure>
                                <figure className="image-2 overlay-anim wow fadeInUp"><img src="images/resource/about1-4.jpg" alt="" /></figure>
                            </div>
                            <div className="exp-box bounce-y">
                                <div className="inner">
                                    <h4 className="title">We Take Care Helping Seniors Learn New Hobbies</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service2;