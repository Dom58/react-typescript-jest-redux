import React, { useState } from 'react';
import ContactForm from '../components/forms/ContactForm';
import Contacts from '../components/Contacts';
import Footer from '../components/footer/Footer';
import Addings from '../components/forms/addition';
import routes from '../config/names';
import '../App.css';
import '../calculator.css';

interface User {
  fname: String;
  lname: String;
  age: Number;
  bio?: String;
}
export interface IGuest {
  guests: {
    name: String;
    email: String;
    age: Number;
    bio?: String;
  }[];
}

const Home = () => {
  const [name, setName] = useState<User['fname']>('');
  const [student, setStudents] = useState<User>();

  const [guests, setGuests] = useState<IGuest['guests']>([]);

  const showCalculator = (): void => {
    const showCalc = document.querySelector('.calcForm') as HTMLElement;

    setTimeout<[]>(() => {
      showCalc.style.display = 'block';
      showCalc.style.transition = 'visibility 0s, opacity 0.2s linear';
      showCalc.style.opacity = '1';
    }, 500);
  };

  const hide = (): void => {
    const showCalc = document.querySelector('.calcForm') as HTMLElement;
    showCalc.style.display = 'none';
  };

  return (
    <div className="App">
      <h2>
        All Messages <a href={routes.rooms}>Rooms</a>
      </h2>
      {guests.length === 0 && <p style={{ color: 'brown' }}>No message created yet!</p>}
      <div className="container">
        <Contacts guests={guests && guests} data-testid="contacts" />
        <ContactForm guests={guests} setGuests={setGuests} data-testid="contactForm" />

        {/* calculator */}
        <button
          data-testid="showCalculator"
          className="btn-calculator"
          type="button"
          onMouseMove={() => showCalculator()}
          onMouseEnter={() => hide()}>
          Calc(+/-)
        </button>
        <Addings show={'none'} hide={hide} data-testid="addForm" />
      </div>

      <Footer author={'Dom58'} data-testid="footer" />
    </div>
  );
};

export default Home;
