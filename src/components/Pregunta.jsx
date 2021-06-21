import {useState} from 'react';
import Error from './Error';

const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) =>{

    // Creando estado para presupuesto
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Funcion para leer el Presupuesto
    const definirPresupuesto = e =>{
        setCantidad(Number(e.target.value));
    }

    //Funcion para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //Validacion
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }
        //Si pasa la validación
        setError(false); 

        //Actualizamos los estados de presupuesto y restante
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    }


    return(
        <div>
            <h2>Insert your budget</h2>
              {/* {error ? <Error mensaje="El presupuesto es incorrecto" /> : null} */}
              {error && <Error mensaje="The budget is wrong" /> }
            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Insert your budget" 
                    step= "0.01"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define Budget" />
            </form>
        </div>
    )
}

export default Pregunta;