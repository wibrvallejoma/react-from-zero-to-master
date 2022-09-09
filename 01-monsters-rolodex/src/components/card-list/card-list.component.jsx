import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({ monsters }) => {
  // If a function component does not have a return,variables or other functions, It will do an implicit return.
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
};

export default CardList;