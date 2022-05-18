import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import ContactForm from '../ContactForm';
import Contacts from '../../Contacts';

describe('Test addition component', () => {
  const guestss = [
    {
      name: 'String',
      email: 'String',
      age: 30,
      bio: 'String'
    }
  ];
  // const [guests, setGuests] = useState<IGuest["guests"]>(guestss);

  let ContactContainer: HTMLDivElement;

  beforeEach(() => {
    ContactContainer = document.createElement('div');
    document.body.appendChild(ContactContainer);
    ReactDOM.render(
      <Provider store={store}>
        <ContactForm guests={guestss} setGuests={() => {}} />
      </Provider>,
      ContactContainer
    );
  });

  afterEach(() => {
    document.body.removeChild(ContactContainer);
    ContactContainer.remove();
    cleanup();
  });

  it('Render Contact Form component', () => {
    const theComp = render(
      <Provider store={store}>
        <ContactForm guests={guestss} setGuests={() => {}} />
      </Provider>
    );

    const h1 = ContactContainer.querySelectorAll('h1');
    const inputs = ContactContainer.querySelectorAll('input');
    const textareas = ContactContainer.querySelectorAll('textarea');
    const buttons = ContactContainer.querySelectorAll('button');

    expect(h1).toHaveLength(1);
    expect(inputs).toHaveLength(3);
    expect(textareas).toHaveLength(1);
    expect(buttons).toHaveLength(1);

    expect(inputs[0].name).toBe('name');
    expect(inputs[1].name).toBe('email');
    expect(inputs[2].name).toBe('age');
    expect(inputs[0].placeholder).toBe('Full Name...');
    expect(inputs[1].placeholder).toBe('Email...');
    expect(inputs[2].placeholder).toBe('Age...');
    expect(textareas.values).toBeTruthy();

    const subbtn = theComp.getAllByText('Submit');
    expect(subbtn).toBeTruthy();
  });

  it('Should make an submit contacts to admin  with errors', async () => {
    const buttonSubmit = await screen.getByTestId('Submit');

    const name: HTMLElement | any = screen.getByPlaceholderText('Full Name...');
    const email: HTMLElement | any = screen.getByPlaceholderText('Email...');
    const age: HTMLElement | any = screen.getByPlaceholderText('Age...');

    userEvent.type(name, '');
    userEvent.type(email, '');
    await userEvent.type(age, '');

    fireEvent.click(buttonSubmit);
    const theCompError = await render(
      <Provider store={store}>
        <ContactForm guests={guestss} setGuests={() => {}} />
      </Provider>
    );
    const subbtnError = theCompError.getAllByText('Submitting...');
    expect(subbtnError).toBeTruthy();
  });

  it('Should make an submit contacts to admin  without errors', async () => {
    const buttonSubmit2 = await screen.getByTestId('Submit');
    const name: HTMLElement | any = screen.getByPlaceholderText('Full Name...');
    const email: HTMLElement | any = screen.getByPlaceholderText('Email...');
    const age: HTMLElement | any = screen.getByPlaceholderText('Age...');
    const body: HTMLElement | any = screen.getByPlaceholderText('Bio...');

    userEvent.type(name, 'Test');
    userEvent.type(email, 'test@gmail.com');
    userEvent.type(age, '30');
    userEvent.type(body, 'Hello bodyy...');

    fireEvent.click(buttonSubmit2);
    const spans = await ContactContainer.querySelectorAll('span');
    expect(spans).toHaveLength(0);
  });

  // it('Should display all contacts',  async() => {
  //     const allContcts =  screen.getByTestId('contacts');
  //     expect(allContcts).toBeInTheDocument();
  // });

  it('should test snapshot of contact form from error 1', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ContactForm guests={guestss} setGuests={() => {}} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should test snapshot of form calculator from success2', () => {
    const tree2 = renderer
      .create(
        <Provider store={store}>
          <ContactForm guests={guestss} setGuests={() => {}} />
        </Provider>
      )
      .toJSON();
    expect(tree2).toMatchSnapshot();
  });
});
