import "./App.css";
// use browserRputer library which it used to create system react router
// حيث يستخدم كوسيط يسمح للتطبيق بتحديد المسارات  والتنقل بينها بناءا غلى الروابط
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Login from "./components/login";
import ProtectedPage from "./components/ProtectedPage";
import ProtectedRouter from "./components/ProtectedRouter";
import AdminDashboard from "./components/AdminDashboard";
import Signup from "./components/Signup";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/ProtectedPage" element={<ProtectedRouter> <ProtectedPage /> </ProtectedRouter>}/>
      <Route path="/AdminDashboard" element={<ProtectedRouter> <AdminDashboard  /> </ProtectedRouter>}/>
      <Route path="/Signup" element={<ProtectedRouter> <Signup /> </ProtectedRouter>}/>
</Routes>
</Router>
  );
}

export default App;
