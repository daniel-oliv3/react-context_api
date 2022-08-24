import { createRoot } from 'react-dom/client';
import App from './App';

import { AuthProvider } from "./providers/AuthContext";

createRoot(document.querySelector("#root")).render(
    <AuthProvider>
        <App />
    </AuthProvider>

);

