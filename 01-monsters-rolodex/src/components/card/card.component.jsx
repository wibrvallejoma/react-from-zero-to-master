import { Component } from "react";

import './card.styles.css'
class Card extends Component {

  render() {
    const { id, alt, src, title, subtitle } = this.props;

    return (
      <div className="card-container" key={id}>
        <img
          alt={alt}
          src={src}
        />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    )
  }
}

export default Card;