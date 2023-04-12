import { useCollection } from 'payload/hooks';
import { Type as PortfolioType } from '../collections/Portfolio';

export default function Home() {
  const { data: portfolio, isLoading, error } = useCollection<PortfolioType>({
    collection: 'portfolio',
    // Add any additional query params here, such as { limit: 10 } to limit the number of documents returned
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Portfolio</h1>
      {portfolio.map((item) => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.image.src} alt={item.image.alt} />
        </div>
      ))}
    </div>
  );
}
