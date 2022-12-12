import React, { Component} from "react";
import axios from "axios";
import { BrowserRouter, HashRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Formik, Field, Form } from 'formik';


const api = axios.create({
baseURL: `http://localhost:5000/cursos`
})

class CrearCurso extends Component {    
 
 constructor(props) {
   super(props);
   this.view = {view: "descripcionCurso"}       
 }
 
 crearCurso = async (e) => {
  console.log(e)
  console.log(e.name)

  let res = await api.post('/', { nombre: e.nombre, descripcion: e.descripcion, img: e.img })
  console.log(res)
 }


enviarCurso = async () => {
 let res = await api.post('/', { nombre: "", descripción: "", img: ""})
}
 
 render() {
  const {nombre, descripcion, img, onChange, onSubmit, form} = this.props  
  return (
  <header className="App-header"> 
  <h1 className="titulo">Cursimple</h1>      
  <Formik
    initialValues={{
      nombre: '',
      descripcion: '',
      img: '',
    }}
    onSubmit={async (values, {resetForm}) => {                
      if (!values.nombre) {
      alert("debes ingresar un nombre")
      }
      else if (!values.descripcion) {
      alert("debes escribir una descripción")
      }
      else if(!values.img) {
      alert("debes escribir una url de imagen")
      }
      else {
      resetForm();
      this.crearCurso(values);
      alert("¡Curso creado!")
      }        
      }}
    >
    <Form className="Crear">
      <label htmlFor="nombre">nombre</label>
      <Field 
      id="nombre"
      name="nombre"
      type="text"
      maxLength={30}
      placeholder="Ingresa el nombre del curso..." />
      <label htmlFor="descripcion">descripcion</label>
      <Field  
      id="descripcion" 
      name="descripcion"
      type="text"
      maxLength={300} 
      placeholder="Escribe una breve descripción..." />
      <label htmlFor="img">Imagen</label>
      <Field
        id="img"
        name="img"
        maxLength={300}
        placeholder="Ingresa una URL de imagen"        
      />
      <button className="crearCursoDown" type="submit">Crear</button>
    </Form>
  </Formik>    
  <Link to="/"><button  className="cerrar">↑</button></Link>          
  </header>   
);
}
} 
export default CrearCurso

