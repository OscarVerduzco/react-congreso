import React,{useReducer,useEffect} from 'react'
import { Route, Switch } from 'react-router'
import NavBar from '../components/NavBar'
import { MensScreen } from '../pages/MensScreen'
import RegistroScreen from '../pages/RegistroScreen'
import ParticipantesScreen from '../pages/ParticipantesScreen'
import ModificarScreen from '../pages/ModificarScreen'
import LoginScreen from '../pages/LoginScreen'


const AppRouter = () => {
    
    return (
        <>
            <NavBar></NavBar>
            <Switch>
                <Route exact path="/" component={LoginScreen}/>
                <Route exact path="/inicio" component={LoginScreen}/>
                <Route exact path="/listaparticipantes" component={ParticipantesScreen} />
                <Route exact path="/registro" component={RegistroScreen}/>
                <Route exact path="/modificarScreen/:id" component={ModificarScreen}/>
            </Switch>
        </>
    )
}

export default AppRouter
