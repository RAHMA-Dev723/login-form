import "./App.css";
// use browserRputer library which it used to create system react router
// حيث يستخدم كوسيط يسمح للتطبيق بتحديد المسارات  والتنقل بينها بناءا غلى الروابط
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Form from "./components/Form";
import ProtectedPage from "./components/ProtectedPage";
import ProtectedRouter from "./components/ProtectedRouter";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/ProtectedPage" element={<ProtectedRouter> <ProtectedPage /> </ProtectedRouter>}/>
      <Route path="/AdminDashboard" element={<ProtectedRouter> <AdminDashboard /> </ProtectedRouter>}/>
</Routes>
</Router>
  );
}

export default App;
