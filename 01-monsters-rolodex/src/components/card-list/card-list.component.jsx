import { Component } from "react";
import Card from "../card/card.component";

import './card-list.styles.css'
class CardList extends Component {

  render() {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <Card
              alt={`monster ${name}`}
              src={`https://robohash.org/${id}?set=set4&size=180x180`}
              title={name}
              subtitle={email}
            />
          )
        })}
      </div>
    )
  }
}

export default CardList;