import { useEffect } from "react";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  const admin_token = Cookies.get("admin_token");
  const teacher_token = Cookies.get("teacher_token");
  const student_token = Cookies.get("student_token");
  const token = admin_token || teacher_token || student_token;

console.log("private route",token)

 useEffect(() => {
    if (!token) {
      window.location.href = "https://portal.a2pyramid.com/";
    }
  }, [token]);

  return token ? children : null;
};

export default PrivateRoute;
