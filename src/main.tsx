
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force rerender
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
