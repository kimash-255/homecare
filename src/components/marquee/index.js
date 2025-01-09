import Image from "next/image";
import Link from "next/link";

const Marquee = () => {
  return (
    <section className="marquee-section">
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/images/background/bg-1.jpg)" }}
      ></div>
      <div className="marquee">
        <div className="marquee-group">
          <div className="text" data-text="Specialised Care Service">
            Specialised Care Service{" "}
          </div>
          <span className="text divider"> ● </span>
          <div className="text" data-text="Specialised Care">
            Specialised Care{" "}
          </div>
          <span className="text divider"> ● </span>
          <div className="text" data-text="Care Service">
            Health, Safety, and Well-being{" "}
          </div>
          <span className="text divider"> ● </span>
        </div>
        <div className="marquee-group">
          <div className="text" data-text="Specialised Care Services">
            Specialised Care Services{" "}
          </div>
          <span className="text divider"> ● </span>
          <div className="text" data-text="Specialised Care">
            Specialised Care{" "}
          </div>
          <span className="text divider"> ● </span>
          <div className="text" data-text="Care Services">
            Care Service{" "}
          </div>
          <span className="text divider"> ● </span>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
