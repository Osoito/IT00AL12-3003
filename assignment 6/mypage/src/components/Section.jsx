import React, { useEffect } from 'react';

const Section = () => {
  useEffect(() => {
    const homeLink = document.querySelector('.nav-links a[href="#"]');
    homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Home link clicked');
    });
  }, []);

  return (
    <section id="about" className="section">
      <h3>This is a website for IT00AL12-3003 Advanced Web Development</h3>
      <p>Student: Chen Z</p>
    </section>
  );
};

export default Section;