import React from "react";
import Card from "../Components/Card/Card";
import menWatch from "../assets/MenWatch.webp";
import WomenWatch from "../assets/WomenWatch.webp";
import SmartWatch from "../assets/SmartWatch.webp";
import CoupleWatch from "../assets/CoupleWatch.webp";
import ReviewsCard from "../Components/ReviewsCard/ReviewsCard";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <header style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        <h1>TimeVerse</h1>
        <p>
          Welcome to TimeVerse, your ultimate destination for premium and
          stylish watches. We believe a watch is more than just a timepiece —
          it’s a reflection of your personality, elegance, and lifestyle. Our
          collection features modern, classic, and luxury designs crafted to
          perfection, ensuring you always make a statement wherever you go.
        </p>
        <p>
          Whether you’re looking for a sleek digital watch, a bold chronograph,
          or a timeless leather piece, TimeVerse offers quality, durability, and
          unmatched style — all at the best prices. Explore our exclusive range
          and find the perfect watch that defines your time, your style.
        </p>
      </header>

      <section style={{ textAlign: "center", margin: "40px 0" }}>
        <h2>Find Your Perfect Watch</h2>
        <h4>
          <i>Premium collection for Men, Women & Smart Tech Lovers</i>
        </h4>

        <div
          className="cards-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Card
            Image={menWatch}
            Name="Aristos Watch"
            Description="Aristos Watch – classic style with modern precision, crafted to elevate every moment."
          />
          <Card
            Image={WomenWatch}
            Name="Lilly"
            Description="Lilly Watch – elegant, timeless, and made to shine with every look."
          />
          <Card
            Image={SmartWatch}
            Name="Maxfit Smartwatch"
            Description="Maxfit Smartwatch – smart, stylish, and built to keep you active and connected all day."
          />
          <Card
            Image={CoupleWatch}
            Name="Royce"
            Description="Royce – a stylish and elegant watch crafted for timeless sophistication."
          />
        </div>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        <h2>About Us</h2>
        <p>
          At TimeVerse, we believe that a watch is not just an accessory — it’s
          a symbol of individuality, elegance, and ambition. Every tick of a
          watch represents a moment in your journey, and we’re here to make each
          one count with designs that speak of class and precision. We offer
          premium quality watches that combine timeless craftsmanship with
          modern innovation. Whether it’s the bold sophistication of our men’s
          collection, the graceful charm of our women’s watches, or the advanced
          features of our smartwatches, each piece is designed to deliver
          excellence in both style and performance.
        </p>
        <p>
          Our watches are crafted from high-grade materials and undergo strict
          quality checks to ensure durability, comfort, and perfection in every
          detail. From sleek stainless steel bodies to scratch-resistant glass
          and long-lasting battery performance — every feature reflects our
          promise of quality. At TimeVerse, we’re committed to providing the
          latest designs at the best prices so you can experience luxury without
          compromise. We constantly update our collection to match global trends
          while keeping our products affordable for every customer.
        </p>
        <p>
          We believe that a great watch doesn’t just tell time — it tells your
          story. With TimeVerse on your wrist, you carry confidence, class, and
          creativity everywhere you go.
        </p>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        <h2>What Our Customers Say</h2>
        <div
          className="reviews-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <ReviewsCard
            Name="Emma Collins"
            Reviews="Absolutely love my new watch! The design is stunning and feels so premium. Totally worth it!"
            rating={5}
          />
          <ReviewsCard
            Name="James Parker"
            Reviews="Great quality and fast delivery. The watch looks even better in person — highly recommend!"
            rating={4}
          />
          <ReviewsCard
            Name="Olivia Reed"
            Reviews="Elegant, classy, and comfortable to wear. TimeVerse really knows how to blend style with quality."
            rating={5}
          />
          <ReviewsCard
            Name="Daniel Cooper"
            Reviews="The watch looks good, but the strap could’ve been a bit more comfortable. Overall, decent for the price."
            rating={3}
          />
          <ReviewsCard
            Name="Sarah Mitchell"
            Reviews="Nice design and build quality, though delivery took a little longer than expected."
            rating={4}
          />
          <ReviewsCard
            Name="Ethan Brooks"
            Reviews="Good watch for everyday use. Not too fancy, but works well and looks fine on the wrist."
            rating={4}
          />
        </div>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        <h2>Real Stories, Real Style</h2>
        <p>
          Discover how TimeVerse watches are making every moment special. Each
          of our timepieces is crafted with precision, blending timeless
          elegance with modern design. From classic leather straps to sleek
          digital faces, our collection caters to every personality and
          lifestyle, helping our customers express themselves through style.Our
          customers don’t just wear watches — they carry memories, milestones,
          and moments of confidence. Every story we hear reflects how a
          TimeVerse watch adds a touch of sophistication and uniqueness to daily
          life. Whether it’s for a formal occasion, a casual outing, or a
          tech-savvy lifestyle, our watches fit seamlessly into every moment.
        </p>
        <p>
          From men and women seeking elegance to tech enthusiasts embracing
          smart features, TimeVerse has become a trusted choice. Our customers
          appreciate the quality, durability, and design that make each watch a
          perfect companion. Hearing their experiences inspires us to keep
          innovating and designing watches that truly resonate with modern
          lifestyles.Join the growing community of satisfied TimeVerse customers
          and discover your perfect watch today. Explore our collection and
          experience style, precision, and confidence — because every moment
          deserves to be remembered with elegance.
        </p>
      </section>

      {/* Google Map Section */}
      <section style={{ textAlign: "center", margin: "40px 0" }}>
        <h2>Our Location</h2>
        <iframe
          title="New York Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193572.13234548696!2d-74.1180864340451!3d40.70582539735459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b0e9fa6f3f%3A0x7de4b1c5f76d0d1c!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1697430000000!5m2!1sen!2s"
          width="80%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
}
