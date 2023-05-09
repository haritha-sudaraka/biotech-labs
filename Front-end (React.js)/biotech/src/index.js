import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { registerLicense } from '@syncfusion/ej2-base';
import {ContextProvider} from './pages/dashboard/contexts/ContextProvider'

// Registering Syncfusion license key
registerLicense('Syncfusion license key');



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContextProvider><BrowserRouter><App /></BrowserRouter></ContextProvider>);
