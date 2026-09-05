import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./home.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from '../../data';

function Home() {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let loadedImages = 0;

    images.forEach(img => {
      const image = new Image();
      image.src = img.original;

      image.onload = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          setIsLoading(false);
        }
      };
    });
  }, []);


  const slides = images.map(img => ({
    src: img.original,
    alt: img.description || "Portfolio Gallery Image"
  }));

  return (
    <section className="home section grid">
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="gallery-preview-container">
          <img
            src={images[0]?.original}
            alt="View Gallery"
            className="gallery-preview-img"
            onClick={() => { setIndex(0); setIsOpen(true); }}
            style={{ cursor: 'pointer', maxWidth: '100%', borderRadius: '8px' }}
          />

          <Lightbox
            index={index}
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={slides}
          />
        </div>
      )}

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Sai Sandeep Koritala.</span><br />Passionate Full Stack Developer.
          </h1>

          <p className="home__description">
            I am deeply passionate about full stack development, driven by its robustness
            and versatility in building scalable and high-performance applications.
            I thrive on solving complex problems and optimizing code, leveraging
            powerful features to deliver innovative solutions.
          </p>

          <div className="home__buttons"> 
            <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
          </div>

        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}

export default Home;


 
 