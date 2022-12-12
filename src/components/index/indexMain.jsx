import React from "react";
import axios from "axios";
import { BrowserRouter, HashRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";

const api = axios.create({
baseURL: `http://localhost:5000/cursos`
})

export default function IndexMain() {     

const [ state, setState] = useState({
  cursos: []
})

const [view, setView] = useState(false)

const getCourses = async () => {
let data = await api.get('/').then(res =>{
    console.log(res.data)
    setState({ cursos: res.data})
  })
}

const createCourse = async () => {
let res = await api.post('/', { nombre: "Test", descripcion: 'testeando la creación de cursos', img: 'https://previews.123rf.com/images/keviz/keviz1706/keviz170600074/79886816-aplicaci%C3%B3n-de-logotipo-de-flor-de-loto.jpg' })
console.log(res)
}

const deleteCourse = async (id) => {
  let data = await api.delete(`/${id}`)
  getCourses();
}     
return (
<header className="App-header">
<h1 className="titulo">Cursimple</h1>   
<button className="verCursos" onClick={getCourses}>Ver cursos</button>     
<div className='contenedorCursos'>
  {state.cursos.map(curso =>     
  <div className='contenedorCurso' onClick={() => setView(!view)}>
  <h5 className="idCurso">id:{curso.id}</h5>
  <img className='imagenCurso' src={curso.img} height="100" width="150"></img>   
  <h2 className='cursoNombre' key={curso.id}>{curso.nombre}
  {view &&  <h4 className="cursoDescripcion">{curso.descripcion}</h4>}    
  <button className='borrarCurso' onClick={() =>deleteCourse(curso.id)}>Eliminar curso</button>
  </h2>
  </div>  
  )}  
</div>  
<Link to="/crear"><button className="crearCurso">Crear curso</button></Link>
<Link to="/editar"><button className="crearCurso">Editar curso</button></Link>
<Link to="/inicio"><button className="cerrarUp">↑</button></Link>        
</header>   
);
}


