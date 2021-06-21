import {useState} from 'react';
import Error from './Error'
import shortid from 'shortid';

const Formulario = ({setGasto, setCrearGasto}) => {

    const[nombre, setNombre] = useState('');
    const[cantidad, setCantidad] = useState(0);
    const[error,setError] = useState(false);

    const agregarGasto = e =>{
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        //construir gasto
        const gasto = {
            nombre,
            cantidad: cantidad,
            id: shortid.generate()
        }

        //Pasar el gasto al componente App.js
        setGasto(gasto);
        setCrearGasto(true);

        //Limpiar los inputs
        setNombre('');
        setCantidad('');
    }

    return (
        <form 
            onSubmit={agregarGasto}>
            <h2>Add your expenses here</h2>
            {error && <Error mensaje="Ambos campos son obligatorios o gasto incorrecto" /> }
            <div className="campo">
                <label htmlFor="gasto">Name Expense</label>
                <input 
                    type="text" 
                    id="gasto"
                    className="u-full-width"
                    placeholder="Ej. Transporte" 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad-gasto">Amount Expense</label>
                <input 
                    type="number"
                    id="cantidad-gasto"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    step="0.01"
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Add Expense" />
        </form>
    );
}

export default Formulario;