import {Form } from 'react-bootstrap'
export default function FormProducto({actualizarInput,value,manejarSubmit}){


    return(
        <div>
             <Form onSubmit={(e)=>{manejarSubmit(e)}}>
                <div className='mb-3'>
                    <label>
                        Nombre Producto
                    </label>
                    <input type="text"
                     className='form-control'
                     name='prod_nombre' 
                     value={value.prod_nombre}
                     onChange={(e)=>{actualizarInput(e)}}
                     >
                    </input>

                </div>
                <div className='mb-3'>
                    <label>
                        Descripción Producto
                    </label>
                    <input type="text"
                     className='form-control'
                     name='prod_descripcion'
                     value={value.prod_descripcion}
                     onChange={(e)=>{actualizarInput(e)}}
                     >
                    </input>

                </div>
                <div className='mb-3'>
                    <label>
                        Precio Producto
                    </label>
                    <input type="number"
                     className='form-control'
                     name='prod_precio'
                     value={value.prod_precio}
                     onChange={(e)=>{actualizarInput(e)}}
                     >
                    </input>

                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary' type='submit'>
                        GUARDAR
                    </button>

                </div>

            </Form>
        </div>
    )
}