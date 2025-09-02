import React from 'react';

// Componente Card que recibe diferentes tipos de props
function Card({ titulo, precio, imagen, onComprar, onFavorito, destacado, children }) {
  return (
    <div className={`card ${destacado ? 'destacado' : ''}`} style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '300px',
      boxShadow: destacado ? '0 4px 8px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      
      {/* Imagen si se proporciona */}
      {imagen && (
        <img 
          src={imagen} 
          alt={titulo}
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
        />
      )}
      
      {/* Props con valores */}
      <h3 style={{ color: '#333', margin: '10px 0' }}>{titulo}</h3>
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>
        ${precio}
      </p>
      
      {/* Props children - contenido pasado entre las etiquetas */}
      <div style={{ margin: '15px 0', color: '#666' }}>
        {children}
      </div>
      
      {/* Botones que usan props con funciones */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button 
          onClick={onComprar}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
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
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ❤️ Favorito
        </button>
      </div>
    </div>
  );
}

export default Card;