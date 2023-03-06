import React from 'react';
import './carousel.scss';

function Carousel() {
    return (

            <div className="card-wrapper">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Entrenamiento personalizado</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">Diseño de programas de entrenamiento personalizados según tus objetivos, nivel de condición física y limitaciones físicas.</p>
                </div>
              </div>
        
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Entrenamiento en grupo</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">Entrenamiento en grupo reducido para mejorar la motivación y el compañerismo.</p>
                </div>
              </div>
        
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Nutrición personalizada</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">Asesoramiento nutricional personalizado para ayudarte a alcanzar tus objetivos de forma saludable y sostenible.</p>
                </div>
              </div>
        
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Entrenamiento funcional</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">Entrenamiento enfocado en mejorar la movilidad, flexibilidad, equilibrio y fuerza en movimientos cotidianos.</p>
                </div>
              </div>
        
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Entrenamiento de fuerza</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">Entrenamiento de fuerza personalizado según tus objetivos y nivel de condición física.</p>
                </div>
              </div>
        
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Entrenamiento deportivo</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">Entrenamiento especializado para deportistas y atletas que buscan mejorar su rendimiento y prevenir lesiones.</p>
                </div>
              </div>
            </div>
          );
        }
  

export default Carousel;
