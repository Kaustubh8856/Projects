import "./App.css";
import Accordian from "./components/accordion/index.jsx";
import ImageSlider from "./components/image-slider/index.jsx";
import LoadMore from "./components/loadMore/index.js";
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/star-rating/index.jsx";
import LightDark from "./components/lightDarkMode/index.js";
import ScrollIndicator from "./components/scrollIndicator/index.js";
import TabTest from "./components/tabs/TabTest.js";
import ModalTest from "./components/image-slider/modal/modal-test.js";

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating/> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMore/> */}
      {/* <LightDark /> */}
      {/* <ScrollIndicator url={fetch("https://dummyjson.com/products")} /> */}
      {/* <TabTest /> */}
      <ModalTest/>
    </div>
  );
}

export default App;
