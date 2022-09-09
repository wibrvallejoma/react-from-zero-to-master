import './card.styles.css'

const Card = ({ id, alt, src, title, subtitle }) => {
  return (
    <div className="card-container" key={id}>
      <img
        alt={alt}
        src={src}
      />
      <h2 className="card-title">{title}</h2>
      <h3 className="card-title">{subtitle}</h3>
    </div>
  )
};

export default Card;