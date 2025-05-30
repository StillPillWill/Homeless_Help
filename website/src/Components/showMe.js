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
        //img.style.rotate="y "+ mouseX/4+"deg";
        //img.style.left=(mouseX/document.documentElement.clientWidth)*100-50+"%";
         
}
    document.addEventListener('mousemove', updateMousePosition);


export default function ShowMe(){
var showThing=
<div class="shower">
    <ShowContent />

</div>;


return(showThing);

}

var imgs=[
    "https://static.wixstatic.com/media/02f1ab_6eb432b9782946308b0f2129a10f9d77~mv2.jpeg/v1/fill/w_286,h_240,fp_0.21_0.47,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Txt2img%20-%2099033-18-20-23-0002.jpeg",
    "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg",


]


function ShowContent() {
  // Use useState to manage the current image index
  const [currentImgIndex, setCurrentImgIndex] = useState(0);


  // Function to go to the next image
  const nextImg = () => {
    var element= document.querySelectorAll(".imgWheel")[0];
    var animation1=element.animate([
  { transform: 'rotateY(0deg)' },
  { transform: 'rotatey(90deg)' }
], { duration: 10000 });

    // Update the state based on the previous state
    setCurrentImgIndex((prevIndex) => {
      
      // Calculate the next index, looping back to 0 if we exceed the array length
      return (prevIndex + 1) % imgs.length;
    });
  };

  // The component directly renders its JSX, driven by state
  return (
    <div className="img-container" onClick={nextImg}>
      {" "}
      {/* Pass a reference to the nextImg function */}
      <img
        className="imgWheel"
        src={imgs[currentImgIndex]}
        alt={`A generated image of some content ${currentImgIndex + 1}`} // Improve alt text for clarity
      ></img>
    </div>
  );
}

function getRelativePos(element){
    if (!element || !element.parentElement) return { x: 0, y: 0 };
    const parentRect = element.parentElement.getBoundingClientRect();
    const elemRect = element.getBoundingClientRect();
    return {
        x: elemRect.left - parentRect.left,
        y: elemRect.top - parentRect.top
    };
}
