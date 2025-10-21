import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WithGraphql } from '@/shared';
import { App } from './app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WithGraphql>
      <App />
    </WithGraphql>
  </StrictMode>,
);
