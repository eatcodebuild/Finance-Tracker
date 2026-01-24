import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./hooks/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard" 
            element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
            } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
