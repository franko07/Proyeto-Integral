import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return (<div className={style.divCards}>
      {characters.map(({id,name,species,gender,image}) =>(
         <Card
         key = {id}
         name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => props.onclose()}/>
      ))}
   </div>
   )
}
