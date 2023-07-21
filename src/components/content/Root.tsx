import { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Root.css'

const Root = () => {

  // set document name as myPortfolio..

  useEffect(() => { 
    document.title = 'myPortfolio by Farid Firoz';
  },[])

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
