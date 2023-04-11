import { useState } from "react";
import style from "./Search.module.css"

export default function SearchBar(props) {
   const [character, setCharacter] = useState("")
   const handleInputChange = (event) => {
      const {value} = event.target 
      setCharacter(value)
   }
   return (
      <div>
         <input className={style.imput} type='search' onChange={handleInputChange} />
      <button className={style.Boton} onClick={()=> props.onSearch(character)}>Agregar</button>
      </div> 
   );
}
