import axios from "axios";

/* Axios es la libreria para realizar peticiones */

const URL = `https://6104aae64b92a000171c5ca7.mockapi.io/Productos`;
/* el env es un objeto que va a ayudar a acceder a las variables de entorno que es lo que esta dentro de la url*/

/* para utilizar el await debemos de utilizar dentro de un bloque que sea async */

const obtenerProductos = async () => {
  try {
    //Intenta ejecutar este bloque de codigo
    //Equivalente al .then
    //Para usar el await debe de utilizarse dentro de un bloque que sea de async
    let { data } = await axios.get(URL);
    return data;
  } catch {
    //Si hay errores captura ese error
    console.log("error no data");
    console.log(URL);
  }
};

const crearProducto = async (nuevoProducto) => {
  try {
    const headers = {
      "Content-type": "application/json",
    };

    let { data } = await axios.post(URL, nuevoProducto, { headers });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const obtenerProductoXId = async (id) => {
  try {
    let { data } = await axios.get(`${URL}/${id}`);
    return { data };
  } catch {
    console.log("error");
  }
};

const obtenerImagenes = async () => {
  try {
    //Intenta ejecutar este bloque de codigo
    //Equivalente al .then
    //Para usar el await debe de utilizarse dentro de un bloque que sea de async
    let { data } = await axios.get(URL);
    let almacen = data;
    const imgs = [];
    for (let index = 0; index <= 2; index++) {
      let aleatorio = Math.floor(Math.random() * (almacen.length - 0) + 0);
      imgs.push(almacen[aleatorio]);
      console.log("obtener data:", imgs);
    }
    return imgs;
  } catch {
    //Si hay errores captura ese error
    console.log("error no data");
    console.log(URL);
  }
};

export { obtenerProductos, obtenerProductoXId, obtenerImagenes, crearProducto };
