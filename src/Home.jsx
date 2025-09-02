import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header>
        <div className="logo">🏗️ MSMR Construction</div>
        <nav className="nav-links" id="navLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Service</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content" data-aos="fade-up">
          <h1>
            Building <span className="highlight">Foundations</span>
            <br />
            For <span className="highlight-alt">Future</span>
          </h1>
          <p>We shape concrete into dreams.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-image" data-aos="fade-right">
          <img src="Images/about-img.jpg" alt="MSMR Construction" />
        </div>
        <div className="about-content" data-aos="zoom-in">
          <h2>About Us</h2>
          <p>
            At MSMR Construction, we don’t just build structures — we build
            trust, relationships, and a better tomorrow. With years of
            expertise...
          </p>
          <p>
            Our mission is to blend innovation, precision engineering, and
            sustainable practices...
          </p>
          <p>
            Backed by a team of experienced engineers, visionary architects,
            skilled craftsmen...
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <h2 data-aos="fade-right">Our Projects</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item" data-aos="fade-right">
            <img src="Images/project1.jpg" alt="Residential Building" />
            <div className="overlay">
              <h3>Residential Complex</h3>
            </div>
          </div>

          <div className="portfolio-item" data-aos="fade-down">
            <img src="Images/project2.jpg" alt="Commercial Tower" />
            <div className="overlay">
              <h3>Commercial Tower</h3>
            </div>
          </div>

          <div className="portfolio-item" data-aos="fade-left">
            <img src="Images/project3.jpg" alt="Industrial Site" />
            <div className="overlay">
              <h3>Industrial Facility</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="service-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card" data-aos="fade-right">
            <div className="circle">🏗️</div>
            <h3>Building Construction</h3>
            <p>
              We provide top-quality building construction services for
              residential and commercial projects.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up">
            <div className="circle">🛠️</div>
            <h3>Renovation</h3>
            <p>
              Transform your existing space with our expert renovation and
              remodeling solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact Us</h2>
        <div className="contact-section" data-aos="fade-right">
          <p>
            23, Main VM road, <br />
            K.K.Nagar, <br />
            Madurai-04 <br />
            📩 Gmail: msmr123@gail.com <br />
            📞 ph: 9873627272
          </p>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MSMR Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="foot">
          <a href="https://facebook.com">
            <img src="Images/fb.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com">
            <img src="Images/insta.png" alt="Instagram" />
          </a>
          <a href="https://youtube.com">
            <img src="Images/youtube.png" alt="YouTube" />
          </a>
        </div>
        <p>2025 MSMR Construction. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
