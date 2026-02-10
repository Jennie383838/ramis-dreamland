import "./about.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-box">
        {/* EVERYTHING YOU ALREADY HAVE GOES INSIDE HERE */}

        <h1>About Rami’s Dreamland ✨</h1>

        <p>
          Rami’s Dreamland is a trusted K-pop marketplace built by fans, for fans.
          Our goal is to provide a safe, friendly, and welcoming space where
          collectors and stans can confidently buy, sell, and trade authentic
          K-pop merchandise. We believe fandoms should feel like home —
          supportive, transparent, and fun. Every listing, trade, and
          interaction is built on trust and love for K-pop culture.
        </p>

        <h3>What We Offer</h3>
        <ul>
          <li>100% authentic K-pop albums & photocards</li>
          <li>Buy / sell / Trade services</li>
          <li>Concert updates & exclusive fan photos</li>
          <li>Community-driven announcements and events</li>
        </ul>

        <h3>Our Team</h3>
        <p><strong>Owner:</strong> @Ruka_Forever</p>
        <p><strong>Co-Owner:</strong> @gabbysyj</p>
        <p><strong>Rules Manager:</strong> @xavierkoh1</p>
        <p><strong>Sales Support:</strong> @Rin_yujinsbangs</p>

        <h3>Meetups</h3>
        <p>
          Offline meetups are available in the <strong>North</strong> and{" "}
          <strong>West</strong> regions. These meetups allow safe and friendly
          exchanges between members and help strengthen our community offline.
        </p>

        <div className="about-spacer" />

        <a
          href="https://t.me/Ruka1111"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link"
        >
          Join Our Telegram Channel 💬
        </a>
      </div>
    </div>
  );
}
