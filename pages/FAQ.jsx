import React, { useState } from 'react';
import { MdOutlineStickyNote2, MdOutlineSecurity } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { FaAddressCard } from "react-icons/fa";
import { PiKeyReturn } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const iconSize = 70;

  const cardsData = [
    {
      icon: <MdOutlineStickyNote2 size={iconSize} />,
      title: "Problemas con el pedido",
      faqs: [
        <h4><Link to="/faq-resuelto"> Titulo Pregunta 1 sobre pedidos</Link></h4>,
        <h4><Link to="/faq-resuelto"> Titulo Pregunta 2 sobre pedidos</Link></h4>,
        <h4><Link to="/faq-resuelto"> Titulo Pregunta 3 sobre pedidos</Link></h4>,
      ],
    },
    {
      icon: <GiClothes size={iconSize} />,
      title: "Producto y Stock",
      faqs: [
        <a href="/faq-resuelto">Pregunta 1 sobre productos</a>,
        <a href="/faq-resuelto">Pregunta 2 sobre productos</a>,
        <a href="/faq-resuelto">Más preguntas relacionadas a productos...</a>,


      ],
    },
    {
      icon: <FaAddressCard size={iconSize} />,
      title: "Pago y Promociones",
      faqs: [
        <a href="/faq-resuelto">Pregunta 1 sobre pagos</a>,
        <a href="/faq-resuelto">Pregunta 2 sobre pagos</a>,
        <a href="/faq-resuelto">Más preguntas relacionadas a pagos y promociones...</a>,
      ],
    },
    {
      icon: <MdOutlineSecurity size={iconSize} />,
      title: "Seguridad y Privacidad",
      faqs: [
        <a href="/faq-resuelto">Pregunta 1 sobre seguridad</a>,
        <a href="/faq-resuelto">Pregunta 2 sobre seguridad</a>,
        <a href="/faq-resuelto">Más preguntas relacionadas a seguridad y privacidad...</a>,

      ],
    },
    {
      icon: <PiKeyReturn size={iconSize} />,
      title: "Devolución y Reembolso",
      faqs: [
        <a href="/faq-resuelto">Pregunta 2 sobre devoluciones</a>,
        <a href="/faq-resuelto">Más preguntas relacionadas a devolución y Reembolso...</a>,
      ],
    },
    {
      icon: <FiTruck size={iconSize} />,
      title: "Entrega",
      faqs: [
        <a href="/faq-resuelto">Pregunta 1 sobre entregas</a>,
        <a href="/faq-resuelto">Pregunta 2 sobre entregas</a>,
        <a href="/faq-resuelto">Más preguntas relacionadas a entrega...</a>,

      ],
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <div className="faq-container ">
      <h1>Preguntas frecuentes</h1>
      <div className="grid-container ">
        {cardsData.map((card, index) => (
          <div key={index} className="grid-item" onClick={() => handleCardClick(index)}>
            {card.icon}
            <h3>{card.title}</h3>
            {selectedCard === index && (
              <div className="dropdown slide-down">
                <ul>
                  {card.faqs.map((faq, faqIndex) => (
                    <li key={faqIndex}>{faq}</li>

                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
