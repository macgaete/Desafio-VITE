import React, { useState } from 'react';
import { BaseColaboradores } from './components/BaseColaboradores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import './App.css'

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensajeAlerta, setMensajeAlerta] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    // Lógica para agregar el nuevo colaborador al estado
    setColaboradores([...colaboradores, { id: Date.now().toString(), ...nuevoColaborador }]);
    mostrarAlerta('Colaborador agregado con éxito.', 'success');
  };

  const filtrarColaboradores = (terminoBusqueda) => {
    // Lógica para filtrar colaboradores
    const colaboradoresFiltrados = BaseColaboradores.filter((colaborador) =>
      Object.values(colaborador).some((value) =>
        value.toLowerCase().includes(terminoBusqueda.toLowerCase())
      )
    );
    setColaboradores(colaboradoresFiltrados);
  };

  const mostrarAlerta = (mensaje, tipo) => {
    setMensajeAlerta({ mensaje, tipo });
    setTimeout(() => {
      setMensajeAlerta('');
    }, 3000);
  };

  return (
    <div className="container">
      <h1>Lista de Colaboradores</h1>

      {/* Alerta */}
      {mensajeAlerta && (
        <Alert mensaje={mensajeAlerta.mensaje} tipo={mensajeAlerta.tipo} />
      )}

      {/* Buscador */}
      <Buscador filtrarColaboradores={filtrarColaboradores} />

      {/* Formulario */}
      <Formulario agregarColaborador={agregarColaborador} mostrarAlerta={mostrarAlerta} />

      {/* Listado */}
      <Listado colaboradores={colaboradores} />
    </div>
  );
};

export default App;