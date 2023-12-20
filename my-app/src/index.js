import React from 'react';
// import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { createRoot } from 'react-dom/client';

// AVANT REACT 18 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// AVEC REACT 18

const root = createRoot(document.getElementById('root'));
root.render(<App />);



