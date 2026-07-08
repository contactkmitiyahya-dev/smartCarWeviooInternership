import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../src/index.css';


hydrateRoot(document.getElementById('root'),
<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
  <App />
</BrowserRouter>);