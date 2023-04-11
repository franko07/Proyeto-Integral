import style from "./Card.module.css"



export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className={style.divPrinc}>
         <div className={style.tarj}>
            <div className={style.BotonCerrar}>
               <button className={style.cerrar} onClick={onClose}>X</button>
            </div>
            <div className={style.imgbx}>
               <img  src={image} alt="Not found" />
               <h2 className={style.name}>{name}</h2>
            </div>
            <div className={style.containProp}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            </div>            
         </div>
      </div>
   );
}


