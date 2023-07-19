import { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Root.css'

const Root = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/about');
    },[])

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
};

export default Root;
