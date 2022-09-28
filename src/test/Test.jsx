import { Email } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import { testContext } from "./GenericContext"

export default function Test() {
    function handleClick(e) {
        //console.log(e);
    }
    
    function handleResize(e) {
        //RESIZE - Cuando la ventana se agrande o se achique
        alert(JSON.stringify(e))
    }

/*     function handleKeyDown(e) {
        console.log(e);
        //e.preventDefault(); //Lo que iba a ocurrir por defecto lo bloqueo.Ej: Cuando la recarga la pagina por el envio de un formulario
    } */

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            Window.removeEventListener("resize", handleResize)
        };
    }, [])


    const [email, setEmail] = useState("");

    const { color, setColor } = useContext(testContext);
    return (
        <>
            <div onClick={handleClick} style={{ backgroundColor: color, border: "1px solid red", margin: "20px", padding: "20px" }}>
                Test
                <input onClick={handleClick} type={Email} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Ingrese su Email"} />
                <br />
                <button>Enviar</button>
                <button onClick={() => {
                    setColor("#6FA2DA");
                }}
                >
                    Cambiando el BackGround del Test</button>
            </div>

        </>
    )
}
