import React, { useState } from "react";

const Toogle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home-page ${isDarkMode ? "dark" : "light"}`}>
      <button className="bg-yellow rounded-lg mt-9" onClick={handleThemeToggle}>
        Toggle Theme
      </button>
      {/* Rest of your home page content */}
    </div>
  );
};

export default Toogle;

// import React, { useState } from "react";

// const HomePage = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleThemeToggle = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`home-page ${isDarkMode ? "dark" : "light"}`}>
//       <h1>Welcome to the Home Page</h1>
//       <button onClick={handleThemeToggle}>Toggle Theme</button>
//       {/* Rest of your home page content */}
//     </div>
//   );
// };

// export default HomePage;

// navbar only ---
// const Navbar = ({ isDarkMode, onToggle }) => {
//     return (
//       <nav className="navbar">
//         <h1>My App</h1>
//         <button className="theme-toggle" onClick={onToggle}>
//           {isDarkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </nav>
//     );
//   };

//   export default Navbar;

// const HomePage = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleThemeToggle = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`home-page ${isDarkMode ? "dark" : "light"}`}>
//       <Navbar isDarkMode={isDarkMode} onToggle={handleThemeToggle} />

//       {/* Rest of your home page content */}
//     </div>
//   );
// };

// export default HomePage;
