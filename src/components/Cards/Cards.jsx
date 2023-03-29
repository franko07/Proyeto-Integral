import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return <div className={style.divCards}>
      {characters.map((char) =>(
         <Card
         id = {char.id}
         name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}/>
      ))}
   </div>;
}
