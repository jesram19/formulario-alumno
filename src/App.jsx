import Formulario from "./components/Formulario";
import "./App.css";
import ListaAlumnos from "./components/ListaAlumnos";
import { useEffect, useState } from "react";

function App(){

    const [alumnos, setAlumnos] = useState([])

    const [alumnoEditando, setAlumnoEditando] = useState(null)

    useEffect(() => {
        const datosGuardados = localStorage.getItem("alumnos")

        if(datosGuardados){
            setAlumnos(JSON.parse(datosGuardados))
        }
},[])
    //Funcion para guardar un nuevo alumno o actualizar uno existente, Aca quite la constante y la puse como funcion normal, ya que no es necesario
    //que sea una constante, ademas de que asi se puede llamar a esta funcion desde el componente Formulario para guardar un nuevo alumno o actualizar uno
    //existente
    const guardarAlumno = (alumno) => {
        let nuevaLista

        if(alumnoEditando){
            nuevaLista = alumnos.map((a) => 
                a.id === alumno.id ? alumno : a
            )
            setAlumnoEditando(null)
        }else{
             nuevaLista = [...alumnos, alumno]
        }

        setAlumnos(nuevaLista)
        localStorage.setItem("alumnos", JSON.stringify(nuevaLista))
    }
//Nueva funcion para editar un alumno, esto nos ayudara a llenar el formulario
//con los datos del alumno que queremos editar, para asi poder modificarlo y guardarlo nuevamente.
    const editarAlumno = (alumno) => {
        setAlumnoEditando(alumno)
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
          alumnoEditando={alumnoEditando}
      />
      <ListaAlumnos
      alumnos={alumnos}
      onEliminar={eliminarAlumno}
      onEditar={editarAlumno}
    />
    </div>
  )
}

export default App;