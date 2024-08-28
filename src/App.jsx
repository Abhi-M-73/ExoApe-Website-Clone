import Images from "./Components/Images";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Our_strory from "./Components/Our_strory";
import Play from "./Components/Play";
import Spread from "./Components/Spread";
import Work from "./Components/Work";
import LocomotiveScroll from 'locomotive-scroll';

export default function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-full overflow-hidden ">
      <Navbar />
      <Landing/>
      <Work/>
      <Play/>
      <Images/>
      <Spread/>
      <Our_strory/>
    </div>
  );
}
