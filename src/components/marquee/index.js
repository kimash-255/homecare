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
                    <div className="text" data-text="Senior Care Service">Senior Care Service </div>
                    <span className="text divider"> ● </span>
                    <div className="text" data-text="Senior Care">Senior Care </div>
                    <span className="text divider"> ● </span>
                    <div className="text" data-text="Care Service">Care Service </div>
                    <span className="text divider"> ● </span>
                </div>
                <div className="marquee-group">
                    <div className="text" data-text="Senior Care Services">Senior Care Services </div>
                    <span className="text divider"> ● </span>
                    <div className="text" data-text="Senior Care">Senior Care </div>
                    <span className="text divider"> ● </span>
                    <div className="text" data-text="Care Services">Care Service </div>
                    <span className="text divider"> ● </span>
                </div>
            </div>
        </section>
    );
};

export default Marquee;
