# Authentication Web App

A modern React application featuring user authentication, protected routes, and responsive design.

## ✨ Features

- 🔐 User Authentication (Login / Register)
- 🔐 JWT Token Management & Protected Routes
- 🗂️ Redux State Management with Redux Toolkit
- ✅ Form Validation with React Hook Form
- 🔔 Toast Notifications with React Toastify
- 🌗 Dark Theme
- 🔁 Password Recovery (coming soon in future updates)

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Routing:** React Router DOM v6
- **State Management:** Redux Toolkit
- **Styling:** TailwindCSS
- **Data Fetching:** React Query
- **Form Handling:** React Hook Form
- **Notifications:** React Toastify
- **Icons:** Lucide React Icons

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mendeslian/auth-web-app.git
   cd <project-folder>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/          # Custom button component
│   ├── Icon/            # Icon component
│   └── LayoutRoute/     # Route layout wrapper
├── pages/               # Page components
│   ├── Home/
│   ├── Login/
│   ├── Register/
│   └── NotFound/
├── reducers/            # Redux state management
│   └── slicers/         # Redux slices
├── services/            # API services
└── App.jsx              # Main application component
```

---

## 🔍 Features Overview

### 🔐 Authentication

- Login with email/password
- User registration
- JWT token management
- Protected routes
- Password recovery (coming soon)

### 💡 UI/UX

- Responsive design
- Toast notifications for user feedback
- Loading states
- Form validation & error handling

---

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following:
```bash
VITE_API_URL=
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add some amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request 🚀

---

## 📄 License

This project is licensed under the **MIT License**.
Created by [Lian Mendes](https://www.linkedin.com/in/lian-mendes-825295210/)
