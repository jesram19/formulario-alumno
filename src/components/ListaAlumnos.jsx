function ListaAlumnos({alumnos, onEliminar}){
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
                                    <strong>{alumno.nombre}</strong>
                                    <strong>{alumno.edad} años</strong>
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