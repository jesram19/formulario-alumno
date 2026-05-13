function ListaAlumnos({alumnos, onEliminar, onEditar}){
    return(
        <div className="listaAlumnos">
            <h2>Alumnos Registrados</h2>

            {
                //Esto que se realizara se llama renderizado condicional, es decir, dependiendo de una condicion se renderizara algo u otra cosa

                alumnos.length === 0 ? (
                    <p>No hay alumnos registrados</p>
                ) : (
                    <ul>
                        {
                            alumnos.map((alumno )=> (
                                <li key={alumno.id}>
                                    <strong>Nombre: {alumno.nombre}, {alumno.apellido}</strong>
                                    <strong>Edad: {alumno.edad} años</strong>
                                    <strong>Correo: {alumno.correo}</strong>
                                    <button
                                        className="btn-editar"
                                        onClick={() => onEditar(alumno)}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        className="btn-borrar"
                                        onClick={() => onEliminar(alumno.id)}
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            
        </div>
    )
}

export default ListaAlumnos;