import React, { useState } from 'react';

const Buscador = ({ filtrarColaboradores }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const handleChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filtrarColaboradores(terminoBusqueda);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar por nombre, correo, etc."
        value={terminoBusqueda}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Buscador;
