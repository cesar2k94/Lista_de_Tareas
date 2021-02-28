import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
    const actualizarEstadoTarea = (id, tareaTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return { ...tarea, completada: !tarea.completada, texto: tareaTexto };
            } else {
                return tarea;
            }
        }));
    }

    const eliminarTarea = (id) => {
        cambiarTareas(tareas.filter(tarea => tarea.id !== id))
    }

    return (
        <ul className="lista-tareas">
            {tareas.length > 0 ? tareas.map((tarea) => {
                if (mostrarCompletadas) {
                    return <Tarea
                        tarea={tarea}
                        key={tarea.id}
                        actualizarEstadoTarea={actualizarEstadoTarea}
                        eliminarTarea={eliminarTarea}
                    />
                } else if (!tarea.completada) {
                    return <Tarea
                        tarea={tarea}
                        key={tarea.id}
                        actualizarEstadoTarea={actualizarEstadoTarea}
                        eliminarTarea={eliminarTarea}
                    />
                }
                return;

            })
                : <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
            }
        </ul>
    );
}

export default ListaTareas;