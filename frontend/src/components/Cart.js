import React from 'react';
import './Cart.css';

const Cart = ({ items, onUpdate, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => onUpdate(item.id, e.target.value)}
            />
            <button onClick={() => onRemove(item.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
      <button>Proceder al pago</button>
    </div>
  );
};

export default Cart;