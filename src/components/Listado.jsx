import React from 'react';

const Listado = ({gastos}) => {
    return (
        <div className="gastos-realizados">
            <h2>List</h2>
            {gastos.map(gasto => (
                <li key={gasto.id} className="gastos">
                    <p>
                        {gasto.nombre}    
                    <span className="gasto">${gasto.cantidad}</span>
                    </p>
                </li>
            ))}
        </div>
    );
}

export default Listado;