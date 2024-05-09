import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/" className="text-white font-bold">
            Home
          </NavLink>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none mr-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            <div className={`${isOpen ? "block" : "hidden"}`}>
              <ul className="flex flex-col space-y-4">
                <li>
                  <NavLink to="/about" className="text-white">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/project" className="text-white">
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="text-white">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <NavLink to="/about" className="text-white">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className="text-white">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-white">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Navigation;



// import  { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Project from './components/Projects/Project';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
// function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Router>
//       <nav className="bg-gray-800 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <NavLink to="/" className="text-white font-bold">
//             Home
//           </NavLink>
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-white focus:outline-none">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//           <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
//             <li>
//               <NavLink to="/about" className="text-white">
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/project" className="text-white">
//                 Project
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" className="text-white">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default Navigation;
