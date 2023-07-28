import { Link } from "react-router-dom";
import "./hero-section.css";
import { apple, espirit, heroImg, nb, nike } from "../../assets";

const HeroSection = () => {
  return (
    <section className="home_hero-section">
      <div className="hero_section-container">
        <h2 className="hero_section-intro">
          For Your <span className="hero_section-intro-span">Health</span>
          <br /> and{" "}
          <span className="hero_section-intro-span">Fitness Goals</span>
          <br /> in No Time
        </h2>

        <p className="hero_section-welcome">
          Whether your goal is to lose weight, stay fit, or get stronger, this
          is the right place for you to set and track your fitness goals.
        </p>

        <Link className="hero_section-get-started" to="/">
          Get started
        </Link>

        <div className="hero_section-endorsed">
          <p className="endorsed_by-title">Endorsed by: </p>
          <div className="endorsed_by-img-container">
            <img src={nike} alt="nike" className="endorsed_brand" />
            <img src={apple} alt="apple" className="endorsed_brand" />
            <img src={espirit} alt="espirit" className="endorsed_brand" />
            <img src={nb} alt="nb" className="endorsed_brand" />
          </div>
        </div>
      </div>

      <img src={heroImg} alt="hero-section-img" className="hero_section-img" />
    </section>
  );
};

export default HeroSection;
