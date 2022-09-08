import React, { useState, useEffect } from 'react'

export default function Promesas() {
    const [loading, setloading] = useState(true);
    const [pago, setpago] = useState(0);
    const [error, setError] = useState("");


    let pagara = new Promise((res, rej) => {
        setTimeout(() => {
            //res(50)
            rej("NO PAGO")
        }, 3000);
    })

    pagara
        //Cuando ocurra la promesa se ejecuta la linea de abajo
        .then((res) => {
            /*            if(res==50){
                        console.log("Genial, ya pago!!!");
                       } else if(res<50){
                        console.log("Pago menos de 50. Hacer las acciones acordes");
                       } else{
                        console.log("Ingresar el sobrante a la base de datos");
                       } */
            setpago(res);
            setloading(false);
        })
        //Si sale todo mal osea no se ejecuta la promesa hace esto
        .catch((err) => {
            /*             console.log(err); */
            setError(err);
            setloading(false);
        })
        //Algo que hago independientemente si lo anterior sale bien o mal
        .finally(()=>{
            setloading(false)
        });

    return <div>
        <p>Loading: {loading ? "..." : "Fin"}</p>
        <p>Pago: {pago ? pago : null}</p>
        <p>Error: {error ? error : null}</p>
    </div>


}
