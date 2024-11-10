import Image from "next/image";
import Link from "next/link";

const NewsGrid = () => {
    return (
        <>
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/page-title.jpg)" }}
            >
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">News Grid</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>News Grid</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="news-section pb-90">
                <div className="auto-container">
                    <div className="row">
                        {/* News Block Two */}
                        {[
                            {
                                id: "1",
                                imgSrc: "/images/resource/news2-1.jpg",
                                title: "New Caring Thoughts You Can Fundraise",
                                description:
                                    "There are many dictim variations of simply free text passages of available but the majority have suffered alteration",
                                date: "January 31, 2024",
                                author: "By shadhin",
                                delay: "0ms",
                            },
                            {
                                id: "2",
                                imgSrc: "/images/resource/news2-2.jpg",
                                title: "Five Tips to Improve Seniors’ Quality of Life",
                                description:
                                    "There are many dictim variations of simply free text passages of available but the majority have suffered alteration",
                                date: "January 31, 2024",
                                author: "By shadhin",
                                delay: "200ms",
                            },
                            {
                                id: "3",
                                imgSrc: "/images/resource/news2-3.jpg",
                                title: "Exploring your In home care support options",
                                description:
                                    "There are many dictim variations of simply free text passages of available but the majority have suffered alteration",
                                date: "January 31, 2024",
                                author: "By shadhin",
                                delay: "300ms",
                            },
                            {
                                id: "4",
                                imgSrc: "/images/resource/news1-5.jpg",
                                title: "Alzheimer’s dementia care Tips for senior",
                                description:
                                    "There are many dictim variations of simply free text passages of available but the majority have suffered alteration",
                                date: "January 31, 2024",
                                author: "By shadhin",
                                delay: "400ms",
                            },
                            {
                                id: "5",
                                imgSrc: "/images/resource/news1-1.jpg",
                                title: "Medication Management for Older Adults",
                                description:
                                    "There are many dictim variations of simply free text passages of available but the majority have suffered alteration",
                                date: "January 31, 2024",
                                author: "By shadhin",
                                delay: "500ms",
                            },
                            {
                                id: "6",
                                imgSrc: "/images/resource/news1-6.jpg",
                                title: "New Caring Thoughts You Can Fundraise",
                                description:
                                    "There are many dictim variations of simply free text passages of available but the majority have suffered alteration",
                                date: "January 31, 2024",
                                author: "By shadhin",
                                delay: "600ms",
                            },
                        ].map((newsItem, index) => (
                            <div
                                key={index}
                                className={`news-block-two col-lg-4 col-md-6 wow fadeInUp`}
                                data-wow-delay={newsItem.delay}
                            >
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link href={`/blog/${newsItem.id}`}>
                                                <Image
                                                    src={newsItem.imgSrc}
                                                    alt={newsItem.title}
                                                    layout="responsive"
                                                    width={350}
                                                    height={230}
                                                />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="pl-xs--0 pr-xs--0 p-30 pt-0">
                                        <div className="content-box">
                                            <h4 className="title">
                                                <Link href={`/blog/${newsItem.id}`}>
                                                    {newsItem.title}
                                                </Link>
                                            </h4>
                                            <div className="text">{newsItem.description}</div>
                                        </div>
                                        <div className="bottom-box">
                                            <div className="comments">
                                                <i className="fas fa-calendar-alt"></i> {newsItem.date}
                                            </div>
                                            <div className="comments">
                                                <i className="fas fa-user"></i> {newsItem.author}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsGrid;
