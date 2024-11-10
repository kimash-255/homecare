import Image from "next/image";
import Link from "next/link";

const NewsDetail = ({ title, date, author, content, tags, imgSrc }) => {
    return (
        <section className="blog-details">
            <div className="container pb-100">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <img src={imgSrc} alt={title} />
                                <div className="blog-details__date">
                                    <span className="day">{date.day}</span>
                                    <span className="month">{date.month}</span>
                                </div>
                            </div>
                            <div className="blog-details__content">
                                <ul className="blog-details__tags">
                                    {tags.map((tag, index) => (
                                        <li key={index}>
                                            <a href="#">{tag}</a>
                                        </li>
                                    ))}
                                </ul>
                                <h2>{title}</h2>
                                <div className="blog-details__info">
                                    <span className="author">By {author}</span>
                                </div>
                                <div className="blog-details__text">
                                    {content.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsDetail;

