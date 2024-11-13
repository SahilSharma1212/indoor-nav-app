import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalContextProvider from './GlobalContextProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GlobalContextProvider>
    <App />
    </GlobalContextProvider>

);
