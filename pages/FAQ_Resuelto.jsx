import React, { useState } from 'react';
import { GiBackgammon } from 'react-icons/gi';

const FAQResuelto = () => {
  return (
    <div className="cont-faq-resuelto">
      <div className="menu-lateral">
        <button> Ver Preguntas Frecuentes</button>
        <h4>Preguntas Relacionadas</h4>
        <a href="">pregunta relacionada 1</a>
        <a href="">pregunta relacionada 2</a>
        <a href="">pregunta relacionada 3</a>
        <a href="">pregunta relacionada 4</a>
      </div>
      <div className="contenido-pregunta">
        <h1>¿Título de la pregunta?</h1>
        <p>
          Descripcion de la pregunta
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nobis, soluta dolores pariatur iusto hic similique assumenda. Sit, vitae qui
          dolorem natus labore blanditiis voluptatum suscipit, sed quam tenetur veniam.
        </p>
        <hr />
        <h4>Le resultó útil esta información?</h4>
        <button className="btn-Si">Si</button>
        <button className="btn-No">No</button>
        <h4>Si tiene más preguntas </h4>
        <a href="####">Haga clic aquí para contactar a servicio al cliente</a>
      </div>
    </div>
  );
};

export default FAQResuelto;

