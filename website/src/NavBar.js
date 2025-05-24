import React from "react"
import "./Style.css"


export function NavBar(){
    const navBar=<>
    <div className="navBar">
    <Logo />
    <div className="buttonContainer">
    <Button text="Life" />
    <Button text="Life"/>
    <Button text="Life"/>
    </div>
    </div>
    </>
    
    
    return(navBar);
}


export function Button({text,link}){
    
    const button=<>
        <button href={link} className="navButton">
        <h1>{text}</h1>

        </button>

    </>
return(button);

}

export function Logo(){
    const logo=<>
    <img className="navLogo" src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256"></img>
    </>
    return(logo);
}

export default NavBar;