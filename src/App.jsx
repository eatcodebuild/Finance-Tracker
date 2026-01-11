import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/ThemeContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import FinanceBreakdown from "./pages/FinanceBreakdown";
import NewPayment from "./pages/NewPayment";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/new/payment" element={<NewPayment />} />
          <Route path="/breakdown" element={<FinanceBreakdown />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
