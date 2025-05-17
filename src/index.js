import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import CSS from submodules to ensure they're loaded
import './components/submodules/top-nav/src/components/TopNav.css';
import './components/submodules/bottom-nav/src/components/BottomNav.css';
import './components/submodules/provider-search/src/components/ProviderSearch.css';
import './components/submodules/about-us/src/components/AboutUs.css';

// Note: removed imports for demo page CSS files that don't exist yet

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();