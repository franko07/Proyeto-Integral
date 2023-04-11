import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/about/About'
import Detail from "./components/detail/Detail"
import {Routes, Route } from 'react-router-dom'



function App () {
  const [characters,setCharacters] = useState([])
//   const example = {
//     name: 'Morty Smith',
//     species: 'Human',
//     gender: 'Male',
//     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//  };

 function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
    }
    const onClose =(id)=>{
      const filtered = characters.filter((char) => char.id !== Number(id))
      setCharacters(filtered)
     }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose}/>           
    <Routes>
    <Route path='About' element={<About/>}/>
    <Route path='Cards' element={<Cards/>}/>
    <Route path='Detail' element={<Detail/>}/>
  </Routes>
    </div>
  )
}

export default App
