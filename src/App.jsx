import Formulario from "./components/Formulario";
import "./App.css";
import ListaAlumnos from "./components/ListaAlumnos";
import { useEffect, useState } from "react";

function App(){

    const [alumnos, setAlumnos] = useState([])

    useEffect(() => {
        const datosGuardados = localStorage.getItem("alumnos")

        if(datosGuardados){
            setAlumnos(JSON.parse(datosGuardados))
        }
},[])

    const guardarAlumno = (alumno) => {
        const nuevaLista = [...alumnos, alumno]
        setAlumnos(nuevaLista)
        localStorage.setItem("alumnos", JSON.stringify(nuevaLista))
    }

    const eliminarAlumno = (id) => {
        const nuevaLista = alumnos.filter(
            (alumno) => alumno.id !== id
        )
        setAlumnos(nuevaLista)

        localStorage.setItem("alumnos", JSON.stringify(nuevaLista))
      }

  return (
    <div className="contenedor">
      <h1>Registro de Alumnos</h1>
      <Formulario 
          onGuardar={guardarAlumno}
      />
      <ListaAlumnos
      alumnos={alumnos}
      onEliminar={eliminarAlumno}
    />
    </div>
  )
}

export default App;