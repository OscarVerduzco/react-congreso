import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Participantes } from "../models/Participantes";
import Card from "../components/Card.jsx";


const RegistroScreen = ({ history }) => {

    var arreglo=[]
    var consulta=JSON.parse(localStorage.getItem('participantes'))
    if (consulta==null) {
        arreglo.push(consulta)
    }else{
        
    arreglo=consulta
    }


    const [participantes, setParticipantes] = useState({nombre: "", apellidos: "", email: "", twitter: "", img : 0});

    const { nombre, apellidos, email, twitter } = participantes

    const [checked, setChecked] = React.useState(true);

    const [img, setImg] = useState(0);





    // Definimos la función handleChange
    const handleChange = (e) => {
        e.preventDefault();
        setParticipantes({
            ...participantes,
            [e.target.name]: e.target.value,
        })
    }

    const actionAdd = {
        id: uuid(),
        nombre,
        apellidos,
        email,
        twitter,
        img
    }
    const handleClick = () => {

        if (nombre && apellidos && email && twitter) {
            arreglo.push(actionAdd)
            localStorage.setItem("participantes", JSON.stringify(arreglo))
            setParticipantes( {
                nombre: "",
                apellidos: "",
                email: "",
                twitter: "",
                img: ""
            });
            handleLista()
        }else {
            alert('Debes completar todos los campos');
          }
    }

    const handleLista = () => {
        history.push("/listaparticipantes")
    }

    return (
        <div className="container">
            <form>

                <h1>Registro de participante</h1>
                <hr />
                <label className="mx-1 d-grid gap-2">
                    Nombre: {" "}
                    <input onChange={handleChange}
                        name="nombre"
                        value={nombre}
                        type="text"
                        required
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
                        required
                        className="form-control"
                        autoComplete="off" />
                </label>
                <label className="mx-1 d-grid gap-2">
                    Twitter: {" "}
                    <input onChange={handleChange}
                        name="twitter"
                        value={twitter}
                        type="text"
                        required
                        className="form-control"
                        autoComplete="off" />
                </label>
                <label className="mx-1 d-grid gap-2">
                    Email: {" "}
                    <input
                        onChange={handleChange}
                        name="email"
                        value={email}
                        type="mail"
                        required
                        className="form-control"
                        autoComplete="off" />
                </label>
                <br />
                <div className="row">
                    <div className="col col-md-4">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"                                
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                onChange={() => setImg("https://cdn-icons-png.flaticon.com/512/3135/3135715.png")}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                <img height={100} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" />
                            </label>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                onChange={() => setImg("https://cdn-icons-png.flaticon.com/512/206/206881.png")}

                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                <img  height={100} src="https://cdn-icons-png.flaticon.com/512/206/206881.png" alt="profile" />
                            </label>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                                onChange={() => setImg("https://www.pikpng.com/pngl/b/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png")}

                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                <img  height={100} src="https://www.pikpng.com/pngl/b/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png" alt="profile" />
                            </label>
                        </div>
                    </div>
                </div>
                
                

                <br />
                <div className="form-check ">
                    <input className="form-check-input" required type="checkbox" onChange={()=> setChecked(true)} value="" id="flexCheckDefault" />
                    <label className="form-check-label mx-1 d-grid gap-2" htmlFor="flexCheckDefault">
                        Acepto los terminos y condiciones
                    </label>
                </div>
                <br />

                <div className="mx-1 d-grid gap-2">
                    <button onClick={handleClick} className="btn btn-success mt-2">Guardar</button>
                </div>
            </form>
        </div>
    );
};
export default RegistroScreen;
