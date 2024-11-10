import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";

// Example blog data (replace this with actual data or API call)
const newsData = [
    {
        id: "1",
        imgSrc: "/images/resource/news2-1.jpg",
        title: "New Caring Thoughts You Can Fundraise",
        description:
            "There are many dictim variations of simply free text passages of available but the majority have suffered alteration.",
        date: "January 31, 2024",
        author: "By Shadhin",
        delay: "0ms",
        content: [
            "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.",
            "Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla.",
            "Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc."
        ],
        tags: ["Health", "Care", "Fundraising"],
        comments: [
            {
                author: "Kevin Martin",
                text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.",
                avatar: "/images/resource/testimonial-1.jpg"
            },
            {
                author: "Sarah Albert",
                text: "Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla.",
                avatar: "/images/resource/testimonial-2.jpg"
            }
        ],
        prev: { id: "2", title: "Five Tips to Improve Seniors’ Quality of Life" },
        next: { id: "3", title: "Exploring your In-home Care Support Options" }
    },
    {
        id: "2",
        imgSrc: "/images/resource/news2-2.jpg",
        title: "Five Tips to Improve Seniors’ Quality of Life",
        description:
            "There are many dictim variations of simply free text passages of available but the majority have suffered alteration.",
        date: "January 31, 2024",
        author: "By Shadhin",
        delay: "200ms",
        content: [
            "Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor.",
            "Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat.",
            "Vivamus vel eros vitae est aliquet pellentesque vitae et nunc."
        ],
        tags: ["Lifestyle", "Seniors", "Quality of Life"],
        comments: [
            {
                author: "John Doe",
                text: "Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla.",
                avatar: "/images/resource/testimonial-3.jpg"
            }
        ],
        prev: { id: "1", title: "New Caring Thoughts You Can Fundraise" },
        next: { id: "3", title: "Exploring your In-home Care Support Options" }
    },
    {
        id: "3",
        imgSrc: "/images/resource/news2-3.jpg",
        title: "Exploring your In-home Care Support Options",
        description:
            "There are many dictim variations of simply free text passages of available but the majority have suffered alteration.",
        date: "January 31, 2024",
        author: "By Shadhin",
        delay: "300ms",
        content: [
            "Nulla facilisi. Etiam ac leo a eros condimentum malesuada.",
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
            "Proin ac nulla eget dui fermentum elementum. Pellentesque euismod leo nec mauris sollicitudin feugiat."
        ],
        tags: ["Health", "Care", "In-home Support"],
        comments: [
            {
                author: "Jane Doe",
                text: "Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat.",
                avatar: "/images/resource/testimonial-4.jpg"
            }
        ],
        prev: { id: "2", title: "Five Tips to Improve Seniors’ Quality of Life" },
        next: { id: "4", title: "Alzheimer’s Dementia Care Tips for Senior" }
    },
    {
        id: "4",
        imgSrc: "/images/resource/news1-5.jpg",
        title: "Alzheimer’s Dementia Care Tips for Senior",
        description:
            "There are many dictim variations of simply free text passages of available but the majority have suffered alteration.",
        date: "January 31, 2024",
        author: "By Shadhin",
        delay: "400ms",
        content: [
            "Duis a odio ut risus tincidunt tempor. Nulla ac sapien eu felis dapibus auctor.",
            "Vestibulum aliquam purus quis mi tincidunt, non scelerisque justo feugiat.",
            "Integer ac ante felis. Sed ut augue tincidunt, lobortis odio non, consectetur elit."
        ],
        tags: ["Health", "Alzheimer’s", "Senior Care"],
        comments: [
            {
                author: "Ethan Craig",
                text: "Duis a odio ut risus tincidunt tempor. Nulla ac sapien eu felis dapibus auctor.",
                avatar: "/images/resource/testimonial-5.jpg"
            }
        ],
        prev: { id: "3", title: "Exploring your In-home Care Support Options" },
        next: { id: "5", title: "Medication Management for Older Adults" }
    },
    {
        id: "5",
        imgSrc: "/images/resource/news1-1.jpg",
        title: "Medication Management for Older Adults",
        description:
            "There are many dictim variations of simply free text passages of available but the majority have suffered alteration.",
        date: "January 31, 2024",
        author: "By Shadhin",
        delay: "500ms",
        content: [
            "Cras nec mi vitae elit lobortis mollis. Aenean ac gravida sapien.",
            "Curabitur malesuada justo a sem egestas, et maximus libero rutrum.",
            "Fusce elementum turpis non enim malesuada, id mollis felis scelerisque."
        ],
        tags: ["Health", "Medication", "Seniors"],
        comments: [
            {
                author: "Mia Roberts",
                text: "Cras nec mi vitae elit lobortis mollis. Aenean ac gravida sapien.",
                avatar: "/images/resource/testimonial-6.jpg"
            }
        ],
        prev: { id: "4", title: "Alzheimer’s Dementia Care Tips for Senior" },
        next: { id: "6", title: "New Caring Thoughts You Can Fundraise" }
    },
    {
        id: "6",
        imgSrc: "/images/resource/news1-6.jpg",
        title: "New Caring Thoughts You Can Fundraise",
        description:
            "There are many dictim variations of simply free text passages of available but the majority have suffered alteration.",
        date: "January 31, 2024",
        author: "By Shadhin",
        delay: "600ms",
        content: [
            "Aliquam erat volutpat. Integer scelerisque lectus nec mi fermentum mollis.",
            "Fusce pretium nunc vitae urna aliquam, ut auctor mi tempor.",
            "Pellentesque ac nisi eget odio gravida lacinia."
        ],
        tags: ["Health", "Fundraising", "Community"],
        comments: [
            {
                author: "Grace Cooper",
                text: "Aliquam erat volutpat. Integer scelerisque lectus nec mi fermentum mollis.",
                avatar: "/images/resource/testimonial-7.jpg"
            }
        ],
        prev: { id: "5", title: "Medication Management for Older Adults" },
        next: { id: "1", title: "New Caring Thoughts You Can Fundraise" }
    }
];


const NewsDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the news item based on the ID
    const newsItem = newsData.find(news => news.id === id);

    if (!newsItem) {
        return <p>Loading...</p>;
    }

    return (

    <Layout>
        <section className="blog-details">
            <div className="container pb-100">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <Image
                                    src={newsItem.imgSrc}
                                    alt={newsItem.title}
                                    width={800}
                                    height={500}
                                />
                                <div className="blog-details__date">
                                    <span className="day">{newsItem.date.day}</span>
                                    <span className="month">{newsItem.date.month}</span>
                                </div>
                            </div>
                            <div className="blog-details__content">
                                <ul className="list-unstyled blog-details__meta">
                                    <li><i className="fas fa-user-circle"></i> {newsItem.author}</li>
                                    <li><i className="fas fa-comments"></i> {newsItem.comments.length} Comments</li>
                                </ul>
                                <h3 className="blog-details__title">{newsItem.title}</h3>
                                {newsItem.content.map((paragraph, index) => (
                                    <p key={index} className="blog-details__text-2">{paragraph}</p>
                                ))}
                            </div>
                            <div className="blog-details__bottom">
                                <p className="blog-details__tags">
                                    <span>Tags</span>
                                    {newsItem.tags.map((tag, index) => (
                                        <span key={index} className="blog-details__tag">{tag}</span>
                                    ))}
                                </p>
                                <div className="blog-details__social-list">
                                    <Link href="#">
                                        <span><i className="fab fa-twitter"></i></span>
                                    </Link>
                                    <Link href="#">
                                        <span><i className="fab fa-facebook"></i></span>
                                    </Link>
                                    <Link href="#">
                                        <span><i className="fab fa-pinterest-p"></i></span>
                                    </Link>
                                    <Link href="#">
                                        <span><i className="fab fa-instagram"></i></span>
                                    </Link>
                                </div>
                            </div>

                            {/* Navigation links */}
                            <div className="nav-links">
                                {newsItem.prev && (
                                    <div className="prev">
                                        <Link href={`/blog/${newsItem.prev.id}`}>
                                            <span>{newsItem.prev.title}</span>
                                        </Link>
                                    </div>
                                )}
                                {newsItem.next && (
                                    <div className="next">
                                        <Link href={`/blog/${newsItem.next.id}`}>
                                            <span>{newsItem.next.title}</span>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Comment Section */}
                            <div className="comment-one">
                                <h3 className="comment-one__title">{newsItem.comments.length} Comments</h3>
                                {newsItem.comments.map((comment, index) => (
                                    <div key={index} className="comment-one__single">
                                        <div className="comment-one__image">
                                            <Image
                                                src={comment.avatar}
                                                alt={comment.author}
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>{comment.author}</h3>
                                            <p>{comment.text}</p>
                                            <button className="theme-btn btn-style-one comment-one__btn">
                                                <span className="btn-title">Reply</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                {/* Comment form */}
                                <div className="comment-form">
                                    <h3 className="comment-form__title mb-40">Leave a Comment</h3>
                                    <form id="contact_form" name="contact_form" action="#" method="post">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <input name="form_email" className="form-control" type="email" placeholder="Enter Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <textarea name="form_message" className="form-control" rows="5" placeholder="Enter Message"></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <input name="form_botcheck" className="form-control" type="hidden" />
                                            <button type="submit" className="theme-btn btn-style-one">
                                                <span className="btn-title">Submit Comment</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            {/* Search */}
                            <div className="sidebar__single sidebar__search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search here" />
                                    <button type="submit"><i className="lnr-icon-search"></i></button>
                                </form>
                            </div>

                            {/* Latest Posts */}
                            <div className="sidebar__single sidebar__post">
                                <h3 className="sidebar__title">Latest Posts</h3>
                                <ul className="sidebar__post-list list-unstyled">
                                    {newsData.slice(0, 3).map((post, index) => (
                                        <li key={index}>
                                            <div className="sidebar__post-image">
                                                <Image src={post.imgSrc} alt={post.title} width={100} height={100} />
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h3>
                                                    <span className="sidebar__post-content-meta">
                                                        <i className="fas fa-user-circle"></i> {post.author}
                                                    </span>
                                                    <Link href={`/blog/${post.id}`}>
                                                        <span>{post.title}</span>
                                                    </Link>
                                                </h3>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Categories */}
                            <div className="sidebar__single sidebar__category">
                                <h3 className="sidebar__title">Categories</h3>
                                <ul className="sidebar__category-list list-unstyled">
                                    <li><span>Medication</span></li>
                                    <li className="active"><span>Older Care</span></li>
                                    <li><span>Senior Care</span></li>
                                    <li><span>Senior Home</span></li>
                                </ul>
                            </div>

                            {/* Tags */}
                            <div className="sidebar__single sidebar__tags">
                                <h3 className="sidebar__title">Tags</h3>
                                <ul className="sidebar__tags-list list-unstyled">
                                    <li><span>Agency</span></li>
                                    <li><span>Business</span></li>
                                    <li><span>Business News</span></li>
                                    <li><span>Care</span></li>
                                    <li><span>Care Services</span></li>
                                    <li><span>Health</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    );
};

export default NewsDetailPage;
