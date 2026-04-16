import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function App() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className="app">
      <header className="header">
        <h1>Todo App</h1>
        <button onClick={toggle} aria-label="Toggle theme" className="theme-toggle">
          {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
        </button>
      </header>
      <main>
        <p>This is a minimal app demonstrating theme toggling and persistence.</p>
      </main>
    </div>
  );
}
