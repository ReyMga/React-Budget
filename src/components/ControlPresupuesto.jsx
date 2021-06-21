import React from 'react';
import {revisarPresupuesto} from '../helpers';

const ControlPresupuesto = ({presupuesto, restante}) => {
  return (
    <div>
      <div className="alert alert-primary">
        Budget: ${presupuesto}
      </div>
      <div className={revisarPresupuesto}>
        Leftover: ${restante}
      </div>
    </div>
  );
};

export default ControlPresupuesto;