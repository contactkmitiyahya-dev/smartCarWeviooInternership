import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../src/index.css';
import { AuthProvider } from './context/AuthContext';

hydrateRoot(document.getElementById('root'),
<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
  <AuthProvider>
    <App />
  </AuthProvider>
</BrowserRouter>);