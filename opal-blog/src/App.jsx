import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BlogsSection from './components/BlogsSection';
import Editor from './components/Editor';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <BlogsSection />
                    </>
                } />
                <Route path="/editor" element={<Editor />} />
            </Routes>
        </Router>
    );
};

export default App;
