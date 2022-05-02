import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { obtenerProductos,obtenerProductoXId,obtenerImagenes } from '../services/productosService'

export default function CustomCarruzel() {

    const [data, setdata] = useState([]);


    const getData = async()=>{
        try{
            let obtenData = await obtenerImagenes();
            setdata(obtenData);
            
        }catch(err){
            console.log("Error");
        }
    }


    /* Al momento de ejecutar el programa hago un cambio y me permite ver las imagenes pero al momento de recargar ahora arroja error*/

    useEffect(() => {
        getData();
    }, []);

    console.log("data del capitan",data);
    
  return (
    <div style={{
        width:"300px",
        height: "300px",
        margin:"auto"
    }}>
    <Carousel>
        {data.map((imaP, key)=>(
            <Carousel.Item key={key}>
            <img
                className="d-block w-100 h-100"
                src={imaP.prod_imagen}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label </h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
    </div>
  )
}
