import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from './App';
import { StoreProvider } from './store/context';

const app = (
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
  );

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(app);
