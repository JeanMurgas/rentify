import { useState } from 'react';
import React from 'react';
import globos from '../assets/globos.jpg'
import './Home.css'
import banner from '../assets/banner-home.png';
import bocinas from '../assets/bocinas.jpg';
import catering from '../assets/catering.jpg';
import vestido from '../assets/vestido.jpg';
import silla from '../assets/silla.jpg';

const Home = () => {
  
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    email: '',
    phone: '',
    location: '',
    businessDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
  };

  

  return (
    <><><><><><div className='banner1'>
      <div className="overlay">
        <h1>Bienvenidos a Rentify</h1>
        <p>Somos el marketplace líder en Panamá para alquiler de artículos destinados a eventos de todo tipo.</p>
        <div className="box-container">
          <div className="big-box">
          <div className="discount-text">
          <div className='container'>
            <span class='rosa'>25%</span>
            <span class='naranja'>OFF</span>
            <span class='rosa'>25%</span>
          </div>
          <div className='container'>
          <span class='naranja'>25%</span>
            <span class='rosa'>OFF</span>
            <span class='naranja'>25%</span>
          </div>
      </div>
      <div className="info-text">
        <h2>EN TU PRIMER ALQUILER<br></br> TODO EL MES DE JUNIO</h2>
        <p>
          Para celebrar nuestro lanzamiento, estamos ofreciendo un 25% de
          descuento en tu primer alquiler durante el primer mes. No pierdas la
          oportunidad de aprovechar esta oferta exclusiva y dale a tu evento el
          toque especial que se merece.
        </p>
      </div>
          </div>
          <div className="small-box">
            <h2>¡Únete a rentify y haz crecer tu negocio!</h2>
              <p>¿Eres un emprendedor o dueño de negocio en el mundo de los eventos? ¡Esta es tu oportunidad de expandirte!</p>
            <a href='#formulario'>Más información</a>
          </div>
        </div>
      </div>
    </div>

      <div className='semana'>
        <div className="overlay-semana">
          <h3>Productos de la semana</h3>
          <img src={globos} alt="Logo" /> 
          <img src={globos} alt="Logo" /> 
          <img src={globos} alt="Logo" /> 
          <img src={globos} alt="Logo" /> 
          <img src={globos} alt="Logo" /> 

        </div>
      </div></>

      <div className="box-container">
        <div className="left-box">
          <h3>Ropa</h3>
          <img src={vestido} alt="Logo" /> 
          <img src={vestido} alt="Logo" /> 
          <img src={vestido} alt="Logo" />
        </div>
        <div className="right-box">
          <h3>Mobiliario</h3>
          <img src={silla} alt="Logo" /> 
          <img src={silla} alt="Logo" /> 
          <img src={silla} alt="Logo" /> 
        </div>

      </div></><div className="box-container">
        <div className="left-box">
          <h3>Artículos Electrónicos</h3>
          <img src={bocinas} alt="Logo" /> 
          <img src={bocinas} alt="Logo" /> 
          <img src={bocinas} alt="Logo" /> 
        </div>
        <div className="right-box">
          <h3>Servicios</h3>
          <img src={catering} alt="Logo" /> 
          <img src={catering} alt="Logo" /> 
          <img src={catering} alt="Logo" /> 
        </div>
      </div></>

    <div id='formulario' className="form-empresa">
      </div></><div className="form-container">
        <div className="info-section">
          <h3>Anúnciate con nosotros</h3>
          <div className="info-step">
            <h3>01.</h3>
            <p><strong>Ponte en contacto con nosotros</strong></p>
            <p>Llena nuestro formulario de bienes raíces o escríbenos por Whatsapp y cuéntanos un poco acerca de tus necesidades.</p>
          </div>
          <div className="info-step">
            <h3>02.</h3>
            <p><strong>Te asignamos un agente</strong></p>
            <p>Uno de nuestros expertos se pondrá en contacto contigo para pedirte toda la información e imágenes necesarias.</p>
          </div>
          <div className="info-step">
            <h3>03.</h3>
            <p><strong>Nosotros nos encargamos del resto</strong></p>
            <p>Publicaremos tus artículos y encontraremos al cliente perfecto para ti sin que tengas que mover un solo dedo.</p>
          </div>
        </div>
        <form className="rental-form" onSubmit={handleSubmit}>
          <h2>Formulario de Alquiler</h2>
          <input
            type="text"
            name="companyName"
            placeholder="Nombre de la empresa"
            value={formData.companyName}
            onChange={handleChange} />
          <input
            type="text"
            name="businessType"
            placeholder="Tipo de negocio"
            value={formData.businessType}
            onChange={handleChange} />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange} />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange} />
          <input
            type="text"
            name="location"
            placeholder="Ubicación"
            value={formData.location}
            onChange={handleChange} />
          <textarea
            name="businessDescription"
            placeholder="Descripción del negocio"
            value={formData.businessDescription}
            onChange={handleChange} />
          <button type="submit">Enviar</button>
        </form>
      </div></>

  );
};

export default Home;
