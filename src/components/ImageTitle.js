import '../App.css';
import Navbar from './Navbar.js';
import backgroundImage from '../assets/TopPhotoWide.jpg';

function ImageTitle(){
    return (
      <div className="header-background-image-container"> 
        <img src={backgroundImage} className="title-background-image"></img>
        <div className="background-text"/>
      </div>
    )
}

export default ImageTitle