import React from 'react'
import Card from './Card'
import './App.css'

function App() {
  // Funciones que vamos a pasar como props
  const manejarCompra = (producto) => {
    alert(`¡Has comprado: ${producto}!`);
  };

  const manejarFavorito = (producto) => {
    alert(`${producto} agregado a favoritos ❤️`);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Demo de Props en React
      </h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Ejemplo 1: Props con valores + funciones + children */}
        <Card
          titulo="Laptop Gaming"
          precio={1500}
          destacado={true}
          onComprar={() => manejarCompra('Laptop Gaming')}
          onFavorito={() => manejarFavorito('Laptop Gaming')}
        >
          <p><strong>Especificaciones:</strong></p>
          <ul>
            <li>Intel i7 12va generación</li>
            <li>16GB RAM</li>
            <li>RTX 4060</li>
            <li>512GB SSD</li>
          </ul>
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            ¡OFERTA LIMITADA!
          </span>
        </Card>

        {/* Ejemplo 2: Diferentes props children */}
        <Card
          titulo="Smartphone"
          precio={800}
          destacado={false}
          onComprar={() => manejarCompra('Smartphone')}
          onFavorito={() => manejarFavorito('Smartphone')}
        >
          <div style={{ textAlign: 'center' }}>
            <h4>📱 Última tecnología</h4>
            <p>Cámara de 108MP</p>
            <p>Batería de larga duración</p>
          </div>
        </Card>

        {/* Ejemplo 3: Props children con elementos diferentes */}
        <Card
          titulo="Auriculares"
          precio={200}
          destacado={false}
          onComprar={() => manejarCompra('Auriculares')}
          onFavorito={() => manejarFavorito('Auriculares')}
        >
          <img 
            src="https://via.placeholder.com/200x100/007bff/ffffff?text=Auriculares" 
            alt="Auriculares"
            style={{ width: '100%', borderRadius: '4px' }}
          />
          <p><em>Sonido de alta calidad</em></p>
        </Card>

      </div>
    </div>
  )
}

export default App
