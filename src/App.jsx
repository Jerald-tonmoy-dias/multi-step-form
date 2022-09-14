import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import rac from "./assets/ractangle.png";
import Feedback from "./components/Feedback";
import TopNavbar from "./components/TopNavbar";
import BottomNavigation from "./components/BottomNavigation";
import Information from "./components/Information";
import Confirmation from "./components/Confirmation";

function App() {
  // Count stpes
  const [countSteps, setCountSteps] = useState(0);

  // top navigation title state
  const [navigationTitle, setNavigationTitle] = useState([
    {
      title: "your feedback",
      complete: false,
    },
    {
      title: "your information",
      complete: false,
    },
    {
      title: "confirmation",
      complete: false,
    },
  ]);

  // display content
  const displayComponent = () => {
    switch (countSteps) {
      case 1:
        return <Information />;
      case 2:
        return <Confirmation />;
      default:
        return <Feedback />;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="bg-template_section_bg_gray flex justify-center items-center py-150">
        <div className="bg-white drop-shadow-lg rounded-20 mx-8">
          {/* top navbar */}
          <TopNavbar
            navigationTitle={navigationTitle}
            countSteps={countSteps}
          />

          {/* seperator */}
          <hr />

          {/* component wrapper*/}
          <form action="#" className="mx-12 py-8">
            {displayComponent()}
          </form>

          {/* bottom navigation */}
          <BottomNavigation
            setCountSteps={setCountSteps}
            countSteps={countSteps}
            navigationTitle={navigationTitle}
            setNavigationTitle={setNavigationTitle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
