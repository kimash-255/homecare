import Link from "next/link";
import Layout from "@/components/layout";
import Gallery from "@/components/gallery";

const GalleryPage = () => {
  return (
    <Layout>
      <section
        className="page-title"
        style={{ backgroundImage: `url(/images/background/page-title.jpg)` }}
      >
        <div className="auto-container" style={{ marginTop: "50px" }}>
          <div className="title-outer text-center">
            <h1 className="title">Our GalleryPage</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Our Gallery</li>
            </ul>
          </div>
        </div>
      </section>
      <Gallery />
    </Layout>
  );
};

export default GalleryPage;
