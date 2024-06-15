import React, { useState } from "react";
import { FaPlus, FaMinus, FaChevronDown, FaChevronUp} from 'react-icons/fa';
import './UsuarioProfile.css';

function Perfil() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const renderToggleIcon = (index) => {
        return activeIndex === index ? <FaMinus /> : <FaPlus />;
    };

    return (
        <div className="pagina-principal">
            <div className="centro-personal">
                <h1>Centro personal</h1>
                <div className="mi-cuenta">
                    <div className="content">
                        <h4 onClick={() => toggleContent(0)}>Mi Cuenta {renderToggleIcon(0)}</h4>
                        {activeIndex === 0 && (
                            <div className="lista-contenido">
                                <ul>
                                    <li>Rentify Club</li>
                                    <li>Rentify VIP</li>
                                    <li>Mi Perfil</li>
                                    <li>Mi Libreta De Direcciones</li>
                                    <li>Mis Opciones De Pago</li>
                                    <li>Mis Medidas</li>
                                    <li>Gestionar Mi Cuenta</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="content">
                        <h4 onClick={() => toggleContent(1)}>Mis Ganancias {renderToggleIcon(1)}</h4>
                        {activeIndex === 1 && (
                            <div className="lista-contenido">
                                <ul>
                                    <li>Mis Cupones</li>
                                    <li>Mis Puntos</li>
                                    <li>Mi Cartera</li>
                                    <li>Tarjeta de Regalo</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="content">
                        <h4 onClick={() => toggleContent(2)}>Mis Pedidos {renderToggleIcon(2)}</h4>
                        {activeIndex === 2 && (
                            <div className="lista-contenido">
                                <ul>
                                    <li>Todos Los Pedidos</li>
                                    <li>Pedidos Impagados</li>
                                    <li>Pedidos En Proceso</li>
                                    <li>Pedidos Enviados</li>
                                    <li>Pedidos Comentados</li>
                                    <li>Pedidos Devueltos</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="content">
                        <h4 onClick={() => toggleContent(3)}>Mis Intereses {renderToggleIcon(3)}</h4>
                        {activeIndex === 3 && (
                            <div className="lista-contenido">
                                <ul>
                                    <li>Lista De Deseos</li>
                                    <li>Visto Recientemente</li>
                                    <li>Seguir</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="content">
                        <h4 onClick={() => toggleContent(4)}>Servicio Al Cliente {renderToggleIcon(4)}</h4>
                        {activeIndex === 4 && (
                            <div className="lista-contenido">
                                <ul>
                                    <li>Mis Notificaciones</li>
                                    <li>Registros De Servicio</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="content">
                        <h4 onClick={() => toggleContent(5)}>Otros Servicios {renderToggleIcon(5)}</h4>
                        {activeIndex === 5 && (
                            <div className="lista-contenido">
                                <ul>
                                    <li>Mi Prueba Gratuita</li>
                                    <li>Mis Referencias</li>
                                    <li>Compartir Y Ganar</li>
                                    <li>Mis Opciones De Pago</li>
                                    <li>Preferencias de Contacto</li>
                                    <li>Noticias</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="content">
                        <h4 onClick={() => toggleContent(6)}>Política {renderToggleIcon(6)}</h4>
                        {activeIndex === 6 && (
                            <div className="lista-contenido">
                                <ul>
                                    <li>Información De Envío</li>
                                    <li>Política De Devolución</li>
                                    <li>Política De Privacidad Y Cookies</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="mi-perfil">
                <h1>Mi Perfil</h1>
                <div className="information">
                    <h4>Informacion</h4>
                    <label>Nombre de usuario: </label>
                    <input type="text" name="username"></input>
                </div>
                <div className="preferencia">
                    <div className="depliegue-preferencias">
                    <h4>Preferencias
                        <span>Categorias y estilos, etc...</span>
                    </h4>
                    </div>
                    <form action="/" method="POST">
                    <div className="preguntas">
                        <div className="preguntas-preferencias">
                            <h6>¿Cuáles son tus categorias favoritas?</h6>
                            <div className="preguntas-list">
                                <ul>
                                    <li>Ropa</li>
                                    <li>Electrónicos</li>
                                    <li>Eventos</li>
                                    <li>Herramientas</li>
                                    <li>Mobiliaria</li>
                                    <li>Utilería</li>
                                </ul>
                            </div>
                        </div>
                        <div className="preguntas-preferencias">
                            <h6>¿Para qué tipo de actividades sueles comprar?</h6>
                            <ul>
                                <li>Escolares</li>
                                <li>Bodas</li>
                                <li>Conciertos</li>
                                <li>Actividades Personales</li>
                                <li>Actividades grupales</li>
                                <li>Teatro</li>
                            </ul>
                        </div>
                    </div>
                    <button type="submit">GUARDAR</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
