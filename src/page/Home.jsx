import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

import Galeria from "../components/Galeria";

export default function Home (){

  // const {error} = useContext(UserContext)

  return(

    <div id="Home"> 
      <h1>Natural Pic</h1>
      <Galeria/>
    </div>
  )
}