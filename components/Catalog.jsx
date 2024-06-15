import React from 'react';
 
function Catalog() {
 // Ejemplo de datos del catálogo
    const products = [
    { id: 1, image: <img src="1sp.jpg" alt="Sillas plegables (Negras)" width="200" height="200"/>, name: 'Sillas plegables', ubicacion: 'San Miguelito',  price: 20.00, seguro:5.00 },
    { id: 2, image: <img src="2b.webp" alt="Dos bocinas" width="200" height="200"/>, name: 'Bocinas', ubicacion: 'El Crisol', price: 20.99, seguro:5.00 },
    { id: 3, image: <img src="3sdh.jpg" alt="Set de herramientas" width="200" height="200"/>, name: 'Set de Herramientas', ubicacion: 'San Miguelito', price: 29.99, seguro:8.00 },
    { id: 4, image: <img src="4p.webp" alt="Pala" width="200" height="200"/>, name: 'Pala', ubicacion: 'Villa Lucre', price: 9.99, seguro:3.00 },
    { id: 5, image: <img src="5mi.jpg" alt="Micrófono inalámbrico negro" width="200" height="200"/>, name: 'Micrófono inalámbrico', ubicacion: 'Ancón', price: 10.99, seguro:3.00 },
    { id: 6, image: <img src="6sdi.jpg" alt="Set de iluminación" width="200" height="200"/>, name: 'Set de Iluminación', ubicacion: 'Vía España', price: 25.00, seguro:5.00 },
    { id: 7, image: <img src="7vg.webp" alt="Vestido Negro" width="200" height="200"/>, name: 'Vestido de gala (Negro)', ubicacion: 'Pedregal', price: 30.00, seguro:8.00 },
    { id: 8, image: <img src="8mr.jpg" alt="Mesas redondas" width="200" height="200"/>, name: 'Mesas redondas', ubicacion: 'San Miguelito', price: 10.00, seguro:3.00 }
    ];
    return (
        <div>
            <h1 className="black" >Todo lo que necesitas</h1>
            <br></br>
            <ul>
            {products.map(product => (

                <li  key={product.id}>
                    
                    <div className="row" class='border-radius'>
                        <div className="column">
                            <span>{product.image}</span>
                            
                        </div>
                        <div>
                            <span className='name'> {product.name} </span>
                            <p className= 'black'>{product.ubicacion}</p>
                            <p className= 'black'>Precio: PAB {product.price}</p>
                            <p className= 'black'>+{product.seguro} PAB de seguro</p>
                            <button type="button"> Reservar </button>
                        </div>
                    </div>
                    <br></br>
                    
                    
                </li>

                
            ))}
            </ul>
        </div>
    );
}
export default Catalog;
