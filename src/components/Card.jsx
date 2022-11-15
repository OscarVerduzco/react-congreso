import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({nombre,apellidos, twitter, email,id, img}) => {
   
    

    return (
        <div className="card m-4 col-12 col-md-4" style={{width: 400}}>
            {(img) ? <img src={img} className="card-img-top" alt="..." /> : <img src="https://muskersbroughtonhall.com.au/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg" className="card-img-top" alt="..." />}
            <div className="card-body">
                <h3 className="card-title">{nombre} {apellidos}</h3>
                <p className="card-text">
                    <strong>Twitter: </strong><a href={`https://twitter.com/@${twitter}`}>{twitter}</a>                
                   
                    <br />
                    <Link className="card-link" to={`/modificarScreen/${id}`}>
                        Modificar
                    </Link>
                    <h4>{email}</h4>
                </p>
            </div>
        </div>
    )
}

export default Card
