import axios from "axios";
function ProtectedPage() {
  // جلب التوكين المحفوظ من اللوكال ستوريج
    const fetchproductdata = () => {
        const token=
        localStorage.getItem("token");
        // اذا لم يكن التوكين موجود اعطاء تنبيه باعادة تسجيل الدحول
        if (!token) {
            alert("انت غير مسجل الدخول يرجى تسجيل الدخول اولا")
            return;
        }
        // ارسال طلب للوصول للصفحة المحمية مع وضع التوكين المحفوض في اللوكال ستوريج  في الهيدر وارساله
        axios.get("https://reqres.in/api/protected-route" , {
          headers:{
            Authorization: `Bearer ${token}`,
          },
        })
        // اذا كان التوكين صالحا يتم الوصول للبيانات
        .then((Response) =>{
          console.log(Response.data);
          alert("تم الوصول الى البيانات بنجاح")
        })
        
        .catch((error) =>{
          console.log("error:",error);
          alert("فشل في الوصول الى البيانات")
        });
    }
   
    return (
        <div>
            <h1>welcome to the ProtectedPage</h1>
            <button onClick={fetchproductdata}
             >fetch product data</button>
        </div>
    );
}
export default ProtectedPage;
