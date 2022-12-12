import React, { Component} from "react";
import axios from "axios";
import { BrowserRouter, HashRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Formik, Field, Form } from 'formik';


const api = axios.create({
baseURL: `http://localhost:5000/cursos`
})

class EditarCurso extends Component {    
constructor(props) {
super(props);
this.view = {view: "descripcionCurso"}       
} 
EditarCurso = async (e) => {
console.log(e)
console.log(e.name)

let data = await api.put(`/${e.id}`, {nombre: e.nombre, descripcion: e.descripcion, img: e.img})
} 
render() {
  const {nombre, descripcion, img, onChange, onSubmit, form} = this.props
  return (
  <header className="App-header"> 
  <h1 className="titulo">Cursimple</h1>      
  <Formik
      initialValues={{
        id: '',
        nombre: '',
        descripcion: '',
        img: '',
      }}
      onSubmit={async (values, {resetForm}) => {
        resetForm();
        this.EditarCurso(values);
        alert("¡Curso editado!")
      }}
    >
      <Form className="Crear">
      <label htmlFor="name">ID</label>
        <Field 
        id="id"
        name="id"
        type="number"
        placeholder="ingresa el ID del curso..." />
        <label htmlFor="name">nombre</label>
        <Field 
        id="name"
        name="nombre"
        type="text"
        placeholder="Ingresa el nombre del curso..." />
        <label htmlFor="descripcion">descripcion</label>
        <Field  
        id="descripcion" 
        name="descripcion"
        type="text"
        max 
        placeholder="Escribe una breve descripción..." />
        <label htmlFor="img">Imagen</label>
        <Field
          id="img"
          name="img"
          placeholder="Ingresa una URL de imagen"        
        />
        <button className="crearCursoDown" type="submit">Submit</button>
      </Form>
    </Formik>
  <Link to="/"><button  className="cerrar">↑</button></Link>          
  </header>   
  );
  }
} 
export default EditarCurso