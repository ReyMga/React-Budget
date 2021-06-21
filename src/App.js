import {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto'


const App = () =>  {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);

  //Estado para saber que componente mostrar
  const[mostrarPregunta, setMostrarPregunta] = useState(true);

  //Estado para generar los gastos
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if(crearGasto){
      //Agregamos nuevo presupuesto
      setGastos([
        ...gastos,
       gasto
      ])
      //Resta de presupuesto
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
    }
    setCrearGasto(false)
  },[gasto])

  // const agregarNuevoGasto = gasto =>


  return (
    <div className="container">
      <header>
        <h1>Expense Control</h1>
      </header>
      <div className="contenido-principal contenido">
        {mostrarPregunta ? (
          <Pregunta
          setPresupuesto={setPresupuesto}
          setRestante={setRestante} 
          setMostrarPregunta={setMostrarPregunta} />
        ) : (
          <div className="row">
          <div className="one-half column">
            <Formulario 
              setGasto={setGasto} 
              setCrearGasto={setCrearGasto}
            />
          </div>
          <div className="one-half column">
            <Listado 
              gastos={gastos}
            />
            <ControlPresupuesto 
              presupuesto={presupuesto}
              restante={restante}
            />
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default App;