import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './presentation/screens';
// import { AppProvider } from '@pixi/react';
// import { Application } from 'pixi.js';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// const app = new Application();

root.render(
  <React.StrictMode>
    {/* <AppProvider value={app}> */}
    <App />
    {/* </AppProvider> */}
  </React.StrictMode>
);
