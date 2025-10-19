# NovaTasks 🚀

A modern, full-stack todo application built with React and Node.js. Elevate your productivity with a beautiful, responsive interface and powerful task management features.

![NovaTasks Screenshot](https://via.placeholder.com/800x400/6366f1/ffffff?text=NovaTasks+Preview)

## ✨ Features

### 🎨 Frontend
- **Modern UI/UX**: Beautiful card-based design with animated background orbs
- **Theme Toggle**: Seamless light/dark mode switching with localStorage persistence
- **Progress Tracking**: Visual progress bar showing completion percentage
- **Smart Filtering**: Filter tasks by All, Active, or Completed status
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Loading States**: Smooth loading animations and skeleton states
- **Empty States**: Helpful messages when no tasks are available

### ⚡ Backend
- **RESTful API**: Clean, well-structured API endpoints
- **SQLite Database**: Lightweight, file-based database with Sequelize ORM
- **CORS Enabled**: Secure cross-origin communication
- **CRUD Operations**: Full Create, Read, Update, Delete functionality

### 🚀 Technical Features
- **React 19**: Latest React with modern hooks and patterns
- **Vite**: Lightning-fast build tool and development server
- **Express.js**: Robust Node.js web framework
- **Axios**: Promise-based HTTP client for API calls
- **ESLint**: Code quality and consistency enforcement

## 🛠️ Tech Stack

### Frontend
- **React** 19.1.1 - Modern React with hooks
- **Vite** 7.1.7 - Fast build tool and dev server
- **Axios** 1.12.2 - HTTP client for API communication
- **CSS3** - Custom styling with CSS animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** 5.1.0 - Web framework
- **Sequelize** 6.37.7 - ORM for database management
- **SQLite3** 5.1.7 - Lightweight database

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd novatasks
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up the database**
   ```bash
   cd ../server
   # The database will be automatically created when the server starts
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   The server will start on `http://localhost:5000`

2. **Start the frontend (in a new terminal)**
   ```bash
   cd client
   npm run dev
   ```
   The client will start on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173` to see NovaTasks in action!

## 📁 Project Structure

```
novatasks/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── TodoList.jsx    # Main todo component
│   │   │   └── TodoList.css    # Component styles
│   │   ├── App.jsx        # Main app component
│   │   ├── App.css        # App styles
│   │   └── main.jsx       # Entry point
│   ├── index.html         # HTML template
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   │   └── todoController.js
│   ├── database/          # Database configuration
│   │   └── database.js
│   ├── models/           # Sequelize models
│   │   └── todo.js
│   ├── routes/           # API routes
│   │   └── todoRoutes.js
│   ├── server.js         # Main server file
│   └── package.json      # Backend dependencies
└── README.md             # This file
```

## 🔌 API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo (mark complete/incomplete) |
| DELETE | `/api/todos/:id` | Delete a todo |

### Example API Usage

```javascript
// Get all todos
const response = await axios.get('http://localhost:5000/api/todos');

// Create a new todo
const newTodo = await axios.post('http://localhost:5000/api/todos', {
  title: 'Learn React'
});

// Update a todo
const updatedTodo = await axios.put(`http://localhost:5000/api/todos/${id}`, {
  completed: true
});

// Delete a todo
await axios.delete(`http://localhost:5000/api/todos/${id}`);
```

## 🎯 Key Features Explained

### Progress Tracking
- Visual progress bar shows completion percentage
- Real-time stats for active vs completed tasks
- Motivational feedback based on progress

### Theme System
- Toggle between light and dark modes
- Persistent theme preference using localStorage
- Smooth transitions between themes

### Smart Filtering
- **All**: View all tasks regardless of status
- **Active**: Show only incomplete tasks
- **Completed**: Show only finished tasks

### Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Optimized for all screen sizes

## 🧪 Development

### Available Scripts

#### Client
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

#### Server
```bash
npm run dev      # Start development server with nodemon
```

### Code Quality
- ESLint configuration for code consistency
- Modern React patterns and best practices
- Clean, maintainable code structure

## 🚀 Deployment

### Frontend Deployment
```bash
cd client
npm run build
```

The `dist` folder will contain the production build ready for deployment.

### Backend Deployment
```bash
cd server
npm start
```

The server is ready to run on any Node.js hosting platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Backend powered by [Express.js](https://expressjs.com/)
- Database management with [Sequelize](https://sequelize.org/)
- Icons and animations created with CSS3

---

**NovaTasks** - Elevate your productivity! 🚀