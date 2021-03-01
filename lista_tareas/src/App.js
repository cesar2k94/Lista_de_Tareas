import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';




const App = () => {
    
    //Obtener las tareas guardadas
    const tareasGuardadas = 
    localStorage.getItem('tareas')?
    JSON.parse(localStorage.getItem('tareas')):[];
    //Establecer estado de tareas
    const [tareas, cambiarTareas]= useState(tareasGuardadas);
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    //Obtener estado de mostrarCompletadas
    let mostrarCompletadasGuardadas;
    if (localStorage.getItem('mostrarCompletadas')===null){
        mostrarCompletadasGuardadas = true;
    }else{
        mostrarCompletadasGuardadas=localStorage.getItem('mostrarCompletadas')==='true';
    }


    //Establecer estado de mostrarCompletadas
    const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(mostrarCompletadasGuardadas);
    useEffect(() => {
        localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
    }, [mostrarCompletadas]);

    return (    
        <div className="contenedor">
            <Header
                mostrarCompletadas={mostrarCompletadas} 
                cambiarMostrarCompletadas={cambiarMostrarCompletadas}
            /> 
            <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
            <ListaTareas 
                tareas={tareas} 
                cambiarTareas={cambiarTareas}
                mostrarCompletadas={mostrarCompletadas}
            />
        </div>
     );
}
 
export default App;