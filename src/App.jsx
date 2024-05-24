import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage, FilmPage } from "./pages";
import { motion } from "framer-motion";
import DayNightToggle from "react-day-and-night-toggle";

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <motion.div
        className="min-h-[100vh] bg-gray-100 px-4 py-14 dark:bg-[#333] md:px-10"
        animate={{ backgroundColor: isDarkMode ? "#333" : "#f5f5f5" }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h1 className="text-bg-gradient text-6xl">
            Movie Explorer
          </h1>
          <div className="w-full flex justify-end">
            <DayNightToggle checked={isDarkMode} onChange={handleToggle} />
          </div>
        </div>
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/:id" element={<FilmPage />} />
        </Routes>
      </motion.div>
    </div>
  );
}
