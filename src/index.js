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

// Import CSS for demo pages
import './components/submodules/top-nav/src/pages/TopNavDemo.css';
import './components/submodules/bottom-nav/src/pages/BottomNavDemo.css';
import './components/submodules/provider-search/src/pages/ProviderSearchDemo.css';
import './components/submodules/about-us/src/pages/AboutUsDemo.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();