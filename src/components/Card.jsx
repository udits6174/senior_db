import './card.css';

const Card = ({cardTag}) => {
  return (
    <div className="card">
      <h2 className="problem-name">{cardTag.title}</h2>
      <a href={cardTag.link} className="link">Go to problem</a>
      <div className="tags">
        {cardTag.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Card;
