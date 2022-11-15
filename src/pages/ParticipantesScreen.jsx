import React, { useEffect, useState } from 'react'
// import { Participantes } from "../models/Participantes";
import Card from "../components/Card.jsx";

const ListaParticipantes = ({ history }) => {
    const handleRegistro = () => {
        history.push("/registro")
    }

    var participantes = []
    participantes = JSON.parse(localStorage.getItem('participantes'))
    if (participantes != null) {
        const participante = participantes.filter(el => el != null)

        return (
            <div className="container mt-5">
                <div>
                    <button className="btn btn-primary" onClick={handleRegistro}>Agregar</button>
                </div>
                <hr />
                <div>
                    {participante.map((par) => (
                        <Card key={par.id} {...par} />
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="container mt-5">
                <div>
                    <button className="btn btn-primary" onClick={handleRegistro}>Agregar</button>
                </div>
                <hr />
                <div className="row">
                    <h1>No hay participantes</h1>
                </div>
            </div>
        )
    }
}

export default ListaParticipantes
