import "../Style.css";
import NavBar from "../Components/NavBar"; 
import Background from "../Components/Background";
import ShowMe from "../Components/showMe";

export default function Main() {
  return (<>
    <div class="mainContain">
      <NavBar />
      <ShowMe />
      </div>
    </>
    );
}
