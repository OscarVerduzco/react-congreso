import React from 'react'
import { Participantes } from '../models/Participantes'
import Card from '../components/Card'

export const MensScreen = () => {
    // Obtenemos los personajes

    const mens = Participantes.filter((character) => character.type === "h")
    return (
        <div className="container mt-5">
            <h1>Mens</h1>
            <hr />

            <div className="row">
                
            {
                mens.map((men) => (
                    <Card key={men.id} {...men}/>
                ))
            }
            
            </div>
        </div>
    )
}
