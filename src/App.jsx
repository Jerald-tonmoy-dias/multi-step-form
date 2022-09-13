import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';
import rac from "./assets/ractangle.png";
import Feedback from './components/Feedback';
import TopNavbar from './components/TopNavbar';
import BottomNavigation from './components/BottomNavigation';
import Information from './components/Information';
import Confirmation from './components/Confirmation';

function App() {
  // top navigation title state
  const [navigationTitle, setNavigationTitle] = useState([
    {
      title: 'your feedback',
      complete: false
    },
    {
      title: 'your information',
      complete: false
    },
    {
      title: 'confirmation',
      complete: false
    }
  ]);



  return (
    <div className="App">
      <Header />
      <div className='bg-template_section_bg_gray flex justify-center items-center py-150'>
        <div className='  bg-white drop-shadow-lg rounded-20'>
          {/* top navbar */}
          <TopNavbar navigationTitle={navigationTitle} />

          {/* seperator */}
          <hr />

          {/* component wrapper*/}
          <form action="#" className='mx-12 py-8'>
            {/* feedback component */}
            <Feedback />

            {/* information component */}
            {/* <Information /> */}

            {/* confirmation component */}
            {/* <Confirmation /> */}
          </form>


          {/* bottom navigation */}
          <BottomNavigation />
        </div>
      </div>
    </div>
  )
}

export default App
