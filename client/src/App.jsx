import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./hooks/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) return (
    <div className="flex justify-center min-h-svh items-center">
      <div class="loader"></div>
    </div>
  );
  
  return isAuthenticated ? children : <Navigate to="/" />;
}

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
