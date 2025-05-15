import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components from submodules
// Since we're importing directly from the source, we'll use the component files directly
import TopNav from './components/submodules/top-nav/src/components/TopNav';
import BottomNav from './components/submodules/bottom-nav/src/components/BottomNav';
import ProviderSearch from './components/submodules/provider-search/src/components/ProviderSearch';
import AboutUs from './components/submodules/about-us/src/components/AboutUs';

// Create a Home component
const Home = () => (
  <div className="home">
    <h1>Welcome to our Healthcare App</h1>
    <p>This is a demonstration of Git submodules in a React application.</p>
    <p>Use the navigation above to explore different sections of the app.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        {/* Top Navigation from submodule */}
        <TopNav />
        
        {/* Main Content Area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/search" element={<ProviderSearch />} />
          </Routes>
        </div>
        
        {/* Bottom Navigation from submodule */}
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;