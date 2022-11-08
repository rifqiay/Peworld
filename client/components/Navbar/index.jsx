import { useState, useEffect } from "react";
import NavbarLogin from "./NavbarLogin";
import NavbarBeforeLogin from "./NavbarBeforeLogin";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem("token");
    setIsLogin(token);
  }, []);
  return <>{isLogin ? <NavbarLogin /> : <NavbarBeforeLogin />}</>;
}
