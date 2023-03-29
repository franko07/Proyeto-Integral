import style from "./Search.module.css"

export default function SearchBar(props) {
   return (
      <div>
         <input className={style.imput} type='search' />
      <button className={style.Boton} onClick={()=> props.onSearch("Se recibe un Id")}>Agregar</button>
      </div> 
   );
}
