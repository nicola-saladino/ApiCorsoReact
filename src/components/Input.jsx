import { useEffect, useState } from "react"
import Lista from "./Lista";


function Input() {

    const [valore, setValore] = useState('');

    const [lista, setLista] = useState([]);

    //AGGIUNGO ELEMENTI ALLA LISTA

    const aggiungoElemento = () => {

        setLista( [...lista, valore] );

        setValore( '' );

    }

    const svuotaElementi = () => {

        setLista([]);

    }

    return (
        
        <>

            <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <Lista lista={lista} />
            </li>
            </ul>


            <Lista lista={lista} />

            <br />
            
    <div className="row justify-content-center">
        <div className="col-md-8 mt-2 text-center">
            <input type="text" className="form-control" value={valore} onChange={(e) => { setValore( e.target.value ) }} />
        </div>
        <div className="col-md-2 mt-2 text-center">
            <button className="btn btn-primary w-100" onClick={aggiungoElemento}>Aggiungi</button>
        </div>
        <div className="col-md-2 mt-2 text-center">
            <button className="btn btn-secondary w-100" onClick={svuotaElementi}>Svuota</button>
        </div>
    </div>

        </>

    )

}

export default Input
