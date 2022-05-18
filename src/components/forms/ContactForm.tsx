import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import './index.css';
import { IGuest as Props } from '../../pages/home';
import { sendFeedback } from '../../redux/actions';
export interface IProps {
  guests: Props['guests'];
  setGuests: React.Dispatch<React.SetStateAction<Props['guests']>>;
}

const ContactForm: React.FC<IProps> = ({ guests }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { sendFeedbackSuccess, sendFeedbackFailure, feedbackLoading } = useSelector(
    (state: any) => state.contacts
  );

  const [input, setInput] = useState({
    name: '',
    email: '',
    age: '',
    bio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const data = {
    ...guests,
    firstName: input.name,
    lastName: input.name,
    email: input.email,
    age: parseInt(input.age),
    body: input.bio
  };

  const handleSubmit = (): void => {
    dispatch(sendFeedback(data));
  };

  return (
    <div className="contactForm">
      <h1>Contact Me</h1>
      <hr />
      <div className="contactForms">
        <input
          type="text"
          name="name"
          required={true}
          placeholder="Full Name..."
          className="inputs"
          value={input.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required={true}
          placeholder="Email..."
          className="inputs"
          value={input.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age..."
          className="inputs"
          value={input.age}
          onChange={handleChange}
        />
        <textarea
          name="bio"
          placeholder="Bio..."
          className="textarea"
          value={input.bio}
          onChange={handleChange}
        />

        <button className="buttonSubmit" data-testid="Submit" onClick={handleSubmit}>
          {feedbackLoading ? 'Submitting...' : 'Submit'}
        </button>
        {sendFeedbackSuccess && <span style={{ color: 'green' }}>{sendFeedbackSuccess}</span>}
        {sendFeedbackFailure && <span className="error">Error: {sendFeedbackFailure}</span>}
      </div>
    </div>
  );
};

export default ContactForm;
