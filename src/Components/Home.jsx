/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/isaac2-profile.jpg";

const imageAltText = "A man sitting outdoors in a lush green forest environment, holding a stylish and modern laptop and preparing to type on it while surrounded by the beauty of nature and the integration of technology into the environments natural.";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div className="name" style={{}}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="div-link" style={{  }}>
        <a href="#about">
          <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
          </a>
        
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
