import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './nav';
import Profile from './profile';
import Achievements from './acheivements';
import Projects from './project';
import Resources from './resources';
import Contact from './contact';

function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/acheivements" element={<Achievements />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
