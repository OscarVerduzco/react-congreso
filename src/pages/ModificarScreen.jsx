import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useLocation,useParams } from "react-router";

const ModificarScreen = ({ history }) => {

    const { id } = useParams();
console.log(id);
var local =[];

local = JSON.parse(localStorage.getItem('participantes'));
// var p;
const participante = local.filter(el => el != null)
const p = participante.find((p) => p.id === id)
// console.log(p);

const [data, setData] = useState({ nombre: p.nombre, apellidos: p.apellidos, email: p.email, twitter: p.twitter });
  
    const { nombre, apellidos, email, twitter } = data;

   //Definimos la funcion handleChange //uso el metodo de abajao para agregar los valores
   const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    //invocamos el dispatch, todos los dispatch van a tener referencia directa con el reducer a ejecutar, debemos pasarle un action
    if (nombre && apellidos && email && twitter) {
      
      p.nombre = data.nombre;
      p.apellidos = data.apellidos;
      p.email = data.email;
      p.twitter = data.twitter;
      
      localStorage.setItem("participantes", JSON.stringify(local));
      setData({ nombre: "", apellidos: "", email: "", twitter: "" });
      handleLista()
    } else {
      alert('Debes completar todos los campos');
    }

  };


    const handleLista = () => {
        history.push("/listaparticipantes")
    }

    return (
        <div className="container">
            <h1>Modificar de participante</h1>
            <hr />
            <label className="mx-1 d-grid gap-2">
                Nombre: {" "}
                <input onChange={handleChange}
                    name="nombre"
                    value={nombre}
                    type="text"
                    className="form-control"
                    autoComplete="off" />
            </label>
            <label className="mx-1 d-grid gap-2">
                Apellidos: {" "}
                <input
                    onChange={handleChange}
                    name="apellidos"
                    value={apellidos}
                    type="text"
                    className="form-control"
                    autoComplete="off" />
            </label>
            <label className="mx-1 d-grid gap-2">
                Twitter: {" "}
                <input onChange={handleChange}
                    name="twitter"
                    value={twitter}
                    type="text"
                    className="form-control"
                    autoComplete="off" />
            </label>
            <label className="mx-1 d-grid gap-2">
                Email: {" "}
                <input
                    onChange={handleChange}
                    name="email"
                    value={email}
                    type="text"
                    className="form-control"
                    autoComplete="off" />
            </label>

            {/* Check box to accept terms and conditions */}
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Acepto los terminos y condiciones
                </label>
            </div>

            {/* <label className="mx-1 d-grid gap-2">
                <input type="checkbox"  
                />
                Lei y acepto los terminos y condiciones
            </label> */}
            <div className="mx-1 d-grid gap-2">
                <button onClick={handleClick} className="btn btn-success mt-2">Guardar</button>
            </div>
        </div>
    );
};

export default ModificarScreen;