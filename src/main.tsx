import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LangProvider } from './i18n';
import './styles/main.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found');
}

createRoot(rootEl).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
);
