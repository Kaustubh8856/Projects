import "./App.css";
import Accordian from "./components/accordion/index.jsx";
import ImageSlider from "./components/image-slider/index.jsx";
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/star-rating/index.jsx";

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating/> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
