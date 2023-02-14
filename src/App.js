import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Contact 
     url="https://randomuser.me/api/portraits/men/22.jpg"
     name="Anita Sutton"
     online
     />
     <Contact 
     url="https://randomuser.me/api/portraits/women/54.jpg"
     name="Debra Carpenter"
     />
     <Contact 
     url="https://randomuser.me/api/portraits/women/51.jpg"
     name="Patsy Russell"
     online
     />
    </div>
  );
}

export default App;
