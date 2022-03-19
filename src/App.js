import React, { useState } from 'react';

//-- content
import imgErikPlachta from './assets/img/erik/erik_c_72.png'

//-- components
import Navigation from './components/navigation';
import AboutMe from './components/about-me';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {

  //-- setting default location to about me
  const [location, setLocation] = useState( "about-me" )
  
  //-- Returning all content
  return ([
  
    <header>
      <h1 className='title'>
      <img
          className='title-img'
          src={imgErikPlachta}
          alt="Erik Plachta"
          key="erik-title-image"
        />
        Erik Plachta
      </h1>
      <Navigation
        location={location}
        setLocation={setLocation}
      ></Navigation>
      
    </header>,

    <main>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Resume></Resume>
      <Portfolio></Portfolio>
    </main>,

    <footer>
      <div>GitHub</div>
      <div>Linked-In</div>
      <div>Twitter</div>
      <div>Medium</div>
    </footer>
  
  ]);
}

export default App;
