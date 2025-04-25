import React from 'react';
import './UserPanel.css';

const UserPanel = ({ orders }) => {
  return (
    <div className="user-panel">
      <h1>Mis Pedidos</h1>
      {orders.length === 0 ? (
        <p>No tienes pedidos aún.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Pedido #{order.id}</p>
              <p>Fecha: {order.date}</p>
              <p>Total: ${order.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserPanel;