import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import FinanceBreakdown from "./pages/FinanceBreakdown";
import NewPayment from "./pages/NewPayment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/new/payment" element={<NewPayment />} />
        <Route path="/breakdown" element={<FinanceBreakdown />} />
      </Routes>
    </Router>
  );
}

export default App;
