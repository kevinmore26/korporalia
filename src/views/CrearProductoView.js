import { useState, useEffect } from "react";
import { crearProducto } from "../services/productosService";
import { Form } from "react-bootstrap";
import FormProducto from "../components/FormProducto";
export default function CrearProductoView() {
  const [value, setValue] = useState({
    prod_nombre: "",
    prod_descripcion: "",
    prod_precio: 0,
    prod_imagen: "",
  });

  const actualizarInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
      //prod_nombre:lo que escriba
      //cada vez que escriba , va ir actualizando la propiedad
    });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearProducto(value);
    } catch (error) {
        console.log('error aaaaa')
    }
  };

  return (
    <div>
      CrearProductoView
      <FormProducto
        value={value}
        actualizarInput={actualizarInput}
        manejarSubmit={manejarSubmit}
      />
    </div>
  );
}
