import React, { useState } from 'react';
import ContactForm from './components/forms/ContactForm';
import Contacts from './components/Contacts';
import Footer from './components/footer/Footer';
import Addings from './components/forms/addition';
import './App.css';
import './calculator.css';
interface User {
    fname: String
    lname: String
    age: Number
    bio?: String
}
export interface IGuest {
  guests: {
    name: String
    email: String
    age: Number
    bio?: String
  }[]
}

const App: React.FC = () => {
  const [name, setName] = useState<User["fname"]>('');
  const [student, setStudents] = useState<User>();

  const [guests, setGuests] = useState<IGuest["guests"]>([]);
  
  const showCalculator = ():void => {
    const showCalc = document.querySelector('.calcForm') as HTMLElement;
    
    setTimeout<[]>(()=> {
      showCalc.style.display="block";
    }, 500);
  }

  const hide = ():void => {
    const showCalc = document.querySelector('.calcForm') as HTMLElement;
    showCalc.style.display="none";
  }
  
  return (
    <div className="App">
      <h2>All Messages</h2>
      {guests.length ===0 && <p style={{color: 'brown'}}>No message created yet!</p>}
      <div className='container'>
        <Contacts guests={guests&&guests} />
        <ContactForm guests={guests} setGuests={setGuests} />

        {/* calculator */}
        <button className='btn-calculator' type='button' onMouseMove={() => showCalculator()}>Calc(+/-)</button>
        <Addings show={'none'} hide={hide}/>
      </div>

      <Footer author={"Dom58"}/>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
