import React, { useEffect } from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../../components/PortfolioItem';
import "./portfolio.css"

function Portfolio() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
    }, 0);
  }, [])

  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>PortFolio</span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />
        })}
      </div>
    </section>
  );
}

export default Portfolio