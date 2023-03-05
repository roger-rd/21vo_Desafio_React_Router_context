import "./styles.css";

import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import Navbar from "./components/Navbar";

import Home from "./page/Home";
import Favoritos from "./page/Favoritos";


export default function App() {

  const endpoint = "../fotos.json";
  const {setError, setPhotos} = useContext(UserContext)

  const getData = async () =>{
    try{
      const response = await fetch(endpoint);
      if (!response.ok) throw "error al acceder a la API";
      const data = await response.json()
      setPhotos(data.photos)
    } catch(error){
      setError (error)
    }
  };
  useEffect(() => {
    getData ()
  },[])

  return (
    <div className="App">
      
        <Navbar />
        
          <Routes>
          <Route path="/" 
          element={<Home />} 
          />
          <Route 
          path="/favoritos" 
          element={<Favoritos />}
            />
        </Routes>
    </div>
  );
}
