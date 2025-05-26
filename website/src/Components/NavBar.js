import "../Style.css"


export function NavBar(){
    const navBar=<>
    <div className="navBar">
    <Logo />
    <div className="buttonContainer">
    <Button text="About Us" link="https://youtube.com"/>
    <Button text="Contact Us"/>
    <Button text="Donate"/>
    </div>
    </div>
    </>
    
    
    return(navBar);
}


export function Button({text,link}){
    
    var button=0;
        if(link){
            button=<a href={link} target="_blank" className="navButton">
            <span>
            <h1 style={{margin: "0"}}>{text}</h1>
            </span>
            </a>;
        }
        else{
            button=
            
            <span className="navButton" onClick={()=>{alert("This button is not linked yet!")}}>
            <h1 style={{margin: "0"}}>{text}</h1>
            </span>
        
                }          
return(button);

}

export function Logo(){
    const logo=<>
    <img className="navLogo" src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256"></img>
    </>
    return(logo);
}

export default NavBar;