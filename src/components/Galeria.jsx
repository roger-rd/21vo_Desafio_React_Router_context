
import { useContext } from "react";
import "../assets/css/galeria.css";
import { UserContext } from "../context/UserContext";
import Heart from "./Heart";


export default function Galeria() {

  const {photos, setPhotos}= useContext(UserContext);

  function handleClick (id){
    const index = photos.findIndex((ele)=> ele.id == id)
    photos[index].liked = photos[index].liked ? false : true
    setPhotos([...photos])
  }

  return (

      <div className="galeria">
      {
        photos.map((item) => (
            <article onClick={(e) => handleClick (e.currentTarget.id)} className="position" id={item.id} key={item.id} style={{backgroundImage:`url(${item.src.tiny})`}}>
              <img src={item.src.tiny} alt={item.alt}/>
              <Heart className="absolute" filled={item.liked}/>
            </article>
        )
        )
      }
    </div>
  );
}
