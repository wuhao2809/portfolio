import React from "react"
import Hero from "./components/Hero"
import { ThemePorvider } from "./contet/ThemeContext"

const App = () => {
  return (
    <ThemePorvider> 
      <div className="min-h-screen bg-white dark:bg-gray-900 text-red-500 dark:text-yellow-500 transition-colors duration-500">
        <Hero />
      </div>
    </ThemePorvider>
  ) 
}

export default App

