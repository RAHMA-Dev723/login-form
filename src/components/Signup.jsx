import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [formInputs, setformInputs] = useState({
        name: "",
        email: "",
        password: "",
      });
      const navigate = useNavigate("");
      return (
    <div className="signup">
      <form  onSubmit={(e) =>{
        e.preventDefault();
        console.log(formInputs);
        // ارسال البيانات الى api
        axios.post("https://reqres.in/api/register",{
            name:formInputs.name,
            email:formInputs.email,
            password:formInputs.password,
        })
        .then((Response) => {
            console.log("Response:", Response.data);
            alert("تم انشاء الحساب بنجاح");
            // التنقل الى صفحة تسجيل الدخول
            navigate("/Login");
        })
        .catch((error) => {
            console.error("error:", error);
            alert("خطا اثناء انشاء الحساب");
        });
      }}>
        <h2>create an account</h2>
        <input
          placeholder=" name"
          type="text"
          value={formInputs.name}
          onChange={(e) => {
            setformInputs({ ...formInputs, name:e.target.value });
          }}
        ></input>
        <input
          placeholder=" email"
          type="email"
          value={formInputs.email}
          onChange={(e) => {
            setformInputs({ ...formInputs, email:e.target.value });
          }}
        ></input>
        <input
          placeholder=" password"
          type="password"
          value={formInputs.password}
          onChange={(e) => {
            setformInputs({ ...formInputs, password: e.target.value });
          }}
        ></input>
        <button className="logout" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default Signup;
