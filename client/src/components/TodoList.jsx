import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TodoList.css";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(true);
    const [adding, setAdding] = useState(false);
    const [filter, setFilter] = useState("all");
    const [showInput, setShowInput] = useState(false);

    const fetchTodos = async () => {
        try {
            setLoading(true);
            const res = await axios.get("http://localhost:5000/api/todos");
            setTodos(res.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        
        try {
            setAdding(true);
            await axios.post("http://localhost:5000/api/todos", { title: title.trim() });
            setTitle("");
            setShowInput(false);
            await fetchTodos();
        } catch (error) {
            console.error("Error adding todo:", error);
        } finally {
            setAdding(false);
        }
    };

    const toggleTodo = async (id, completed) => {
        try {
            await axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
            await fetchTodos();
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todos/${id}`);
            await fetchTodos();
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    const activeTodos = todos.filter(todo => !todo.completed).length;
    const completedTodos = todos.length - activeTodos;
    const progressPercentage = todos.length > 0 ? (completedTodos / todos.length) * 100 : 0;

    return (
        <div className="todo-wrapper">
            {/* Progress Card */}
            <div className="progress-card">
                <div className="progress-header">
                    <h2 className="progress-title">Today's Progress</h2>
                    <div className="progress-stats">
                        <span className="stat-item">
                            <span className="stat-number">{activeTodos}</span>
                            <span className="stat-label">Active</span>
                        </span>
                        <span className="stat-item">
                            <span className="stat-number">{completedTodos}</span>
                            <span className="stat-label">Done</span>
                        </span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
                <div className="progress-text">
                    {progressPercentage.toFixed(0)}% Complete
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="filter-tabs">
                <button
                    className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    <span className="tab-icon">📋</span>
                    <span>All</span>
                    <span className="tab-count">({todos.length})</span>
                </button>
                <button
                    className={`filter-tab ${filter === 'active' ? 'active' : ''}`}
                    onClick={() => setFilter('active')}
                >
                    <span className="tab-icon">⚡</span>
                    <span>Active</span>
                    <span className="tab-count">({activeTodos})</span>
                </button>
                <button
                    className={`filter-tab ${filter === 'completed' ? 'active' : ''}`}
                    onClick={() => setFilter('completed')}
                >
                    <span className="tab-icon">✅</span>
                    <span>Done</span>
                    <span className="tab-count">({completedTodos})</span>
                </button>
            </div>

            {/* Floating Action Button */}
            {!showInput && (
                <button
                    className="fab"
                    onClick={() => setShowInput(true)}
                    title="Add new task"
                >
                    <span className="fab-icon">+</span>
                </button>
            )}

            {/* Add Task Form */}
            {showInput && (
                <div className="add-task-card">
                    <form onSubmit={addTodo}>
                        <div className="input-group">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="What needs to be done?"
                                className="task-input"
                                disabled={adding}
                                autoFocus
                            />
                            <div className="button-group">
                                <button
                                    type="button"
                                    className="cancel-button"
                                    onClick={() => {
                                        setShowInput(false);
                                        setTitle("");
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={`submit-button ${adding ? 'adding' : ''}`}
                                    disabled={!title.trim() || adding}
                                >
                                    {adding ? (
                                        <div className="mini-spinner"></div>
                                    ) : (
                                        <span>Add Task</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}

            {/* Todo List */}
            <div className="todos-container">
                {loading ? (
                    <div className="loading-state">
                        <div className="loading-spinner"></div>
                        <p>Loading your tasks...</p>
                    </div>
                ) : filteredTodos.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">
                            {filter === 'all' ? '📝' : filter === 'active' ? '⚡' : '✅'}
                        </div>
                        <h3 className="empty-title">
                            {filter === 'all'
                                ? "No tasks yet"
                                : filter === 'active'
                                    ? "All caught up!"
                                    : "Nothing completed yet"}
                        </h3>
                        <p className="empty-subtitle">
                            {filter === 'all'
                                ? "Tap the + button to add your first task"
                                : filter === 'active'
                                    ? "Great job! Take a break 🎉"
                                    : "Complete some tasks to see them here"}
                        </p>
                    </div>
                ) : (
                    <div className="todos-grid">
                        {filteredTodos.map((todo, index) => (
                            <div
                                key={todo.id}
                                className={`todo-card ${todo.completed ? 'completed' : ''}`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="todo-content">
                                    <button
                                        className={`completion-button ${todo.completed ? 'completed' : ''}`}
                                        onClick={() => toggleTodo(todo.id, todo.completed)}
                                        title={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                                    >
                                        <span className="completion-icon">
                                            {todo.completed ? '✓' : ''}
                                        </span>
                                    </button>
                                    <div className="todo-text-container">
                                        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                                            {todo.title}
                                        </span>
                                        <div className="todo-actions">
                                            <button
                                                className="delete-action"
                                                onClick={() => deleteTodo(todo.id)}
                                                title="Delete task"
                                            >
                                                <span className="delete-icon">🗑</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;
