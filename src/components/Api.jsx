import React, { useEffect, useState } from 'react';

function Api() {
    const [apiData, setApiData] = useState();
    const[btn,setBtn]= useState();



    const api = async () => {
        if (!sessionStorage.getItem('api_response')) {
            
       
        const response = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-04-01&endtime=2023-04-11&minmagnitude=3');
        
        const json = await response.json();
        sessionStorage.setItem('api_response', JSON.stringify(json));
        setApiData(json);

         }else{
            setApiData(JSON.parse(sessionStorage.getItem('api_response')))
         }
        
    }


   
    useEffect(() => {
        if (btn) {
          api();  
        }
        
    },[btn])
    return (
        <div>
            <button onClick={() =>{(btn === false) ? setBtn(true): setBtn(false)}}>Mostra terremoti</button>
            {apiData && (
                <div>{
                    apiData.features.map((feature, index) =>{
                        return(
                            <div key={index}>
                                <p>Place: {feature.properties.place}</p>
                                <p>Magnitude: {feature.properties.mag}</p>

                                {
                                    feature.geometry.coordinates.map((geometry, index) =>{
                                        return(
                                            <div key={index}>
                                                <p>lat: {geometry}</p>
                                              
                                                </div>

                                        )
                                    })
                                }
                                
                            </div>
                        );

                       
                    })}

                   
                    
                </div>
            )}
        </div>
    );
}

export default Api;
