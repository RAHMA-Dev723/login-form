import "./Form.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
function Form() {
  const [formInputs, setformInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate("");

  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          // لمن عمل تحديث للصفحة
          e.preventDefault();
          console.log(formInputs);
          // عندما نقوم بتسجيل الدخول يتم ارسال البيانات الى ال api
          // لحفطه في السيرفر
          axios
            .post("https://reqres.in/api/login", {
              email: formInputs.email,
              password: formInputs.password,
            })
            // ياتي الاستجابة والتي نتضمن البيانات مع التوكين
            .then((Response) => {
              console.log("Response:", Response.data);
              const token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywicm9sZSI6ImFkbWluIn0.sflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
              // نقوم بحفظ التوكين المستلم من السيرفر
              localStorage.setItem("token", token);
              alert("تم تسجيل الدخول بنجاح");
              // فك تشفير التوكين لاستخراح دور المستخدم
              const decodeToken = jwtDecode(token);
              const userRole = decodeToken.role;
              // التنقل الى الصفحة المناسبة بناء على الدور
              if (userRole === "admin") {
                navigate("/AdminDashboard");
              } else navigate(" /ProtectedPage");
            })
            .catch((error) => {
              console.error("error:", error);
              alert("خطا في تسجيل الدخول");
            });
        }}
      >
        <h2>welcome back!</h2>
        <input
          placeholder="email"
          type="email"
          value={formInputs.email}
          onChange={(event) => {
            setformInputs({ ...formInputs, email: event.target.value });
          }}
        ></input>
        <input
          placeholder="password"
          type="password"
          value={formInputs.password}
          onChange={(event) => {
            setformInputs({ ...formInputs, password: event.target.value });
          }}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Form;
