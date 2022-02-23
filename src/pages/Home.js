import EventCountdown from "../component/EventCountdown";
import Flag from "../component/Flag";
import MajorCauses from "../component/MajorCauses";
import Slider from "../component/Slider"
import Voluntere from "../component/Voluntere";



function Home() {
  
  return (
    <div className="home">
      <Slider />
      <MajorCauses />
      <EventCountdown />
      <Voluntere />
      <Flag />
    </div>
  );
}

export default Home;
