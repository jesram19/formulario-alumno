import { useState, useEffect } from "react";

function Formulario ({onGuardar, alumnoEditando}){
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [correo, setCorreo] = useState("")

    //Este useEffect se encargara de llenar el formulario con los datos del alumno que queremos editar,
    //y con esto poder modificarlo y guardarlo nuevamente, para esto necesitamos pasar el alumno que queremos editar desde el componente App,
    //y con esto poder llenar el formulario con los datos de ese alumno, para esto necesitamos agregar un nuevo estado en el componente App para
    //guardar el alumno que queremos editar, y con esto poder pasar ese alumno al componente Formulario para llenar el formulario con los datos de ese alumno
    useEffect(() => {
        if(alumnoEditando){
            setNombre(alumnoEditando.nombre)
            setApellido(alumnoEditando.apellido)
            setEdad(alumnoEditando.edad)
            setCorreo(alumnoEditando.correo)
        }
    }, [alumnoEditando, setNombre, setApellido, setEdad, setCorreo])

    const manejarSubmit = (e) => {
        e.preventDefault()
//Agregue los nuevos campos de apellido y correo a la validacion.
        if(
            nombre.trim() === "" || 
            apellido.trim() === "" ||
            edad.trim() === "" ||
            correo.trim() === ""){
            alert("Todos los campos son obligatorios")
            return
        }

        const nuevoAlumno = {
            //Si estamos editando conservaremos el id original y si es nuevo generaremos uno nuevo con el Date.now()
            //
            id: alumnoEditando ? alumnoEditando.id : Date.now(),
            nombre,
            apellido,
            edad,
            correo
        }

        onGuardar(nuevoAlumno)

        setNombre("")
        setApellido("")
        setEdad("")
        setCorreo("")
    }
//Agregue los nuevos campos de apellido y correo al formulario, ademas de agregar un nuevo estado para cada uno de estos campos,
//y agregar el valor y el onChange para cada uno de estos campos.
    return (
        <form className="formulario" onSubmit={manejarSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            <input
                type="email"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
            <button type="submit">
                {alumnoEditando ? "Actualizar Alumno" : "Guardar"}
            </button>
        </form>
    )
}

export default Formulario;