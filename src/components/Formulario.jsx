import { useState } from "react";

function Formulario ({onGuardar}){
    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")


    const manejarSubmit = (e) => {
        e.preventDefault()

        if(
            nombre.trim() === "" || edad.trim() === ""){
            alert("Todos los campos son obligatorios")
            return
        }

        const nuevoAlumno = {
            id: Date.now(),
            nombre,
            edad
        }

        onGuardar(nuevoAlumno)

        setNombre("")
        setEdad("")
    }

    return (
        <form className="formulario" onSubmit={manejarSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            <button type="submit">Guardar</button>
        </form>
    )
}

export default Formulario;