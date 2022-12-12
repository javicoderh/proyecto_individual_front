import React from "react";
import { BrowserRouter, HashRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import Index from "../index/Index";
import CrearCurso from "../controladoresCursos/CrearCurso";
import EditarCurso from "../controladoresCursos/EditarCurso";
import IndexMain from "../index/indexMain";


function Router() {

return (
<HashRouter>
 <Routes> 
  <Route path="/" element={<Index />}/>
  <Route path="/index" element={<IndexMain />}/>
  <Route path="/inicio" element={<header className="App-header"><h1 className="titulo">Cursimple</h1><Link to ="/"><button className="entrar"></button></Link></header>} />
  <Route path="/crear" element={<CrearCurso />}/>
  <Route path="/editar" element={<EditarCurso />}/>
 </Routes>
</HashRouter>
) 
}

export default Router