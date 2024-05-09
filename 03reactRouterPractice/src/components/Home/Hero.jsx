//import React from 'react';
import heroImage from '../../assets/heroImage1234.jpg';
const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage:  `url(${heroImage})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">Welcome to My Blog</h1>
        <p className="text-xl text-white mb-8">Discover new ideas, insights, and perspectives on topics that matter to you.</p>
        <a href="/blog" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">Explore Blog</a>
      </div> */}
    </section>
  );
};

export default Hero;
