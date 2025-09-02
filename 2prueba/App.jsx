import React from 'react';
import Card from './Card';

function App() {
  // Funciones que se pasan como props
  const manejarCompra = (producto) => {
    alert(`¡Has comprado: ${producto}!`);
  };

  const manejarFavorito = (producto) => {
    alert(`${producto} agregado a favoritos ❤️`);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Tienda Online</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Card 1 - Con props valores, funciones y children */}
        <Card
          titulo="iPhone 15"
          precio={999}
          imagen="https://via.placeholder.com/300x200/007bff/ffffff?text=iPhone+15"
          destacado={true}
          onComprar={() => manejarCompra('iPhone 15')}
          onFavorito={() => manejarFavorito('iPhone 15')}
        >
          <p><strong>Características:</strong></p>
          <ul>
            <li>128GB de almacenamiento</li>
            <li>Cámara de 48MP</li>
            <li>Pantalla Super Retina XDR</li>
          </ul>
        </Card>

        {/* Card 2 - Diferente contenido en children */}
        <Card
          titulo="MacBook Air"
          precio={1299}
          imagen="https://via.placeholder.com/300x200/28a745/ffffff?text=MacBook+Air"
          destacado={false}
          onComprar={() => manejarCompra('MacBook Air')}
          onFavorito={() => manejarFavorito('MacBook Air')}
        >
          <p><em>Ligero, potente y eficiente</em></p>
          <p>Perfecto para estudiantes y profesionales.</p>
          <span style={{ color: '#28a745', fontWeight: 'bold' }}>
            ¡Envío gratis!
          </span>
        </Card>

        {/* Card 3 - Sin imagen, con children diferentes */}
        <Card
          titulo="AirPods Pro"
          precio={249}
          destacado={false}
          onComprar={() => manejarCompra('AirPods Pro')}
          onFavorito={() => manejarFavorito('AirPods Pro')}
        >
          <div style={{ textAlign: 'center' }}>
            <h4>🎧 Audio Premium</h4>
            <p>Cancelación activa de ruido</p>
            <div style={{ 
              backgroundColor: '#007bff', 
              color: 'white', 
              padding: '5px', 
              borderRadius: '4px' 
            }}>
              OFERTA ESPECIAL
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}

export default App;