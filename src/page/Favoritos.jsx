
import { useContext } from "react";
import {UserContext} from "../context/UserContext"




export default function Favoritos() {
  
  const {photos} = useContext(UserContext);
  const galeriaFavoritos = photos.filter((e)=> e.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
    <div>
      {galeriaFavoritos.length === 0 ?
        (<div>
          <h3> Agrega tus fotos favoritas aca 🤩🤩🤩🤩</h3>
        </div>) :
        (<div className="p-3 galeria grid-columns-4">
          {galeriaFavoritos.map((item) =>
          (<img src={item.src.tiny} alt={item.alt}/>)
          )}
        </div>)}
    </div>
    </div>
  );
}
