import React from "react";
import galleryData from "@/data/gallery"; // Ensure this path is correct

const Gallery = () => (
  <section className="gallery-section pb-90">
    <div className="auto-container">
      <div className="row" style={{ margin: "-10px" }}>
        {galleryData.map((image, index) => (
          <div
            key={index}
            className="gallery-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            style={{ padding: "10px" }}
          >
            <div className="inner-box">
              <figure
                className="image overlay-anim"
                style={{
                  width: "100%",
                  height: "250px",
                  overflow: "hidden",
                  padding: "10px",
                  background: "#fff",
                  borderRadius: "8px",
                }}
              >
                <a href={image.imgSrc}>
                  <img
                    src={image.imgSrc}
                    alt={`Gallery Image ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </a>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
