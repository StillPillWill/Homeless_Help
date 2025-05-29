import "../Style.css"
import React,{useState} from "react"

    let mouseX = 0;
    let mouseY = 0;

    // Get references to the display elements
    const mouseXDisplay = document.getElementById('mouseXDisplay');
    const mouseYDisplay = document.getElementById('mouseYDisplay');

    function updateMousePosition(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        if (mouseXDisplay) {
            mouseXDisplay.textContent = mouseX;
        }
        if (mouseYDisplay) {
            mouseYDisplay.textContent = mouseY;
        }


        var img=document.querySelectorAll(".imgWheel")[0]
        img.style.rotate="y "+ mouseX/4+"deg"


    }
    document.addEventListener('mousemove', updateMousePosition);


export default function ShowMe(){
var showThing=
<div class="shower">
    <ShowContent />

</div>;


return(showThing);

}



function ShowContent(){
    var [content,setContent]=useState(<></>);

    React.useEffect(() => {
        setContent(
            <div className="img-container">
          <img className="imgWheel"
            src="https://static.wixstatic.com/media/02f1ab_6eb432b9782946308b0f2129a10f9d77~mv2.jpeg/v1/fill/w_286,h_240,fp_0.21_0.47,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Txt2img%20-%2099033-18-20-23-0002.jpeg"
            alt="A generated image of some content" // Always add an alt attribute for accessibility
          ></img>
          </div>
        );
      }, []);

    return(content);
}

