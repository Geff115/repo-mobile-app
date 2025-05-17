import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import components from submodules
import TopNav from './components/submodules/top-nav/src/components/TopNav';
import BottomNav from './components/submodules/bottom-nav/src/components/BottomNav';
import ProviderSearch from './components/submodules/provider-search/src/components/ProviderSearch';
import AboutUs from './components/submodules/about-us/src/components/AboutUs';

// Import demo pages from submodules
import TopNavDemo from './components/submodules/top-nav/src/pages/TopNavDemo';
import BottomNavDemo from './components/submodules/bottom-nav/src/pages/BottomNavDemo';
import ProviderSearchDemo from './components/submodules/provider-search/src/pages/ProviderSearchDemo';
import AboutUsDemo from './components/submodules/about-us/src/pages/AboutUsDemo';

// Create a Home component
const Home = () => (
  <div className="home">
    <h1>Git Submodules Demo App</h1>
    <p>This application demonstrates the use of Git submodules in a React project.</p>
    
    <div className="components-grid">
      <div className="component-card">
        <h2>Top Navigation</h2>
        <p>A responsive navigation bar component</p>
        <Link to="/top-nav-demo" className="demo-button">View Demo</Link>
      </div>
      
      <div className="component-card">
        <h2>Provider Search</h2>
        <p>Interactive provider search functionality</p>
        <Link to="/search-demo" className="demo-button">View Demo</Link>
      </div>
      
      <div className="component-card">
        <h2>About Us</h2>
        <p>Company information display component</p>
        <Link to="/about-demo" className="demo-button">View Demo</Link>
      </div>
      
      <div className="component-card">
        <h2>Bottom Navigation</h2>
        <p>Footer navigation component</p>
        <Link to="/bottom-nav-demo" className="demo-button">View Demo</Link>
      </div>
    </div>
    
    <div className="submodules-info">
      <h2>About Git Submodules</h2>
      <p>
        Git submodules allow you to keep a Git repository as a subdirectory of another Git repository.
        This enables modular development where each component can be maintained separately.
      </p>
      <p>
        In this demo, each component is housed in its own repository and integrated into the main app
        as a submodule. This approach promotes code reuse and separation of concerns.
      </p>
    </div>
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
            
            {/* Demo Routes */}
            <Route path="/top-nav-demo" element={<TopNavDemo />} />
            <Route path="/bottom-nav-demo" element={<BottomNavDemo />} />
            <Route path="/search-demo" element={<ProviderSearchDemo />} />
            <Route path="/about-demo" element={<AboutUsDemo />} />
          </Routes>
        </div>
        
        {/* Bottom Navigation from submodule */}
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;