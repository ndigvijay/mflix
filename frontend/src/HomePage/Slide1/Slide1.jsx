import "./Slide1.css";
import netflix_children_profiles from "../../images/netflix_children_profiles.png";

export default function Slide1() {
  return (
    <div className="slide1">
      <img src={netflix_children_profiles} alt="demo pic" />
      <p>
        Create Profiles for Kids and set them free to play and explore in
        entertainment made for them
      </p>
    </div>
  );
}
