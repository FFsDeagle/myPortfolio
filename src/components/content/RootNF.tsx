import { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import './Root.css'
import NotFound from "./notfound/NotFound";
import { useAppDispatch } from "../../app/hooks";

const RootNF = () => {

  // set document name as myPortfolio..

  useEffect(() => { 
    document.title = 'myPortfolio by Farid Firoz';
  },[])

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        navigate('/notfound');
        dispatch({ type: 'navbar/changePage', payload: '404 Not Found' })
    },[])

  return (
    <>
      <Navbar />
      <NotFound />
    </>
  )
};

export default RootNF;
