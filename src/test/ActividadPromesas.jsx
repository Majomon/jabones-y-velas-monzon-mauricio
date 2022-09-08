import React, { useState, useEffect } from 'react'

export default function ActividadPromesas() {
    const [loading, setloading] = useState(true);
    const [productos, setproductos] = useState([]);
    const [error, seterror] = useState("");


    useEffect(() => {
        let promesaProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res([{ id: 1, name: "Jabon1", description: "Jabon Artesanal", stock: 10 },
                { id: 2, name: "Jabon2", description: "Jabon Artesanal", stock: 10 },
                { id: 3, name: "Jabon3", description: "Jabon Artesanal", stock: 10 },
                { id: 4, name: "Jabon4", description: "Jabon Artesanal", stock: 10 }])
            }, 3000);
        })

        promesaProductos
            .then((res) => {
                setproductos(res)
            })
            //Si sale todo mal osea no se ejecuta la promesa hace esto
            .catch((err) => {
                /*             console.log(err); */
                seterror(err);
                setloading(false);
            })
            //Algo que hago independientemente si lo anterior sale bien o mal
            .finally(() => {
                setloading(false)
            });
    }, []);


    return <div>
        <p>Loading: {loading ? "..." : "Fin"}</p>
        <p>Error: {error ? error : null}</p>
        {productos.map((item) =>(
            <div>
                <p>ID: {item.id}</p>
                <p>Nombre: {item.name}</p>
                <p>Descripción: {item.description}</p>
                <p>Stock: {item.stock}</p>
            </div>
        ))}
    </div>

}

