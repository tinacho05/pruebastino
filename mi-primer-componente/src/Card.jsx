import React from 'react';

// Componente Card que recibe diferentes tipos de props
function Card({ titulo, precio, onComprar, onFavorito, destacado, children }) {
  return (
    <div 
      style={{
        border: '2px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '10px',
        width: '300px',
        backgroundColor: destacado ? '#f0f8ff' : 'white',
        boxShadow: destacado ? '0 4px 8px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      
      {/* Props con valores - titulo y precio */}
      <h3 style={{ color: '#333', margin: '10px 0' }}>
        {titulo}
      </h3>
      
      <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#007bff' }}>
        Precio: ${precio}
      </p>
      
      {/* Props children - contenido que viene entre las etiquetas */}
      <div style={{ margin: '15px 0', color: '#666', minHeight: '50px' }}>
        {children}
      </div>
      
      {/* Props con funciones - botones que ejecutan funciones */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button 
          onClick={onComprar}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Comprar
        </button>
        
        <button 
          onClick={onFavorito}
          style={{
            backgroundColor: '#ffc107',
            color: 'black',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ❤️ Favorito
        </button>
      </div>
    </div>
  );
}

export default Card;
