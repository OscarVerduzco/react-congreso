import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const NavBar = () => {
    //Definimos el history usando el hook useHistory
    const history = useHistory();

    const handleLogout = () =>{
        history.replace("/login")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                    <img src="assets/Tics.png" width="5%" height="5%" alt="animacion" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-auto mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/inicio">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/listaparticipantes">Participantes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/registro">Registro</NavLink>
                        </li>
                    </ul>
                    <div>
                    <img align="right" src="assets/utl.png" width="15%" height="15%" alt="animacion" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
