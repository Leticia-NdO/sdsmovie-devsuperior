import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement  // dentro do elemento com id root
);

// vai ser renderizado o componente app (que contém todos os componentes do site
root.render(
    <App />   
);
