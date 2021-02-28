import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes, faSquare } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({ tarea, actualizarEstadoTarea}) => {
    const [editandoTarea, cambiareditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        cambiareditandoTarea(false);
    }


    return (
        <li className="lista-tareas__tarea">     
                    <FontAwesomeIcon
                        icon={tarea.completada? faCheckSquare : faSquare}
                        className="lista-tareas__icono lista-tareas__icono-check"
                        onClick={()=>actualizarEstadoTarea(tarea.id, tarea.texto)}
                    />

            <div className="lista-tareas__texto">
                {editandoTarea ?
                    <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="formulario-editar-tarea__input"
                            value={tarea.texto}
                            onChange={(e) => actualizarEstadoTarea(tarea.id, e.target.value)}
                        />
                        <button
                            type="submit"
                            className="formulario-editar-tarea__btn"
                        >
                            Actualizar
                        </button>
                    </form>
                    : tarea.texto
                }
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon
                    icon={faEdit}
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => cambiareditandoTarea(!editandoTarea)}
                />
                <FontAwesomeIcon
                    icon={faTimes}
                    className="lista-tareas__icono lista-tareas__icono-accion"
                />
            </div>

        </li>
        
    );
    
}

export default Tarea;