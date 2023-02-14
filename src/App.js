import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Contact 
     avatar="https://randomuser.me/api/portraits/men/22.jpg"
     name="Anita Sutton"
     status="online"
     />
     <Contact 
     avatar="https://randomuser.me/api/portraits/women/54.jpg"
     name="Debra Carpenter"
     status="offline"
     />
     <Contact 
     avatar="https://randomuser.me/api/portraits/women/51.jpg"
     name="Patsy Russell"
     status="online"
     />
    </div>
  );
}

export default App;
