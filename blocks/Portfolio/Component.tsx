import Portfolio, { PortfolioType } from '../../collections/Portfolio';
import React from 'react';

async function getPortfolioData(): Promise<PortfolioType> {
   res = await fetch(`https://localhost:3000/api/${Portfolio}`);
  return res.json();
}

export default async function PortfolioItems() {

  const PortfolioData = await getPortfolioData();

    <div>
      <h1>Portfolio</h1>
      {Portfolio.map((item) => (
        <div key={item._id}>
          <h2>{item.make} {item.model} ({item.year})</h2>
          <p>{item.description}</p>
          <img src={`${NEXT_PUBLIC_SERVER_URL}/media/${item.image.filename}`} alt={item.image.alt} />
        </div>
      ))}
    </div>
  );
};
