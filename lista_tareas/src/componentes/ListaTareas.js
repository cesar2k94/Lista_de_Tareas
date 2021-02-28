import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, cambiarTareas}) => {
    const actualizarEstadoTarea=(id)=>{
        cambiarTareas(tareas.map((tarea)=>{
            if (tarea.id===id) {
                return{...tarea, completada:!tarea.completada};
            } else {
                return tarea;
            }
        }));
    }
    return ( 
        <ul className="lista-tareas">
            {tareas.length> 0 ? tareas.map((tarea)=>{
                return <Tarea
                            tarea={tarea}
                            key={tarea.id}
                            actualizarEstadoTarea={actualizarEstadoTarea}
                        />
            })
            :<div className="lista-tareas__mensaje">No hay tareas agregadas</div>
            }
        </ul>
     );
}
 
export default ListaTareas;