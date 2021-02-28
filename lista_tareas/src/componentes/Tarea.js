import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes, faSquare } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({ tarea}) => {
    const [editandoTarea, cambiareditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);
    const [iconoCompletada, cambiarIcono] = useState(tarea.completada)

    const handleSubmit = (e) => {
        e.preventDefault();
        cambiareditandoTarea(false);
    }

    return (
        <li className="lista-tareas__tarea">     
                    <FontAwesomeIcon
                        icon={iconoCompletada? faSquare : faCheckSquare}
                        className="lista-tareas__icono lista-tareas__icono-check"
                        onClick={(e)=>cambiarIcono(!iconoCompletada,tarea.completada=!tarea.completada)}
                    />

            <div className="lista-tareas__texto">
                {editandoTarea ?
                    <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="formulario-editar-tarea__input"
                            value={nuevaTarea}
                            onChange={(e) => cambiarNuevaTarea(e.target.value, tarea.texto = e.target.value)}
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