import React from 'react';
import ReactDOM from 'react-dom/client';

import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render
(
    <React.StrictMode>
       {/*} <FirstApp title="Hola, soy Vegeta"/> */}
       <CounterApp value={20} />
    </React.StrictMode>
)