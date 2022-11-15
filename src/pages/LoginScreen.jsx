import React from 'react'

const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.push("/listaparticipantes")
    }

    return (
        <div className="container mt-5 text-center">
            <div className="row">
                <div className="col-6">
                    <img src="assets/utl.png" width="85%" height="80%" alt="animacion" />
                    <h1 className="my-3">Congreso de Tecnologías de la Información</h1>
                    <button className="btn btn-primary" onClick={handleLogin}>Entrar</button>
                </div>
                <div className="col-6">
                    <img src="assets/Tics.png" alt="animacion" />
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
