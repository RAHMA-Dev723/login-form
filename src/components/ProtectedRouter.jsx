import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
// يتم استخدام هذا المكون للتاكد مما اذا كان التوكين موجودا
function 
ProtectedRouter({ children }) { 
    const token=
    localStorage.getItem("token");
    
    if (!token){
        return <Navigate to="/login" />
    }
    return children;
}
ProtectedRouter.propTypes = {
    children:
    PropTypes.node.isRequired,
}
export default ProtectedRouter;

