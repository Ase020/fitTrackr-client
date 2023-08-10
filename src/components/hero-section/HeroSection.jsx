import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./hero-section.css";
import { apple, espirit, heroImg, nb, nike } from "../../assets";

// this is for the scroll functionality
const HeroSection = () => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollTop + windowHeight >= docHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <Link className="hero_section-get-started" to="/exercises">
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
      {!isBottom && (
        <div className="scroll-arrow-container">
          <svg className="arrows" viewBox="0 0 60 72">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default HeroSection;