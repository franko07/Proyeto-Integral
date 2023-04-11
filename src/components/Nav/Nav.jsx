import React  from "react";
import SearchBar from '../Search/SearchBar'
import style from "./Nav.module.css"


export default function Nav (props){
    return (
        <div className ={style.containerNav}>
          
        <SearchBar
          onSearch={(characterID) => props.onSearch(characterID)}
        />
      </div>
    )
}