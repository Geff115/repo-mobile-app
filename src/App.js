import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import components from submodules
import TopNav from './components/submodules/top-nav/src/components/TopNav';
import BottomNav from './components/submodules/bottom-nav/src/components/BottomNav';
import ProviderSearch from './components/submodules/provider-search/src/components/ProviderSearch';
import AboutUs from './components/submodules/about-us/src/components/AboutUs';

// Create demo components directly in the main app
const TopNavDemo = () => (
  <div className="component-demo">
    <h1>Top Navigation Demo</h1>
    <p>This is a demonstration of the Top Navigation component from its submodule.</p>
    <div className="demo-container">
      <TopNav />
    </div>
  </div>
);

const BottomNavDemo = () => (
  <div className="component-demo">
    <h1>Bottom Navigation Demo</h1>
    <p>This is a demonstration of the Bottom Navigation component from its submodule.</p>
    <div className="demo-container">
      <BottomNav />
    </div>
  </div>
);

const ProviderSearchDemo = () => (
  <div className="component-demo">
    <h1>Provider Search Demo</h1>
    <p>This is a demonstration of the Provider Search component from its submodule.</p>
    <div className="demo-container">
      <ProviderSearch />
    </div>
  </div>
);

const AboutUsDemo = () => (
  <div className="component-demo">
    <h1>About Us Demo</h1>
    <p>This is a demonstration of the About Us component from its submodule.</p>
    <div className="demo-container">
      <AboutUs />
    </div>
  </div>
);

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