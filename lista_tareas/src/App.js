import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';


const { v4: uuidv4 } = require('uuid');

const App = () => {
    const [tareas, cambiarTareas]= useState(
        [
            {
                id:uuidv4(),
                texto: "Lavar",
                completada: false
            },
            {
                id:uuidv4(),
                texto: "Fregar",
                completada: true
            }
        ]
    );

    const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(false);

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