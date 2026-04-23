/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import World from './pages/World';
import Characters from './pages/Characters';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-on-background selection:bg-jellycat-pink/20 selection:text-jellycat-dark">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/world" element={<World />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/collections" element={<Characters />} />
            <Route path="/find-us" element={<World />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
