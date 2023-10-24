import React, { useState } from 'react';

const Formulario = ({ agregarColaborador, mostrarAlerta }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nuevoColaborador.nombre ||
      !nuevoColaborador.correo ||
      !nuevoColaborador.edad ||
      !nuevoColaborador.cargo ||
      !nuevoColaborador.telefono
    ) {
      mostrarAlerta('Todos los campos son obligatorios.', 'danger');
      return;
    }

    // Lógica para agregar el nuevo colaborador al estado
    agregarColaborador(nuevoColaborador);

    mostrarAlerta('Colaborador agregado con éxito.', 'success');

    // Limpiar el formulario después de agregar
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs para cada propiedad del nuevo colaborador */}
      <input type='text' name='nombre' value={nuevoColaborador.nombre} placeholder='Nombre'  onChange={handleInputChange}></input>
      <br></br>
      <input type='text' name='correo' value={nuevoColaborador.correo} placeholder="email@ejemplo.com"  onChange={handleInputChange}></input>
      <br></br>
      <input type='text' name='edad' value={nuevoColaborador.edad} placeholder='Edad'  onChange={handleInputChange}></input>
      <br></br>
      <input type='text' name='cargo' value={nuevoColaborador.cargo} placeholder='Cargo'  onChange={handleInputChange}></input>
      <br></br>
      <input type='text' name='telefono' value={nuevoColaborador.telefono} placeholder='Teléfono'  onChange={handleInputChange}></input>
      <br></br>
      <button name="submit" className="btn btn-primary">
        Agregar Colaborador
      </button>
    </form>
  );
};

export default Formulario;
