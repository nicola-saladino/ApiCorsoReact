import { useEffect, useState } from "react";

function Lista(props) {

    const [listaInner, setListaInner] = useState(props.lista);

    useEffect(() => {
        
        setListaInner(props.lista);

    });

    const eliminaElemento = (index) => {

        let removedLista = listaInner.splice(index, 1);

        setListaInner(removedLista);

    }

    return (
        
        <>
        
            <ul>

                {

                    listaInner.map((elemento, index) => {

                        return(

                            <li key={index} onClick={() => { eliminaElemento(index) }} style={{cursor: 'pointer'}}>{elemento}</li>

                        )

                    })

                }

            </ul>

        </>

    )
}

export default Lista