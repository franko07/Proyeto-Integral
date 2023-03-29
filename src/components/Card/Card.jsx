import style from "./Card.module.css"



export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className={style.divPrinc}>
         <div className={style.tarj}>
            <button className={style.cerrar} onClick={onClose}>X</button>
            <img className={style.imgbx} src={image} alt="Not found" />
            <div className={style.content}>
               <div className={style.detail}>
                  <h2>{name}</h2>
                  <h2>{species}</h2>
                  <h2>{gender}</h2>
               </div>
            </div>
         </div>
      </div>
   );
}


