import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

let nextId = 1;

const FILTERS = ['All', 'Active', 'Completed'];

export default function App() {
  const { theme, toggle } = useContext(ThemeContext);
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', done: false },
    { id: nextId++, text: 'Read a book', done: true },
    { id: nextId++, text: 'Go for a walk', done: false },
  ]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, { id: nextId++, text: trimmed, done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.done));
  };

  const filtered = todos.filter((t) => {
    if (filter === 'Active') return !t.done;
    if (filter === 'Completed') return t.done;
    return true;
  });

  const activeCount = todos.filter((t) => !t.done).length;

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <header className="header">
          <h1 className="title">
            <span className="title-icon">✓</span> My Todos
          </h1>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="theme-toggle"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </header>

        <form onSubmit={addTodo} className="add-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="add-input"
            aria-label="New todo"
          />
          <button type="submit" className="add-btn" aria-label="Add todo">
            Add
          </button>
        </form>

        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="todo-list" aria-label="Todo list">
          {filtered.length === 0 && (
            <li className="empty-state">
              {filter === 'Completed' ? 'No completed tasks yet.' : 'Nothing to do — enjoy your day! 🎉'}
            </li>
          )}
          {filtered.map((todo) => (
            <li key={todo.id} className={`todo-item${todo.done ? ' done' : ''}`}>
              <button
                className="check-btn"
                onClick={() => toggleTodo(todo.id)}
                aria-label={todo.done ? 'Mark as active' : 'Mark as done'}
              >
                <span className="checkmark">{todo.done ? '✓' : ''}</span>
              </button>
              <span className="todo-text">{todo.text}</span>
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete todo"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <footer className="footer">
          <span className="count">{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
          {todos.some((t) => t.done) && (
            <button className="clear-btn" onClick={clearCompleted}>
              Clear completed
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
